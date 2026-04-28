export const getData = async () => {
  const res = await fetch("https://pixgen-nextjs-kappa.vercel.app/data.json");

  const data = await res.json();

  return data;
};

export const getCategories = async () => {
  const res = await fetch(
    "https://pixgen-nextjs-kappa.vercel.app/category.json",
  );

  const category = await res.json();

  return category;
};
