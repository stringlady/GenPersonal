import './Editing.css'
import lok from '../../assets/lokelma.png'
import merck from '../../assets/merck.png'
import saph from '../../assets/saphnelo.png'
import yup from '../../assets/yupelri.jpg'
import cal from '../../assets/calquence.png'
import brez from '../../assets/breztri.png'

function Editing() {
    return (
        <div id='projects'>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={lok}/>
                <a href='https://www.lokelma-hcp.com/explore-lokelma/efficacy.html' target='_blank' rel='noreferrer'><h1>LOKELMA</h1></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={merck}/>
                <a href='https://www.whyvaccines.com/real-moms-real-vaccination-stories/' target='_blank' rel='noreferrer'><h1>MERCK</h1></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={saph}/>
                <a href='https://www.saphnelo.com/patient/support/support-resources.html' target='_blank' rel='noreferrer'><h1>SAPHNELO</h1></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={yup}/>
                <a href='https://www.yupelri.com/yupelri-for-copd/why-yupelri#is-yupelri-right-for-me' target='_blank' rel='noreferrer'><h1>YUPELRI</h1></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={cal}/>
                <a href='https://www.calquence.com/safety-isi.html' target='_blank' rel='noreferrer'><h1>CALQUENCE</h1></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={brez}/>
                <a href='https://www.breztri.com/about/safety-information' target='_blank' rel='noreferrer'><h1>BREZTRI</h1></a>
            </div>
            </div>
        </div>
    )
}

export default Editing;