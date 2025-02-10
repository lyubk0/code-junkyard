import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-start  gap-6 p-0 mt-[90px] mx-[84px]">
      <div className="flex flex-col items-center gap-3">
        <Link href="/client-side-rendering">
          <Button variant={"ghost"}>Client Side Rendering</Button>
        </Link>
        <Link href="/server-side-rendering">
          {" "}
          <Button variant={"ghost"}>Server Side Rendering</Button>
        </Link>
        <Link href="/incremental-static-generation">
          <Button variant={"ghost"}>Incremental Static Generation</Button>
        </Link>
      </div>
    </div>
  );
}
