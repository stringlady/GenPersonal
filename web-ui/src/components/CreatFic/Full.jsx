import './Full.css'
import { useParams } from 'react-router-dom'

function Full() {
    let { url } = useParams();

    const cf = [
        {0: "https://drive.google.com/file/d/1HgVNiZwpFe-HIaweSNuv4YRhxX5P7kHv/preview",
         1: "https://drive.google.com/file/d/1_ZV-JhasBFvPd6NZMox05K9uf74d1X-4/preview",
         2: "https://drive.google.com/file/d/1Vt2sIHP7DhzB1toxMWlDN88R3sNqPLOI/preview"}
    ]

    return (
        <div id='full'>
            <iframe src={cf[0][url]}></iframe>
        </div>
    )
}

export default Full;