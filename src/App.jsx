import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./Components/Spinner";
import AppLayout from "./AppLayout";
import Homepage from "./Pages/Homepage";
import Hotels from "./Pages/Hotels";
import Aboutus from "./Pages/Aboutus";
import Gallery from "./Pages/Gallery";
import News from "./Pages/News";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes fallback={<Spinner />}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
