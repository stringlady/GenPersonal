import './Hero.css';
import me from '../../assets/gen.png'

function Hero() {
    return (
        <div id="hero">
            <div>
                <h1>Genesis Bussey</h1>
                <h2>Bates College | <br/> English Major | Africana Minor</h2>
            </div>
            <div>
                <img className='me' src={me}/>
            </div>
        </div>
    )
}

export default Hero;