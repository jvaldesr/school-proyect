import { useEffect } from "react";
import Aos from 'aos'
import "./App.css";
import Navbar from './component/navbar'
import Home from './routes/Home'
import firebase from './credentials/firebase'
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div>
      <header>Hellow World</header>
      <Navbar />
      <Home />
      <firebase />
    </div>
  );
}

export default App;
