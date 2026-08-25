import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import WhatsAppButton from "./assets/components/WhatsAppButton/WhatsAppButton";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;