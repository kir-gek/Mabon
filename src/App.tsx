import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
