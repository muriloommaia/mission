import BodyIndex from './BodyIndex'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import MissionPage from './Support/MissionPage'
import MISSIONARY from './Support/missionary'
import PROJECT from './Support/project'

function App () {
    return (
        <div>
            <Navbar />
            <BodyIndex />
            <MissionPage MISSIONARY={MISSIONARY} PROJECT={PROJECT}/>
            <Footer />
        </div>
    )
}

export default App