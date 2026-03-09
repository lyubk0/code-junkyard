export const getCats = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1`,
      {
        headers: {
          "x-api-key": process.env.CATS_API_KEY as string,
        },
        cache: "no-cache",
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("[GET_CATS] error", error);
  }
};

export const getDogs = async () => {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1`,
      {
        headers: {
          "x-api-key": process.env.DOGS_API_KEY as string,
        },
        cache: "no-cache",
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("[GET_DOGS] error", error);
  }
};

export const getCat = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=` + id,
      {
        headers: {
          "x-api-key": process.env.CATS_API_KEY as string,
        },
        cache: "no-cache",
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("[GET_CAT] error", error);
  }
};

export const getDog = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=` + id,
      {
        headers: {
          "x-api-key": process.env.DOGS_API_KEY as string,
        },
        cache: "no-cache",
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("[GET_DOG] error", error);
  }
};
