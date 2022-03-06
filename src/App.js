import { useEffect } from "react";
import Aos from 'aos'
import "./App.css";

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
    </div>
  );
}

export default App;
