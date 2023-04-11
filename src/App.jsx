import Header from "./components/Header";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
