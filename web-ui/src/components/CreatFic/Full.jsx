import './Full.css'
import { useParams } from 'react-router-dom'
import { cf } from '../../constants/constant'

function Full() {
    let { url } = useParams();

    return (
        <div id='full'>
            <iframe src={cf[0][url]}></iframe>
        </div>
    )
}

export default Full;