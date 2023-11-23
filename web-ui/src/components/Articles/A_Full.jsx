import './A_Full.css'
import { useParams } from 'react-router-dom'
import { articles } from '../../constant'

function A_Full() {
    let { url } = useParams();

    return (
        <div id='full'>
            <iframe src={articles[0][url]}></iframe>
        </div>
    )
}

export default A_Full;