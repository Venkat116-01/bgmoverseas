import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    
      
      <AppRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;