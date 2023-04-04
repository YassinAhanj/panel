import "../../Style/HomePage/Ersal.css";
import Ersalpng from '../../images/HomePage/Ersal/Ersal.png';
import Ellipse8 from '../../images/HomePage/Ersal/Ellipse8.png';
import Ellipse9 from '../../images/HomePage/Ersal/Ellipse9.png';
import Ellipse9_2 from '../../images/HomePage/Ersal/Ellipse9_2.png';
import back2 from '../../images/HomePage/Ersal/back2.png';
import back2_2 from '../../images/HomePage/Ersal/back2-2.png';




const Ersal = () => {
    return (
        <section className="ersal_section">
            <div className="ersal_Text">
                <h2 className="ErsalTitle">
                    ارسال رایگان به سراسر ایران زیبا
                </h2>
                <p className="paragraphErsal">
                    اصلا نگران نباش مهم نیست که کجای
                    ایران باشی ، فراز کارت به سریع ترین شکل
                    ممکن میرسه دستت
                </p>
            </div>
            <img className="Ersalpng" src={Ersalpng} alt="Ersalpng"/>
            <img className="Ellipse8" src={Ellipse8} alt="Ellipse8"/>
            <img className="Ellipse9" src={Ellipse9} alt="Ellipse9"/>
            <img className="Ellipse9_2" src={Ellipse9_2} alt="Ellipse9_2"/>
            <img className="back2" src={back2} alt="back2"/>
            <img className="back2_2" src={back2_2} alt="back2_2"/>
            
        </section>
    )
}
export default Ersal;
