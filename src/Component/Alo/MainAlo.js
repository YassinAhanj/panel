import "../../Style/Alo/MainAlo.css"

import what from "../../images/Alo/whatsapp.png"
import tel from "../../images/Alo/telegram.png"
import ig from "../../images/Alo/instagram.png"
import shot from "../../images/Alo/shot.png"
import Ellipse14 from "../../images/Alo/Ellipse14.png"
import logoFaraz from "../../images/Alo/logoFaraz.png"

const MainAlo = () => {
    return (
        <main>
            <div className="marginTopAlo">
                <img className="shot" src={shot} alt="shot" />
                <img className="Ellipse14" src={Ellipse14} alt="Ellipse14" />
                <img className="logoFaraz" src={logoFaraz} alt="logoFaraz" />
               
                <div className="AloText">
                    <h3 className="titleAlo">
                        الو فراز کارت؟
                    </h3>
                    <p className="ContentAlo">
                        نگران هیچ چی نباش! هر سوالی داشتی یا یه وقت مشکلی پیش اومد ما شبانه روزی در خدمتیم :)
                    </p>
                    <a className="numTelAlo" href="tel:+989999953235" target="_blank" rel="noopener noreferrer">09999953235</a>
                    <p className="titleIconAlo">
                        همه جا باهاتیم :)
                    </p>
                    <div className="AloIcons">
                        <img className="AloIcon" src={what} alt="whatsapp" />
                        <img className="AloIcon" src={ig} alt="instagram" />
                        <img className="AloIcon" src={tel} alt="telgeram" />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MainAlo;