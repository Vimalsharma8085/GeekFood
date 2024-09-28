
import  { useState } from "react";
import Home from "./Home";
import Quote from "./Quote";

function App() {
  const [currentComponent, setCurrentComponent] = useState("Home");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return <Home />;
      case "Quote":
        return <Quote />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav>
        <ul className="flex space-x-4 p-4 bg-gray-200">
          <li>
            <button
              onClick={() => setCurrentComponent("Home")}
              className="text-blue-600 font-semibold"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentComponent("Quote")}
              className="text-blue-600 font-semibold"
            >
              Quote
            </button>
          </li>
        </ul>
      </nav>
      <div>{renderComponent()}</div>
    </>
  );
}

export default App;

