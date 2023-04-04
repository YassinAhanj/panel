import DashboardAside from "./DashboardَAside";
import circle from "../../images/DashBoard/info/chart.png"
import Card from "../../images/DashBoard/info/card-pos.png"
import devMes from "../../images/DashBoard/info/device-message.png"
import edit from "../../images/DashBoard/info/receipt-edit.png"
import closeCircle from "../../images/DashBoard/info/close-circle.png"
import Vector from "../../images/DashBoard/info/Vector.png"
import back11 from "../../images/DashBoard/info/back11.png"
import "../../Style/Dashboard/UserInfo.css"
const DashboardUserInfo = () => {
    return (
        <div className="UserInfoPage">
            <img className="back11" src={back11} alt="back11" />
            <div className="UserInfoMain">
                {/* <div> */}

                <div className="UserInfoContent">
                    <img className="UserInfoImg" src={Card} alt="FarazCart" />
                    <span className="UserInfoContentTitle">تعداد کارت های من</span>
                    <span className="blueNUM"> روز <span> 1 </span> </span>
                    <ul className="ULinfo">
                        <li><img className="Vectorinfo" src={Vector} alt="Vector" /> FARAZ CARD </li>
                        <li><img className="Vectorinfo" src={Vector} alt="Vector" /> فعال </li>
                    </ul>
                </div>

                <div className="UserInfoContent">
                    <img className="UserInfoImg" src={circle} alt="FarazCart" />
                    <span className="UserInfoContentTitle">تکمیل پروفایل من</span>
                    <span className="blueNUM">68%</span>
                    <ul className="ULinfo">
                        <li> <img className="closeCircle" src={closeCircle} alt="closeCircle" /> نام  </li>
                        <li> <img className="closeCircle" src={closeCircle} alt="closeCircle" /> شماره همراه  </li>
                        <li> <img className="closeCircle" src={closeCircle} alt="closeCircle" /> آدرس  </li>
                    </ul>
                </div>

                <div className="UserInfoContent gridColumnStart">
                    <img className="UserInfoImg" src={devMes} alt="FarazCart" />
                    <span className="UserInfoContentTitle">پشتیبانی 24 ساعته</span>
                    <span className="blueNUMPhone">0999-995-3235</span>
                </div>

                {/* </div> */}
                <div className="UserInfoContent gridRowStart">


                    <img className="UserInfoImg" src={edit} alt="FarazCart" />
                    <span className="UserInfoContentTitle4">سابقه عضویت شما در سایت</span>
                    <span className="blueNUM"> روز <span> 25 </span> </span>

                    <div className="blueLine"></div>
                    <div className="miniBoxInfo">
                        <span className="titleBox4">
                            تاریخ عضویت
                        </span>
                        <div className="registeryDate">

                            <span className="Date">1401/05/22</span>
                            <span className="dayAndTime">سه شنبه 22:45</span>

                        </div>
                    </div>

                    <div className="miniBoxInfo">
                        <span className="titleBox4">
                            آخرین بازدید از سایت
                        </span>
                        <div className="lastVisit">

                            <span className="Date">1401/05/25</span>
                            <span className="dayAndTime">22:45 پنج شنبه</span>

                        </div>
                    </div>

                </div>


            </div>
            <DashboardAside />
        </div>
    )
}
export default DashboardUserInfo;