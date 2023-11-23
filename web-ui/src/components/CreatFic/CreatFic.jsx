import './CreatFic.css'
import book2 from '../../assets/book2.png'

function CreatFic() {
    return (
        <div id='fic'>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/0" target='_blank'><p>Daredevil</p></a>
            </div>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/1" target='_blank'><p>Favored Five</p></a>
            </div>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/2" target='_blank'><p>A Mother's Love <br/> (Novel Opening)</p></a>
            </div>
        </div>
    )
}

export default CreatFic;