import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
