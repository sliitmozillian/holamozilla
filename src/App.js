import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/register";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";

import TicketPage from "./pages/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ticket" element={<TicketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
