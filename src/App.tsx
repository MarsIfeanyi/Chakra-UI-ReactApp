import "./App.css";
import { Features } from "./components/Features";

import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  );
};

export default App;
