import './NavBar.css';

function Navbar() {
    return (
        <div id="color">
            <div className="nav">
                <a href='#aboutme' className='navinfo'><p>About me</p></a>
                <a href='#projects' className='navinfo'><p>Editing Work</p></a>
                <a href='#fic' className='navinfo'><p>Creative Fiction</p></a>
                <a href="#arc" className='navinfo'><p>Articles</p></a>
                <a href="" className='navinfo'><p>Resume</p></a>
            </div>
        </div>
    )
}

export default Navbar;