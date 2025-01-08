import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SimilarPlot from "./pages/plotView/_components/SimliarPlot";
import SellerProfile from "./pages/sellerProfile/SellerProfile";
import DisplaySellerProfile from "./pages/sellerProfile/DispalaySellerProfile";
import EditSellerProfile from "./pages/sellerProfile/EditSellerProfile";
import ViewHostel from "./pages/viewHostel/viewHostel";
import SimilarProperties from "./pages/viewProperties/_components/SimilarProperties";
import Footer from "./layouts/Footer";
import RentProperty from "./pages/RentProperty/RentProperty";
import ListProperty from "./pages/ListProperty/ListProperty";
import PageNotFound from "./layouts/PageNotFound";
import Header from "./layouts/Header";
import BuyProperties from "./pages/buyProperties/BuyProperties";
import SellerCatalog from "./pages/sellerProfile/SellerCatalog";

function App() {
  return (
    <main className=" w-full block mx-auto overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route path="/seller-catalog" element={<SellerCatalog />} />
        <Route
          path="/display-seller-profile/:id"
          element={<DisplaySellerProfile />}
        />
        <Route
          path="/edit-seller-profile/:id"
          element={<EditSellerProfile />}
        />
        <Route path="/buy-properties" element={<BuyProperties />} />
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
