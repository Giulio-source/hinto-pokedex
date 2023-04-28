import { useEffect, useState } from "react";

export const PAGE_SIZE = 21;
const localCache: any = {};

export const usePokemons = (startIndex: number) => {
  const [pokemons, setPokemons] = useState<[]>([]);
  const [hasNext, setHasNext] = useState<string | null>(null);
  const [hasPrev, setHasPrev] = useState<string | null>(null);

  useEffect(() => {
    if (localCache[`index-${startIndex}`]) {
      setPokemons(localCache[`index-${startIndex}`].results);
      setHasNext(localCache[`index-${startIndex}`].next);
      setHasPrev(localCache[`index-${startIndex}`].previous);
    } else {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${startIndex}&limit=${PAGE_SIZE}`
      )
        .then((res) => res.json())
        .then((res) => {
          localCache[`index-${startIndex}`] = res;
          setPokemons(res.results);
          setHasNext(res.next);
          setHasPrev(res.previous);
        });
    }
  }, [startIndex]);

  return { pokemons, hasNext, hasPrev };
};
