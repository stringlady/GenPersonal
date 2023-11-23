import './Hero.css';
import me from '../../assets/gen_img.png'

function Hero() {
    return (
        <div id="hero">
            <div>
                <h1>Genesis Bussey</h1>
                <h2>Senior | Bates College | <br/> English Major | Africana Minor</h2>
            </div>
            <div>
                <img className='me' src={me}/>
            </div>
        </div>
    )
}

export default Hero;