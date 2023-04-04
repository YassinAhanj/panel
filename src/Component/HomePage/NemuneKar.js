import bache from "../.././images/HomePage/nemuneKar/bacha.png"
import farazCart from "../.././images/HomePage/nemuneKar/farazCart.png"
import gushi from "../.././images/HomePage/nemuneKar/gushi.png"
import "../../Style/HomePage/NemuneKar.css"
import back3 from '../../images/HomePage/nemuneKar/back3.png'
import Ellipse10 from '../../images/HomePage/nemuneKar/Ellipse10.png'
import Ellipse11 from '../../images/HomePage/nemuneKar/Ellipse11.png'
import Ellipse12 from '../../images/HomePage/nemuneKar/Ellipse12.png'
import { useEffect, useState } from "react"
const NemuneKar = () => {
    // const [id,setId] = useState(0);
    // const decreaseId = () => {
    //     if(id > 0){
    //         setId(id-1)
    //         console.log(id)
    //     }else{
    //         setId(id)
    //         console.log(id)
    //     }
        
    // }
    // const increseId = () => {
    //     if(id < 3){
    //         setId(id+1)
    //         console.log(id)
    //     }else{
    //         setId(id)
    //         console.log(id)
    //     }
        
    // }
    return (
        <section className="nemuneKarSection">
            <div className="nemuneKarText">
                <h2>
                    نمونه کارها
                </h2>
                <p>
                    اصلا نگران نباش مهم نیست که کجای
                    ایران باشی ، فراز کارت به سریع ترین شکل
                    ممکن میرسه دستت
                </p>
            </div>
            <div className="farazCarts">
                <div className="farazCartNemune">
                    <img className="farazCart1zimg" src={farazCart} alt="farazCart" />
                </div>
                <div className="gushi">
                    <img className="farazCart2img farazCartimg" src={gushi} alt="farazCart" />
                </div>
                <div className="bache">
                    <img className="farazCart3img farazCartimg" src={bache} alt="farazCart" />
                </div>
            </div>
            {/* <div className="nemuneKarLeftAndRightIcon">
                <div onClick={decreaseId}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
                </div>
                <div onClick={increseId}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
                </div>
            </div> */}
            <img className="back3" src={back3} alt="back3"/>
            <img className="Ellipse10" src={Ellipse10} alt="Ellipse10"/>
            <img className="Ellipse11" src={Ellipse11} alt="Ellipse11"/>
            <img className="Ellipse12" src={Ellipse12} alt="Ellipse12"/>
        </section>
    )
}
export default NemuneKar;