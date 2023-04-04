import User from "../../images/DashBoard/Buy/profile-circle.png"
import dollar from "../../images/DashBoard/Buy/dollar-circle.png"
import Tik from "../../images/DashBoard/Buy/Group 35858.png"
import Rec from "../../images/DashBoard/Buy/Rectangle 317.png"
import DashboardAside from "./DashboardَAside";
import "../../Style/Dashboard/Userpardakht.css"
import Ellipse21_2 from "../../images/DashBoard/Buy/Ellipse21.png"
import back9_2 from "../../images/DashBoard/Buy/back9.png"
import back8_2 from "../../images/DashBoard/Buy/back8.png"
const UserPardakht = () => {
    return (
        <div className="UserpardakhtPage">
            <img className="back8_2" src={back8_2} />
            <img className="Ellipse21_2" src={Ellipse21_2} />

            <div className="UserpardakhtPageContent">
                <img className="back9_2" src={back9_2} />
                <div className="levelsUserpardakhtPage">
                    <img src={User} />
                    <img src={dollar} />
                    <img src={Tik} />
                </div>
                <div>
                    <img className="banerUserpardakhtPage" src={Rec} />
                </div>
                <form className="formUserpardakhtPage">
                    <div className="UserpardakhtPageText">
                        <span>مبلغ قابل پرداخت</span>
                        <span>تومان 430,000 </span>
                    </div>
                    <div className="discountCode">

                        <input type="text" placeholder="کد تخفیف خود را وارد کنید" />
                    </div>
                    <button className="confirmAndPay">تایید و پرداخت</button>
                </form>
            </div>
            <DashboardAside />
        </div>
    )
}
export default UserPardakht;