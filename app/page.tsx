import CardDiaries from "@/app/components/global/(diary)/CardDiaries";
import Wrapper from "@/app/components/global/Wrapper";

export const revalidate = 0;

export default function page(): React.ReactElement {
  return (
    <Wrapper>
      <CardDiaries />
    </Wrapper>
  );
}
