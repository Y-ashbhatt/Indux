import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SimilarPlot from "./pages/plotView/_components/SimliarPlot";
import SellerProfile from "./pages/sellerProfile/SellerProfile";
import ViewHostel from "./pages/viewHostel/viewHostel";
import SimilarProperties from "./pages/viewProperties/_components/SimilarProperties";
import Footer from "./layouts/Footer";
import BuyProperty from "./pages/BuyProperty/BuyProperty";
import RentProperty from "./pages/RentProperty/RentProperty";
import ListProperty from "./pages/ListProperty/ListProperty";
import PageNotFound from "./layouts/PageNotFound";
import Header from "./layouts/Header";

function App() {
  return (
    <main className=" w-full block mx-auto overflow-hidden">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route path="/buy-properties" element={<BuyProperty />} />
        <Route path="/rent-properties" element={<RentProperty />} />
        <Route path="/list-properties" element={<ListProperty />} />
        <Route path="/similar-plot" element={<SimilarPlot />} />
        <Route path="/similar-properties" element={<SimilarProperties />} />
        <Route path="/viewhostel" element={<ViewHostel />} />
        <Route path="*" element={<PageNotFound />} /> {/* Handle 404 */}
      </Routes>
      {/* <DirectionClock /> */}
      <Footer />
    </main>
  );
}

export default App;
