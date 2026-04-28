import Banner from "@/component/homepage/Banner";

import ShowItems from "@/component/homepage/ShowItems";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full">
      <Banner />
      <ShowItems />
    </div>
  );
}
