import { useState } from "react";

import Dashboard from "./components/Dashboard/Main";
import "./App.css";

function App() {


  return (
    <>
      <div className="flex">
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
