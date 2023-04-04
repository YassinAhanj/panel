import scanning from "../.././images/HomePage/why/Scanning 5.png";
import edit from "../.././images/HomePage/why/edit-01.png";
import message from "../.././images/HomePage/why/message-chat-01.png";
import monitor from "../.././images/HomePage/why/monitor-mobbile.png";
import "../../Style/HomePage/whyFaraz.css";
import Ellipse6 from '../../images/HomePage/why/Ellipse6.png';
import Ellipse7 from '../../images/HomePage/why/Ellipse7.png';
import { useEffect, useState } from 'react';
const Whyfaraz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [overWidth, setOverWidth] = useState(true);
    const [sliderContent, setSliderContent] = useState([
        {
            id: 1,
            img: edit,
            header: "ویرایش آسان در هر لحطه",
            paragraph:
                "تو هر لحظه و مکانی که بخوای فقط با اتصال به اینترنت میتونی اطلاعات روی کارتتو ویرایش کنی",
        },
        {
            id: 2,
            img: scanning,
            header: "هوشمند تر از هوشمند!",
            paragraph:
                "با ترکیب همگام ترین تکنولوژی روز دنیا NFC و QRCode در خدمات شما هستیم",
        },
        {
            id: 3,
            img: monitor,
            header: "سایت اختصاصی خودت",
            paragraph:
                "با فرازکارت ، یه سایت اختصاصی برای معرفی خودت داری که تمام نیاز هاتو برطرف میکنه",
        },
        {
            id: 4,
            img: message,
            header: "پشتیبانی 24 ساعته",
            paragraph: "شبانه روزی تو تمامی پلتفرم ها پاسخگویی شما هستیم",
        },
    ]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOverWidth(false)
                setTimeout(() => {
                    if (currentIndex !== 3) {
                        setCurrentIndex(currentIndex + 1);

                    } else {
                        setCurrentIndex(0);
                    }
                }, 2000);
            } else {
                setOverWidth(true)
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [currentIndex]);

    return (
        <section className="why-section">
            <img className="Ellipse6" src={Ellipse6} alt="Ellipse6" />
            <img className="Ellipse7" src={Ellipse7} alt="Ellipse7" />

            <div className="whyH2">
                <h2>اصلا چرا فراز کارت؟؟</h2>
            </div>

            {overWidth ? (
                <div className="circles_why">
                    {sliderContent.map((item, index) => (
                        <div index={currentIndex} className="circle_Why">
                            <img
                                src={item.img}
                                alt="edit"
                                className="img_why"
                            />
                            <h4 className="header_why">
                                {item.header}
                            </h4>
                            <p className="paragraph_why">
                                {item.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="circles_why" style={{ transform: `translateX(-${currentIndex * (100 / sliderContent.length)}%)` }}>
                    {sliderContent.map((item, index) => (
                        <div key={item.id} className="circle_Why">
                            <img src={item.img} alt="edit" className="img_why" />
                            <h4 className="header_why">{item.header}</h4>
                            <p className="paragraph_why">{item.paragraph}</p>
                        </div>
                    ))}
                </div>

            )}
        </section>
    );

}
export default Whyfaraz;