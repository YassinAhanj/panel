import farazCartPhoto from "../.././images/DashBoard/faraz.png";
import bag from "../.././images/DashBoard/bag-02.png";
import chart from "../.././images/DashBoard/chart-square.png";
import user from "../.././images/DashBoard/user-edit.png";
import wallet from "../.././images/DashBoard/wallet.png";
import logout from "../.././images/DashBoard/logout.png";

import Ellipse20 from "../.././images/DashBoard/DashboardAside/Ellipse20.png";

import { Link } from 'react-router-dom';
import "../../Style/Dashboard/DashboardAside.css"
const DashboardAside = () => {
    return (
        <div className="Dashboard">
            {/* <img className="Ellipse19" src={Ellipse19} /> */}
            <aside className='DashboardNavbar'>
                <img className="Ellipse20" src={Ellipse20} />
                <img className="farazCartPhotoDashboard" src={farazCartPhoto} />
                <div className='linksDashboard'>
                    <div className='linkDashboard linkDashboardEdit'>
                        <Link to="/Dashboard" alt="edit">ویرایش پروفایل</Link>
                        <img src={user} />
                    </div>
                    <div className='linkDashboard'>
                        <Link to="/buyCart" alt="buy">خرید کارت</Link>
                        <img src={bag} />
                    </div>
                    <div className='linkDashboard'>
                        <Link to="/MyCarts" alt="wallet">کارت های من</Link>
                        <img src={wallet} />
                    </div>
                    <div className='linkDashboard'>
                        <Link to="/AllInfo" >اطلاعات کلی</Link>
                        <img src={chart} alt="info" />
                    </div>
                </div>
                <div className="linkDashboard logoutDiv">
                    <Link to="/AllInfo" >خروج از حساب کاربری</Link>
                    <img src={logout} alt="logout" />
                </div>
            </aside>
        </div>
    )
}
export default DashboardAside;