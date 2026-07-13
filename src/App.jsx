import './App.css'
import Buisness from './component/body/Buisness'
import Clients from './component/body/Clients'
import Experience from './component/body/Experience'
import LatestProject from './component/body/LatestProject'
import OurCourses from './component/body/OurCourses'
import Trial from './component/body/Trial'
import Border from './component/footer/Border'
import Footer from './component/footer/Footer'
import Navbar from './component/header/Navbar'
import Banner from './component/header/Banner'


function App() {


  return (
    <>
    <Navbar />
    <Banner />
    <Experience />
    <OurCourses />
    <LatestProject />
    <Buisness />
    <Clients />
    <Trial />
    <Footer />
    <Border />
    </>
  )
}

export default App
