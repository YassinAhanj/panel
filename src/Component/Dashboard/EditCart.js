import mainBanner from "../../images/DashBoard/Buy/Rectangle 317.png"
import secoundBanner from "../../images/DashBoard/Buy/Rectangle 315 (1).png"
import thirdBanner from "../../images/DashBoard/Buy/Rectangle 315.png"
import FourthBanner from "../../images/DashBoard/Buy/Rectangle 316 (1).png"
import upload from "../../images/DashBoard/Buy/upload-01 (1).png"
import DashboardAside from "./DashboardَAside";

const EditCart = () => {
    return (
        <div>
            <div>
                <DashboardAside />

                <h2>
                    مشخصات
                </h2>
                <form>
                    <label>
                        نام
                    </label>
                    <input type="text" placeholder="مثال: مرتضی رضوی" />
                    <label>
                        توضیحات
                    </label>
                    <input type="text" placeholder="مثال:  عکاس و گرافیست" />
                    <div>
                        <img src={mainBanner} alt="banner FarazCart" />
                        <div>
                            <img src={mainBanner} alt="FarazCart" />
                            <img src={secoundBanner} alt="FarazCart" />
                            <img src={thirdBanner} alt="FarazCart" />
                            <img src={FourthBanner} alt="FarazCart" />
                        </div>
                    </div>
                    <div>
                        <label>آپلود<img src={upload} /> </label>
                        <input type="file" />
                        <span>از این بخش میتونی طرح مورد علاقتو برامون آپلود کنی تا روی کارتت چاپ شه</span>
                    </div>


                    <button type="submit">تایید و ارسال فایل</button>
                </form>
            </div>
        </div>
    )
}
export default EditCart;