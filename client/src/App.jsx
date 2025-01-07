import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DirectionClock from "./layouts/SearchSiderBar/_components/DirectionClock";
import Home from "./pages/home/Home";
import SimilarPlot from "./pages/plotView/_components/SimliarPlot";
import SellerProfile from "./pages/sellerProfile/SellerProfile";
import ViewHostel from "./pages/viewHostel/viewHostel";
import SimilarProperties from "./pages/viewProperties/_components/SimilarProperties";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <main className="max-w-[1450px] w-full block mx-auto overflow-auto">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seller-profile" element={<SellerProfile />} />
          <Route path="/direction-clock" element={<DirectionClock />} />
          <Route path="/similar-properties" element={<SimilarProperties />} />
          <Route path="/similar-plot" element={<SimilarPlot />} />
          <Route path="/view-hostel" element={<ViewHostel />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
