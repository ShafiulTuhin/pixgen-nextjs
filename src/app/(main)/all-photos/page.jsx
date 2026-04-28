import PhotoCard from "@/component/shared/PhotoCard";
import { getCategories, getData } from "@/lib/api";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const aiData = await getData();
  const categories = await getCategories();

  const filteredPhotos = category
    ? aiData.filter(
        (data) => data.category.toLowerCase() == category.toLowerCase(),
      )
    : aiData;
  return (
    <div className="px-4 lg:px-0 container mx-auto py-10">
      <h2 className=" font-bold text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        All Photos
      </h2>
      <div className="space-x-4 mt-5">
        {categories.map((cat) => (
          <Link href={`?category=${cat.name.toLowerCase()}`} key={cat.id}>
            {" "}
            <Button className="" variant="outline">
              {cat.name}
            </Button>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-5">
        {filteredPhotos.map((data) => (
          <PhotoCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
