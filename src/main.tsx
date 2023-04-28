import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./theme/GlobalStyles.ts";
import { PokemonContextProvider } from "./contexts/FavouritePokemonContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonContextProvider>
    <>
      <GlobalStyle />
      <App />
    </>
  </PokemonContextProvider>
);
