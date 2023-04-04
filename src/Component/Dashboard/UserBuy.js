import User from "../../images/DashBoard/Buy/profile-circle.png"
import dollar from "../../images/DashBoard/Buy/dollar-circle.png"
import Tik from "../../images/DashBoard/Buy/Group 35858.png"
import Rec from "../../images/DashBoard/Buy/Rectangle 317.png"
import back8 from "../../images/DashBoard/Buy/back8.png"
import back9 from "../../images/DashBoard/Buy/back9.png"
import Ellipse21 from "../../images/DashBoard/Buy/Ellipse21.png"
import DashboardAside from "./DashboardَAside";
import "../../Style/Dashboard/UserBuy.css"
const DashboardBuyCart = () => {
    return (
        <div className="UserBuyPage">
            <img className="back8" src={back8} />
            <img className="Ellipse21" src={Ellipse21} />
            <div className="UserBuyPageContent">
                <img className="back9" src={back9} />
                <div className="levelsUserBuyPage">
                    <img src={User} />
                    <img src={dollar} />
                    <img src={Tik} />
                </div>
                <div>
                    <img className="banerUserBuyPage" src={Rec} />
                </div>
                <form className="formUserBuyPage">
                    <label>نام کاربری</label>
                    <input placeholder=" مثال ali: " type="text" />
                    <span>
                        نکته : نام کاربری که اینجا ثبت میشه آدرس صفحه اختصاصی شماست
                        مانند : faracard.ir/ali
                    </span>
                    <button className="buttonUserBuyPage">
                        ادامه
                    </button>
                </form>
            </div>
            <DashboardAside />
        </div>
    )
}
export default DashboardBuyCart;