import { useContext, useState } from "react";
import { StyledApp } from "./App.style";
import { CustomCursor } from "./components/CustomCursor";
import { Logo } from "./components/Logo";
import { PokemonDetail } from "./components/PokemonDetail";
import { PokemonContext } from "./contexts/FavouritePokemonContext";
import { PAGE_SIZE, usePokemons } from "./hooks/usePokemons";

function App() {
  const [detailUrl, setDetailUrl] = useState<string>("");
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);
  const { pokemons, hasNext, hasPrev } = usePokemons(pokemonIndex);
  const { favourites } = useContext(PokemonContext);

  return (
    <StyledApp>
      <header>
        <Logo />
        <h1>Hinto Pokedex</h1>
        <Logo />
      </header>
      {detailUrl ? (
        <PokemonDetail url={detailUrl} goBack={() => setDetailUrl("")} />
      ) : (
        <>
          <div className="grid">
            {pokemons.map((pokemon: any) => (
              <button
                key={pokemon.name}
                className="card"
                onClick={() => setDetailUrl(pokemon.url)}
              >
                {pokemon.name} {favourites.includes(pokemon.name) ? "⭐️" : ""}
              </button>
            ))}
          </div>
          <div id="navigation">
            {hasPrev ? (
              <button
                className="card"
                onClick={() => setPokemonIndex((prev) => prev - PAGE_SIZE)}
              >
                ⬅️ Prev
              </button>
            ) : (
              <div />
            )}
            {hasNext ? (
              <button
                className="card"
                onClick={() => setPokemonIndex((prev) => prev + PAGE_SIZE)}
              >
                Next ➡️
              </button>
            ) : (
              <div />
            )}
          </div>
        </>
      )}
      <CustomCursor />
    </StyledApp>
  );
}

export default App;
