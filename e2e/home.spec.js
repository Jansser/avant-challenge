/* eslint-disable no-undef */
describe("Avant Stay Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("Menu should be visible", () => {
    const menuItems = [
      "Find Homes",
      "Partners",
      "Company Retreats",
      "More",
      "Sign In",
      "Sign Up",
    ];

    menuItems.forEach((item) => {
      cy.contains(item);
    });

    cy.contains("Any Region");
  });

  it("URL query-string params should reflect on filter inputs", () => {
    cy.visit(
      "http://localhost:3001/regions/Scottsdale?checkIn=2021-11-18&checkOut=2021-11-25&coupon=AVANT10&guests=5&order=PRICE_DESC"
    );

    cy.contains("Scottsdale, Arizona");
    cy.contains("Nov 18, 2021");
    cy.contains("Nov 25, 2021");
    cy.contains("5 Guests");
    cy.contains("Price: highest first");
    cy.get("input").should("have.value", "AVANT10");
  });

  it("Should show placeholder cards when loading homes", () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept("https://fake-api.avantstay.dev/graphql", (request) => {
      return trigger.then(() => {
        request.reply();
      });
    });

    cy.visit("http://localhost:3001");

    cy.get("[data-cy='home-skeleton']")
      .should("have.length", 3)
      .then(() => {
        sendResponse();
      });
  });

  it("Should load 10 homes at first", () => {
    cy.visit("http://localhost:3001/homes");
    cy.get('[data-cy="home-card"]').should("have.length", 10);
  });

  it("When no dates are selected, should show the price range for high and low seasons on the home cards", () => {
    const firstHomeCard = cy.get('[data-cy="home-card"]').first();
    firstHomeCard
      .should("contain", "Budget Season")
      .and("contain", "$318 - $556")
      .and("contain", "Budget Season");
  });

  it("When there's a period selected on the search bar, should show the total price and avg price per night on the home cards", () => {
    const datePicker = cy.get('[data-cy="date-range-picker"]');
    datePicker.click();

    cy.get(".rdrDays").contains("18").click();
    cy.get(".rdrDays").contains("27").click();
    cy.get("body").click(0, 0);

    const firstHomeCard = cy.get('[data-cy="home-card"]').first();
    firstHomeCard
      .should("contain", "Total • 9 nights")
      .and("contain", "$8,582")
      .and("contain", "$954 per night")
      .and("not.contain", "Budget Season");
  });

  it("Should display empty results message", () => {
    cy.visit(
      "http://localhost:3001/homes?checkIn=2021-11-18&checkOut=2021-11-20"
    );

    cy.contains("Oops! We haven’t found anything mathing your search.");
    cy.contains("See all homes");
  });
});
