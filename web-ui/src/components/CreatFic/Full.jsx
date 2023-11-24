import './Full.css'
import { useParams } from 'react-router-dom'
import nO from '../../assets/novelOpening.pdf'
import f from '../../assets/favored.pdf'
import d from '../../assets/daredevil.pdf'

function Full() {
    let { url } = useParams();

    const cf = [
        {0: d,
         1: f,
         2: nO}
    ]

    return (
        <div id='full'>
            <object data={cf[0][url]}></object>
        </div>
    )
}

export default Full;