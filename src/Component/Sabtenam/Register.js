import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/Sabtenam/Login.css";
import Ellipse16 from '../../images/Sabtenam/Login/Ellipse16.png';
import Ellipse17 from '../../images/Sabtenam/Login/Ellipse17.png';
import Ellipse18 from '../../images/Sabtenam/Login/Ellipse18.png';
import back5 from '../../images/Sabtenam/Login/back5.png';
import back6 from '../../images/Sabtenam/Login/back6.png';
import logoFarazLog from '../../images/Sabtenam/Login/logoFaraz.png';
import farazCartLogin from '../../images/Sabtenam/Login/farazCart.png';
import { useState } from "react";
import axios from "axios";


const Register = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "FarazCart | Register"
    })
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:80/new faraz/api/user/save', input)
        navigate("/Payam")
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
                        <h3>   به <span>  فرازکارت</span> خوش آمدید </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="userPass">
                                <label htmlFor="number">
                                    شماره همراه خود را برای ثبت نام وارد کنید.
                                </label>
                                <input type="number" id="number" onChange={handleChange} name="number" minLength="11" maxLength="11" required />
                                <label htmlFor="pass">
                                    رمز اکانت خودرا وارد کنید.
                                </label>
                                <input id="pass" type="password" onChange={handleChange} name="password" minLength="8" required />
                            </div>
                            <div>
                                <button className="RegisterLoginClick LoginClick" type="submit" name="submit">
                                    ورود
                                </button>
                            </div>
                        </form>
                        <div>
                            <Link className="RegisterLoginClick RegisterClick" to="/Login" >ثبت نام کردم!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Register;