import DashboardAside from "./DashboardَAside";
import "../../Style/Dashboard/UserCart.css"
import banner from "../../images/DashBoard/Buy/Rectangle 317.png";
import back10 from "../../images/DashBoard/Buy/back10.png";
const DashboardUserCart = () => {
    return (
        <div className="userCartMain">
            <div className="UserCArtContent">
                <img src={banner} alt="Banner" />
                <div className="UserCArtText">
                    <p>
                        ویرایش
                    </p>
                    <h2>
                        FARAZ CARD
                    </h2>
                </div>

            </div>
            <img className="back10" src={back10} alt="Banner" />
            <DashboardAside />
        </div>
    )
}
export default DashboardUserCart;