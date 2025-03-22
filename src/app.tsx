import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./components/loading/index.tsx";
import Weather from "./view/weather/index.tsx";

const App = () => {
  return (
      
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={ <Weather /> } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;