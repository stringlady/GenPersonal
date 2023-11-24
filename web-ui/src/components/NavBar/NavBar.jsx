import './NavBar.css';

function Navbar() {
    return (
        <div id="color">
            <div className="nav">
                <a href='#label' className='navinfo'><p>About me</p></a>
                <a href='#label1' className='navinfo'><p>Editing Work</p></a>
                <a href='#label2' className='navinfo'><p>Creative Fiction</p></a>
                <a href="#label3" className='navinfo'><p>Articles</p></a>
                <a href="#label4" className='navinfo'><p>Resume</p></a>
            </div>
        </div>
    )
}

export default Navbar;