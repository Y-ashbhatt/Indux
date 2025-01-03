import Home from "./pages/home/Home";
import SellerProfile from "./pages/sellerProfile/SellerProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="max-w-[1450px] w-full block mx-auto overflow-auto">
      <Header/>
      <Home />
      {/* <SellerProfile /> */}
      <Footer/>
    </main>
  );
}

export default App;
