import './A_Full.css'
import { useParams } from 'react-router-dom'
import arc1 from '../../assets/arc1.pdf'
import arc2 from '../../assets/arc2.pdf'
import arc3 from '../../assets/arc3.pdf'

function A_Full() {
    let { url } = useParams();

    const articles = [
        {0: arc1,
         1: arc2,
         2: arc3}
    ]

    return (
        <div id='full'>
            <iframe src={articles[0][url]}></iframe>
        </div>
    )
}

export default A_Full;