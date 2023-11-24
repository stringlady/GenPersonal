import './Resume.css'
import resume from '../../assets/gen-resume.pdf'

function Resume() {
    return (
        <div id="res">
            <iframe
                id="obj"
                src="https://drive.google.com/file/d/1LP3NG9w1d6O_kzdekCiUgL6sUNvVVZZv/preview">
                </iframe>
        </div>
    )
}

export default Resume;