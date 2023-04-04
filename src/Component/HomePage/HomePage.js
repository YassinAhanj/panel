import { useEffect } from "react"
import "../../Style//HomePage/HomePage.css";
import Ersal from "./Ersal";
import Footer from "./Footer";
import Hero from "./Hero";
import Nazarat from "./Nazarat";
import NemuneKar from "./NemuneKar";
import Poshtibani from "./Poshtibani";
import Whyfaraz from "./WhyFaraz";

const HomePage = () => {
    useEffect(() => {
        document.title = "FarazCart | Welcome"
    })
    return (
       <div className="HomePage_body">
            <Hero />
            <Whyfaraz />
            <Ersal />
            <NemuneKar />
            <Nazarat />
            <Poshtibani />
            <Footer />
       </div>
    )
}
export default HomePage;