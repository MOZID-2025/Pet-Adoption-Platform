export const fetchPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);
  const data = await res.json();
  return data || [];
};
export const fetchFeaturesPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};
