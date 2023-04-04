import { Link } from 'react-router-dom'
import zarinpal from "../../images/HomePage/Footer/zarin.png"
import location from "../../images/HomePage/Footer/Icon.png"
import ig from "../../images/HomePage/Footer/Instagram.png"
import Line from "../../images/HomePage/Footer/Line.png"
import what from "../../images/HomePage/Footer/whatsapp.png"
import Vector from "../../images/HomePage/Footer/Vector.png"
import aghayePardakht from "../../images/HomePage/Footer/aghayepardakht-1 1.png"
import faraz from "../../images/HomePage/Footer/IMG_20230305_165033_781 1.png"
import "../../Style/HomePage/Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className='Allfooter'>
                <div className='footerOptions'>
                    <div className='License dinInFooter'>
                        <p> مجوز و نماد ها <img className='Line' src={Line} alt="Line" /> </p>
                        <img src={aghayePardakht} alt="aghayePardakht" />
                        <img src={zarinpal} alt="zarinPal" />
                    </div>
                    <div className='Communication dinInFooter'>
                        <p> راه های ارتباطی <img className='Line' src={Line} alt="Line" /> </p>
                        <div>
                            <a href="https://openai.com/blog/chatgpt" target="_blank" rel="noopener noreferrer">farazcart.ir</a>
                            <img className='instagram' src={ig} alt="instagram" />
                        </div>
                        <div>
                            <a href="https://openai.com/blog/chatgpt" target="_blank" rel="noopener noreferrer">09999953235</a>
                            <img className='whatsapp' src={what} alt="whatsapp" />
                        </div>
                        <div>
                            <Link to="https://openai.com/blog/chatgpt" target="_blank" rel="noopener noreferrer">گیلان ، رشت ، میدان صابرین</Link>
                            <img className='location' src={location} alt="location" />
                            <img className='Vector' src={Vector} alt="Vector" />
                        </div>
                    </div>
                    <div className='QuickAccess dinInFooter'>
                        <p> دسترسی سریع <img className='Line' src={Line} alt="Line" /> </p>
                        <Link to="/Intro">معرفی</Link>
                        <Link to="/NfcYab">NFC کارت</Link>
                        <Link to="/AloFaraz">الو فراز</Link>
                    </div>
                </div>
                <div className='Capschen'>
                    <div className='CapschenTitle'>
                        <p>  <span className='farazcart'> فراز کارت </span> ، همراه هوشمند تو!</p>
                        <img className='farazCartImg' src={faraz} alt="farazCart" />
                    </div>
                    <div className='CapschenText'>
                        فراز  کارت و تیم فراز در تابستان سال 1401 با هدف توسعه روش های نوین ارتباطات شروع به فعالیت کرد و در خدمت شماست.
                    </div>
                    <div className='location2Div' >
                    <Link className='locationText2' to="https://openai.com/blog/chatgpt" target="_blank" rel="noopener noreferrer">گیلان ، رشت ، میدان صابرین</Link>
                            <img className='location2' src={location} alt="location" />
                    </div>
                </div>
            </div>
        </footer >
    )
}
export default Footer;