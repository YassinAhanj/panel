import "../../../Style/Sabtenam/Login.css";
import Ellipse16 from '../../../images/Sabtenam/Login/Ellipse16.png';
import Ellipse17 from '../../../images/Sabtenam/Login/Ellipse17.png';
import Ellipse18 from '../../../images/Sabtenam/Login/Ellipse18.png';
import back5 from '../../../images/Sabtenam/Login/back5.png';
import back6 from '../../../images/Sabtenam/Login/back6.png';
import logoFarazLog from '../../../images/Sabtenam/Login/logoFaraz.png';
import farazCartLogin from '../../../images/Sabtenam/Login/farazCart.png';
function Payam() {
    return (
        <main>
            <section className="LoginDiv">
                <p className="OwnershipSite"> تمام حقوق برای فراز محفوظ است </p>
                <img className='logoFarazLog' src={logoFarazLog} alt="logoFarazLog" />
                <img className='Ellipse16' src={Ellipse16} alt="Ellipse16" />
                <img className='Ellipse17' src={Ellipse17} alt="Ellipse17" />
                <img className='Ellipse18' src={Ellipse18} alt="Ellipse18" />
                <img className='back5' src={back5} alt="back5" />
                <img className='back6' src={back6} alt="back6" />
                <div className="backWhiteRispan">
                    <img className='farazCartLogin' src={farazCartLogin} alt="farazCartLogin" />
                    <div className="LoginBox">
                        <img className='Ellipse18_2' src={Ellipse18} alt="Ellipse18_2" />
                        <h3>   به <span>  فرازکارت</span> خوش آمدید </h3>
                        <form>
                            <div className="userPass">
                                <label> کد تایید ارسال شده را وارد نمایید. </label>
                                <div className="divInputCode">

                                    <input className="codeNumber" type="number" name="number" minLength="1" maxLength="5" required />
                                    <div className="inputDiv inputDiv1"></div>
                                    <div className="inputDiv inputDiv2"></div>
                                    <div className="inputDiv inputDiv3"></div>
                                    <div className="inputDiv inputDiv4"></div>
                                    <div className="inputDiv inputDiv5"></div>
                                </div>
                            </div>
                            <div>
                                <button className="RegisterLoginClick codeNumberSend" type="submit" name="submit"> ثبت کد تایید  </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section >
        </main>
    );
}
export default Payam;








