import { render } from "react-dom";
//import Pet from "./pet";
import SearchParams from "./SearchPrrams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
