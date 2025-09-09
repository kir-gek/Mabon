import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RootStore } from "./store/rootStore.ts";

const rootStore = new RootStore();

export const RootStoreContext = createContext<RootStore | null>(null);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RootStoreContext.Provider value={rootStore}>
        <App />
      </RootStoreContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
