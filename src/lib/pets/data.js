export const fetchPets = async ({ search = "", species = "", sort = "" }) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (species) params.append("species", species);
  if (sort) params.append("sort", sort);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets?${params.toString()}`,
  );

  const data = await res.json();
  return data || [];
};

export const fetchFeaturesPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};
