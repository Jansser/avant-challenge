import {
  HomeTitleContent,
  HomeTitleHeader,
  HomeTitleHeaderLine,
} from "./style";

interface Props {
  loading: boolean;
  count: number;
}

export const HomeTitle = ({ loading, count }: Props) => {
  if (!loading && !count) return null;

  return (
    <div>
      <HomeTitleHeader>
        {loading ? "Please Wait" : "your stay in one of"}
        <HomeTitleHeaderLine />
      </HomeTitleHeader>
      <HomeTitleContent>
        <span>{loading ? "Loading" : count}</span> homes
      </HomeTitleContent>
    </div>
  );
};
