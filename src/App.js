import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1 className="m-5 bg-slate-200 p-2 text-lg font-bold text-green-500 hover:text-pink-500">
        Hello React!
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
