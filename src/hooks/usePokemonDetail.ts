import { useEffect, useState } from "react";

const localCache: any = {};

export const usePokemonDetail = (url: string) => {
  const [pokemonDetail, setPokemonDetail] = useState<any>(null);

  useEffect(() => {
    if (localCache[url]) {
      setPokemonDetail(localCache[url]);
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          localCache[url] = res;
          setPokemonDetail(res);
        });
    }
  }, [url]);

  return { pokemonDetail };
};
