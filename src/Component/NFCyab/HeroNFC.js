import "../../Style/NFCyab/HeroNFC.css"
import logoFaraz from "../../images/NFCyab/logoFaraz.png"
const HeroNFC = () => {
    return (
        <header>
            <div className="ContentNFC">
                <img className="logoFaraz" src={logoFaraz} alt="logoFaraz" />
                <h1 className="titleNTC">
                    NFC یاب
                </h1>
                <p className="DescriptionNFC1">
                    NFC موبایل های دارای فناوری
                </p>
                <p className="DescriptionNFC2">
                    Mobile Phones That Support <span className="NFCblue"> NFC </span>  Technology
                </p>
                <p className="DescriptionNFC3">
                    معمولا اکثر تلفن های همراهی که در حال حاضر در بازار موجود هستند از فناوری <span className="NFCblue"> NFC </span> پشتیبانی میکنن اما برای اطمینان ما یه لیستی رو ازشون براتون تهیه کردیم که توی این صفحه در اختیارتون قرار گرفته
                </p>
                <input className="inputNFC" type="text" placeholder="برای جست و جوی مدل مورد نظرتونو وارد کنید" />
            </div>
        </header>
    )
}
export default HeroNFC;