import { createContext, useState } from "react";

export const PokemonContext = createContext<{
  favourites: string[];
  addFavourite: (name: string) => void;
  removeFavourite: (name: string) => void;
}>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const PokemonContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  function addFavourite(name: string) {
    setFavourites((prev) => [...prev, name]);
  }

  function removeFavourite(name: string) {
    setFavourites((prev) => prev.filter((pokemonName) => pokemonName !== name));
  }

  return (
    <PokemonContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
