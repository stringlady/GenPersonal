import './A_Full.css'
import { useParams } from 'react-router-dom'

function A_Full() {
    let { url } = useParams();

    const articles = [
        {0: "https://drive.google.com/file/d/1tvSp7-LPfFHxggYr85mN6eynAndhKejV/preview",
         1: "https://drive.google.com/file/d/1Y5byTLm6EmxJfueT0RRy_wWVHVSuJNzZ/preview"}
    ]

    return (
        <div id='full'>
            <iframe src={articles[0][url]}></iframe>
        </div>
    )
}

export default A_Full;