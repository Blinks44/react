import PageHeader from "./components/navigation/PageHeader.jsx";
import Index from "./routes/index.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <Index handleCartChange={handleCartChange} />
    </>
  );
}

export default App;
