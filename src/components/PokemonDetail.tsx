import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../contexts/FavouritePokemonContext";
import { usePokemonDetail } from "../hooks/usePokemonDetail";

export const StyledPokemonDetail = styled.div`
  max-width: 920px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;

  .content {
    background: rgba(0, 0, 0, 0.7);
    padding: 24px;
    border-radius: 32px;
    color: #ededed;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
      color: inherit;
      text-transform: capitalize;
      margin-bottom: 16px;
    }

    .move {
      text-transform: capitalize;
    }

    .type {
      display: flex;
      gap: 8px;
    }

    .moves {
      display: flex;
      gap: 8px;
    }

    .moves-grid {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }

  .home-button {
    width: 100%;
    margin-bottom: 32px;
  }

  .pokemon {
    width: 100%;
    object-fit: contain;
  }
`;

export const PokemonDetail = ({
  url,
  goBack,
}: {
  url: string;
  goBack: () => void;
}) => {
  const { pokemonDetail } = usePokemonDetail(url);
  const { favourites, addFavourite, removeFavourite } =
    useContext(PokemonContext);

  console.log(
    "%c HERE",
    "background: dodgerblue; color: white; padding: 6px 8px 4px 2px; border-radius: 999px",
    favourites
  );

  return (
    <StyledPokemonDetail>
      <div>
        <button className="home-button" onClick={goBack}>
          ⬅️ back to pokedex
        </button>
        <img
          src={pokemonDetail?.sprites?.other["official-artwork"].front_default}
          alt={pokemonDetail?.name}
          className="pokemon"
        />
      </div>
      <div className="content">
        <h1>{pokemonDetail?.name}</h1>
        <div className="type">
          Type:
          {pokemonDetail?.types?.map((type: any) => (
            <span key={type.type.name}>{type.type.name}</span>
          ))}
        </div>
        <div>Weight: {pokemonDetail?.weight}</div>
        <div className="moves">
          <div>Moves:</div>
          <div className="moves-grid">
            {pokemonDetail?.moves.slice(0, 10).map((move: any) => (
              <p className="move">{move.move.name}</p>
            ))}
          </div>
        </div>
      </div>
      {favourites.includes(pokemonDetail?.name) ? (
        <button onClick={() => removeFavourite(pokemonDetail.name)}>
          ⛔️ Remove favourite ⛔️
        </button>
      ) : (
        <button onClick={() => addFavourite(pokemonDetail.name)}>
          ⭐️ Add to Favourites ⭐️
        </button>
      )}
    </StyledPokemonDetail>
  );
};
