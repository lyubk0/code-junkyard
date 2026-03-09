import { Container } from "@/shared/components";
import { CardsList } from "@/shared/components/CardsList";
import { shuffleArray } from "@/shared/lib";
import { getCats, getDogs } from "@/shared/services/breeds";

export default async function Home() {
  const dogs = await getDogs();
  const cats = await getCats();
  const concatDatas = [...dogs, ...cats];

  return (
    <Container>
      <CardsList items={shuffleArray(concatDatas)} />
    </Container>
  );
}
