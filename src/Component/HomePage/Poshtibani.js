import phone from '../../images/HomePage/Poshtibani/phone.png'
import "../../Style/HomePage/Poshtibani.css"
const Poshtibani = () => {
    return (
        <section className="poshtibani_section" >
            <div className='poshtibaniGradient'>
                <div className='telNum'>
                    <img alt='phone' src={phone} />
                    <a href="tel:+989999953235" target="_blank" rel="noopener noreferrer">+989999953235</a>
                </div>
                <div>
                    <p>
                        مشاوره رایگان و پشتیبانی شبانه روزی
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Poshtibani;