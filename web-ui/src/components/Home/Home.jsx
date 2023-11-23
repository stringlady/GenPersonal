import './Home.css'
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Editing from '../Editing/Editing';
import CreatFic from '../CreatFic/CreatFic';
import Articles from '../Articles/Articles';
import bates from '../../assets/bates2.png'

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
            <div id="label2">
                <h3>Creative Fiction</h3>
            </div>
            <CreatFic/>
            <div id="label3">
                <h3>Articles</h3>
                <img id="bates2" src={bates}/>
            </div>
            <Articles/>
        </div>
    )
}
export default Home;