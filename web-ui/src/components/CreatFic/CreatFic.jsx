import './CreatFic.css'
import book2 from '../../assets/book2.png'

function CreatFic() {
    return (
        <div id='fic'>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/0"><p>Daredevil</p></a>
            </div>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/1"><p>Favored Five</p></a>
            </div>
            <div>
                <img id="book" src={book2}/>
                <a href="/fiction/2"><p>A Mother's Love <br/> (Novel Opening)</p></a>
            </div>
        </div>
    )
}

export default CreatFic;