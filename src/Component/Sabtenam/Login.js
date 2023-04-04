import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Style/Sabtenam/Login.css";
import Ellipse16 from '../../images/Sabtenam/Login/Ellipse16.png';
import Ellipse17 from '../../images/Sabtenam/Login/Ellipse17.png';
import Ellipse18 from '../../images/Sabtenam/Login/Ellipse18.png';
import back5 from '../../images/Sabtenam/Login/back5.png';
import back6 from '../../images/Sabtenam/Login/back6.png';
import logoFarazLog from '../../images/Sabtenam/Login/logoFaraz.png';
import farazCartLogin from '../../images/Sabtenam/Login/farazCart.png';


const Login = () => {
    useEffect(() => {
        document.title = "FarazCart | Login"
    })
    const handleSubmit = (e) => {
        console.log("sth")
    }
    return (
        <main>
            <div className="LoginDiv">
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
                        <h3>  ورود به <span>  فرازکارت</span></h3>
                        <form onSubmit={handleSubmit}>
                            <div className="userPass">
                                <label htmlFor="number">
                                    شماره همراه خود را برای ورود وارد کنید.
                                </label>
                                <input type="number" name="number" id="number" minLength="11" maxLength="11" required />
                                <label htmlFor="pass">
                                    رمز اکانت خودرا وارد کنید.
                                </label>
                                <input type="password" id="pass" name="password" minlength="8" required />
                            </div>
                            <div>
                                <button className="RegisterLoginClick LoginClick" type="submit" name="submit" >ورود</button>
                            </div>
                        </form>

                        <div>
                            <Link className="RegisterLoginClick RegisterClick" to="/Register" >ثبت نام نکردم!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Login;