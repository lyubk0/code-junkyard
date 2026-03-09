export const filteredBreeds = (breeds: any[], value: string) => {
  return breeds.filter((item) =>
    item.breeds[0].name.toLowerCase().includes(value.toLowerCase())
  );
};
