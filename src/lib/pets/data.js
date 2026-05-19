export const fetchPets = async () => {
  const res = await fetch(`${process.env.NEXT_CLIENT_API_URL}/pets`);
  const data = res.json();
  return data || [];
};

export const fetchFeaturesPets = async () => {
  const res = await fetch(`${process.env.NEXT_CLIENT_API_URL}/featured`);
  const data = res.json();
  return data || [];
};
