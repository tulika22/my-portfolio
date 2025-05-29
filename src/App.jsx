import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import {Learnings} from "./pages/Learnings";
import { Toaster } from "@/components/ui/toaster";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vercel.com/analytics/script.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/learnings" element={<Learnings />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
