import './Home.css'
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Editing from '../Editing/Editing';

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div id="label">
                <h3>About Me</h3>
            </div>
            
            <AboutMe/>
            <div id="label1">
                <h3>Editing Work</h3>
            </div>

            <Editing/>
        </div>
    )
}
export default Home;