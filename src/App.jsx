import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Getstarted from "./component/Investment/Getstarted"
import Navbar from "./component/Navbar"
import WhyBallers from "./component/Investment/WhyBallers"
import WhoIsItFor from './component/Investment/WhoIsItFor'
import Footer from './component/Footer'
import Philanthropy from './component/philantrophy/Philantrophy'
import Ourimpact from './component/philantrophy/Ourimpact'
import Join from './component/Investment/Join'
import ChooseBallers from './component/Investment/ChooseBallers'
import Contribute from './component/philantrophy/Contribute'
import Howitworks from './component/philantrophy/Howitworks'
import TranscendGame from './component/aboutus/TranscendGame'
import AboutUs from './component/aboutus/AboutUs'
import Landing from './component/Investment/Landing'
import SportsLeagues from './component/Investment/Sportsleague'
import Work from './component/Investment/Work'
import Approved from './component/Investment/Approved'

export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <SportsLeagues />
              <Work />
              <Approved />
              <Getstarted />
              <WhoIsItFor/>
              <Join/>
              <WhyBallers />
              <Footer/>
            </>
          } />
          <Route path="/philanthropy" element={
            <>
            <Philanthropy/>
            <WhyBallers/>
            <ChooseBallers/>
            <Contribute/>
            <Howitworks/>
            <Ourimpact/>
            <Footer/>

            </>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/about" element={<>
          <AboutUs/>
      <TranscendGame/>
          
          </>} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}