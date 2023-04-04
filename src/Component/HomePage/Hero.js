import { Link } from 'react-router-dom';
import "../.././Style/HomePage/Hero.css";
import SmartFarazBack1 from '../../images/Hero/SmartFarazBack1.png';
import SmartFarazBack2 from '../../images/Hero/SmartFarazBack2.png';
import SmartFarazBack1_1 from '../../images/Hero/SmartFarazBack1_1.png';
import SmartFarazBack1_2 from '../../images/Hero/SmartFarazBack1_2.png';
import Ellipse3 from '../../images/Hero/Ellipse3.png';
import Ellipse4 from '../../images/Hero/Ellipse4.png';
import Ellipse5 from '../../images/Hero/Ellipse5.png';
import backHeroMob from '../../images/Hero/backHeroMob.png';
import SmartFaraz from '../../images/Hero/SmartFaraz.png';
import SmartFaraz2 from '../../images/Hero/SmartFaraz2.png';
const Hero = () => {
    return (
        <section className='hero_main_section' >

            <img className='SmartFarazBack1' src={SmartFarazBack1} alt="SmartFarazBack1"/>
            <img className='SmartFarazBack2' src={SmartFarazBack2} alt="SmartFarazBack2"/>
            <img className='SmartFarazBack1_1' src={SmartFarazBack1_1} alt="SmartFarazBack1_1"/>
            <img className='SmartFarazBack1_2' src={SmartFarazBack1_2} alt="SmartFarazBack1_2"/>
            <img className='Ellipse3' src={Ellipse3} alt="Ellipse3"/>
            <img className='Ellipse4' src={Ellipse4} alt="Ellipse4"/>
            <img className='Ellipse5' src={Ellipse5} alt="Ellipse5"/>
            <img className='SmartFaraz' src={SmartFaraz} alt="SmartFaraz"/>
            <img className='SmartFaraz2' src={SmartFaraz2} alt="SmartFaraz2"/>
            <img className='backHeroMob' src={backHeroMob} alt="backHeroMob"/>
            
            <div className='hero_section'>
                <h1>  <span className='farazcart'> فراز کارت </span> ، همراه هوشمند تو!</h1>
                <p>
                    فراز کارت ، یه کارت ویزیت هوشمند و دوست داشتنیه که با فناوری NFC کار میکنه و شمارو در نهایت تکنولوژی و خلاقیت به مخاطب ها واطرافیانتون معرفی میکنه ، اگه میخوای بیشتر باهاش آشنا شی پس . . .
                </p>
                <div className='links_Of_hero'>
                    <Link to="/Login" >ثبت نام</Link>
                    <Link to="/Intro" >معرفی</Link>
                </div>
            </div>
        
        </section>
    )
}
export default Hero;