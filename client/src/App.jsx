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
      <Header/>
      <Home />
      {/* <SellerProfile /> */}
      {/* <DirectionClock /> */}
      {/* <SimilarProperties /> */}
      {/* <SimilarPlot /> */}
      {/* <ViewHostel /> */}
      <Footer/>
    </main>
  );
}

export default App;
