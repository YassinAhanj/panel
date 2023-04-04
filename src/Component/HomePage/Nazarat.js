import personOne from "../../images/HomePage/nazarat/Ellipse 38 (2).png"
import personTwo from "../../images/HomePage/nazarat/Ellipse 39 (1).png"
import personThree from "../../images/HomePage/nazarat/Ellipse 40.png"
import Ellipse13 from "../../images/HomePage/nazarat/Ellipse13.png"
import Ellipse13_2 from "../../images/HomePage/nazarat/Ellipse13_2.png"
import back4 from "../../images/HomePage/nazarat/back4.png"
import back4_2 from "../../images/HomePage/nazarat/back4_2.png"
import "../../Style/HomePage/Nazarat.css"
const Nazarat = () => {
    return (
        <section className="nazarat_section">
            <img className="back4" src={back4} alt="back4" />
            <img className="back4_2" src={back4_2} alt="back4_2" />
            <img className="Ellipse13" src={Ellipse13} alt="Ellipse13" />
            <img className="Ellipse13_2" src={Ellipse13_2} alt="Ellipse13_2" />
            <div className="titleNazarat">
                <h2>
                    نظرات کاربران فراز کارت
                </h2>
            </div>
            <div className="Comments">

                <div className="Comment">

                    <span>
                        فرهاد محمودی
                        <img className="profileComment" src={personTwo} alt="farazcart" />
                    </span>
                    <p>
                        از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره
                    </p>
                </div>
                <div className="Comment">
                    <span>
                        فرهاد محمودی
                        <img className="profileComment" src={personOne} alt="farazcart" />
                    </span>
                    <p>
                        از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره
                    </p>
                </div>

                <div className="Comment">
                    <span>
                        فرهاد محمودی
                        <img className="profileComment" src={personThree} alt="farazcart" />
                    </span>
                    <p>
                        از عالی بودن محصول که بگذریم پشتیبانی و همکاری عالی عوامل جای تعریف داره
                    </p>
                </div>

            </div>

        </section>
    )
}
export default Nazarat;