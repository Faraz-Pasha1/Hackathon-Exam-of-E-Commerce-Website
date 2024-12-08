import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Viewmore from "./components/Viewmore";
import Toppicks from "./components/Toppicks";
import Newarrivals from "./components/Newarrivals";
import Ourblogs from "./components/Ourblogs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div>
        
        <Hero/>
        <Viewmore/>
        <Toppicks/>
        <Newarrivals/>
        <Ourblogs/>
        <Instagram/>
        

      </div>  
  );
}
