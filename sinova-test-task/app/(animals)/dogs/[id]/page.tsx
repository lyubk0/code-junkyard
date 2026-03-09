import { Container } from "@/shared/components";
import { getDog } from "@/shared/services/breeds";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const data = await fetch(
    `https://api.thedogapi.com/v1/images/search?breed_ids=` + id,
    {
      headers: {
        "x-api-key": process.env.DOGS_API_KEY as string,
      },
    }
  ).then((res) => res.json());

  return {
    title: data[0].breeds[0].name,
  };
}

export default async function DogPage({ params }: { params: { id: string } }) {
  const data = await getDog(params.id);
  return (
    <Container className="px-4 md:px-4 lg:px-4">
      <div>
        <h1 className="text-4xl mb-4 font-bold">{data[0].breeds[0].name}</h1>
      </div>
      <p className="text-gray-400">Bred for: {data[0].breeds[0].bred_for}</p>
      <p className="text-gray-400">
        Temperament: {data[0].breeds[0].temperament}
      </p>
      <p className="text-gray-400">Life span: {data[0].breeds[0].life_span}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-4">
        {data.map((item: any) => (
          <Image
            key={item.id}
            src={item.url}
            alt={item.breeds[0].name || ""}
            placeholder="blur"
            blurDataURL={"/images/dog.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full mt-3 rounded-md h-[400px] object-cover"
          />
        ))}
      </div>
    </Container>
  );
}
