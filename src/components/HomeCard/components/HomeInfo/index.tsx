import { Home } from "../../../../store/type";
import { Icon } from "../../../Icons/Icon";
import { HomeInfoContainer, HomeInfoItem } from "./style";

interface Props {
  home: Home;
}

export const HomeInfo = ({ home }: Props) => (
  <HomeInfoContainer>
    {home.bedsCount > 0 && (
      <HomeInfoItem>
        <Icon name="room" />
        {home.bedsCount} Bedrooms
      </HomeInfoItem>
    )}

    <HomeInfoItem>
      <Icon name="bathroom" />
      {home.bathroomsCount} Bathrooms
    </HomeInfoItem>

    {home.hasPool && (
      <HomeInfoItem>
        <Icon name="pool" />
        Pool
      </HomeInfoItem>
    )}
    <HomeInfoItem>
      <Icon name="user" />
      {home.bathroomsCount} Guests
    </HomeInfoItem>
  </HomeInfoContainer>
);
