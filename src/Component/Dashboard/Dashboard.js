import DashboardAside from "./DashboardَAside";
import "../../Style/Dashboard/Dashboard.css"
import User from "../../images/DashBoard/user-edit.png"
import back7 from "../../images/DashBoard/Dashboard/back7.png"

const Dashboard = () => {
    return (
        <div className="DashBoardPage">
            <img className="back7" src={back7} />
            <div className="EditProfile">
                <div className="titleEditProfilePage">
                    <h1 className="titleEditProfilePageText"> ویرایش پروفایل </h1>
                    <img src={User} />

                </div>
                <form className="gridInForm">

                    <div className="DivItemInputs">
                        <label className="titleInputDashBoardEditProfile"> نام <span className="redStar">*</span></label>
                        <input type="text" placeholder="دنیا" />
                    </div>

                    <div className="DivItemInputs">
                        <label className="titleInputDashBoardEditProfile"> نام خانوادگی  <span className="redStar">*</span></label>
                        <input type="text" placeholder="ماهانی" />
                    </div>


                    <div className="DivItemInputs">
                        <label className="titleInputDashBoardEditProfile"> آدرس <span className="redStar">*</span></label>
                        <textarea className="ParagraphInput" />
                    </div>

                    <div className="DivItemInputs">
                        <label className="titleInputDashBoardEditProfile"> تلفن همراه <span className="redStar">*</span></label>
                        <input placeholder="09123456789" />
                    </div>



                    <button className="submitDashBoardPage" type="submit">تایید</button>
                </form>
                <div className="CompleteProfile">
                    <div className="Percent">
                        <span className="PercentNum"> 25% </span>
                    </div>
                    <p>
                    تکمیل پروفایل

                    </p>
                </div>
            </div>

            <DashboardAside />
        </div>
    )
}
export default Dashboard;