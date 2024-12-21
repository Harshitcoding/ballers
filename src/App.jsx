import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Approved from "./component/Approved"
import Getstarted from "./component/Getstarted"
import Landing from "./component/Landing"
import Navbar from "./component/Navbar"
import SportsLeagues from "./component/Sportsleague"
import WhyBallers from "./component/WhyBallers"
import Work from "./component/Work"
import WhoIsItFor from './component/WhoIsItFor'
import Footer from './component/Footer'
import Philanthropy from './component/philantrophy/Philantrophy'
import Ourimpact from './component/philantrophy/Ourimpact'
import Join from './component/Join'
import ChooseBallers from './component/ChooseBallers'
import Contribute from './component/philantrophy/Contribute'
import Howitworks from './component/philantrophy/Howitworks'
import AboutUs from './component/aboutus/aboutus'

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
            </>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path='/about' element={<AboutUs/>}/>

        </Routes>
      </div>
      <Footer/>

    </BrowserRouter>
  )
}