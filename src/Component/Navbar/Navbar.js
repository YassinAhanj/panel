import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Login from '../Sabtenam/Login';
import "../../Style/Navbar.css";
import { useState } from 'react';
import NfcYab from '../NFCyab/NfcYab';
import AloFarazCart from '../Alo/AloFarazCart';
import farazNavLogo from '../../images/Navbar/farazNavLogo.png';
import menuIcon from '../../images/Navbar/menuIcon.png';
import back1 from '../../images/Navbar/back1.png';
import Ellipse1 from '../../images/Navbar/Ellipse1.png';
import Ellipse2 from '../../images/Navbar/Ellipse2.png';
import Register from '../Sabtenam/Register';
import { useEffect } from 'react';
import Payam from '../Sabtenam/Auth/Payam';
import Dashboard from '../Dashboard/Dashboard';
import DashboardUserCart from '../Dashboard/UserCart';
import DashboardBuyCart from '../Dashboard/UserBuy';
import DashboardUserInfo from '../Dashboard/UserInfo';
import UserPardakht from '../Dashboard/Userpardakht';
import EditCart from '../Dashboard/EditCart.js';
const Navabar = () => {
    const [login, setLogin] = useState(true);
    const [navStatus, setNavStatus] = useState(true);
    useEffect(() => {
        if (window.location.href === "http://localhost:3000/Login") {
            setLogin(false)
        }
        if (window.location.href === "http://localhost:3000/Register") {
            setLogin(false)
        }

        // Add event listener for resize event
        window.addEventListener('resize', handleResize);

        return () => {
            // Remove resize event listener when component unmounts
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setNavStatus(false);
        } else {
            setNavStatus(true);
        }
    }
    const changingDisplatNav = () => {
        if (navStatus) {
            setNavStatus(false)
        } else {
            setNavStatus(true)
        }
    }
    const changeLogin = () => {
        setLogin(false);
    }
    return (
        <main>
            {login ? (
                <nav className='navbar'>
                    <img className='Ellipse1' src={Ellipse1} alt="Ellipse1" />
                    <img className='Ellipse2' src={Ellipse2} alt="Ellipse2" />
                    <div className='div_vurud_button'>
                        <Link className='button_vurud' to="/Login" onClick={changeLogin}>ورود</Link>
                    </div>
                    <img className='farazNavLogo' src={farazNavLogo} alt="farazNavLogo" />
                    <img className='menuIcon' src={menuIcon} onClick={changingDisplatNav} alt="menuIcon" />
                    <img className='back1' src={back1} alt="back1" />

                    <div className='links' style={{ display: navStatus ? 'flex' : 'none' }}>
                        <div className='link'>
                            <Link to="/" >صفحه نخست</Link>
                        </div>
                        <div className='link'>
                            <Link to="/NfcYab" >NFC یاب</Link>
                        </div>
                        <div className='link'>
                            <Link to="/AloFarazCart" >الو فراز کارت؟</Link>
                        </div>
                        <div className='link'>
                            <Link to="/Dashboard">  داشبورد </Link>
                        </div>
                    </div>
                </nav>
            ) : null}
            <Routes className="routes">
                <Route exact path="/" element={<HomePage />} />
                <Route path="/NfcYab" element={<NfcYab />} />
                <Route path="/AloFarazCart" element={<AloFarazCart />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Payam" element={<Payam />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/buyCart" element={<DashboardBuyCart />} />
                <Route path="/MyCarts" element={<DashboardUserCart />} />
                <Route path="/AllInfo" element={<DashboardUserInfo />} />
                <Route path="/Userpardakht" element={<UserPardakht />} />
                <Route path="/EditCart" element={<EditCart />} />
            </Routes>
        </main>
    )
}
export default Navabar;
