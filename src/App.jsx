import Headers from './components/header'
import Home from './components/home'
import CardsGreen from './components/cardGreen'
import CardsPlans from './components/cardPlans'
import SectionTime from './components/sectionTime'
import SectionPhoto from './components/sectionPhoto'
import Footer from './components/footer'
import Scroll from './components/scroll'
import Map from './components/map'
function App() {
  return (
    <>
      <Headers />
      <Home />
      <Scroll />
      <SectionPhoto />
      <SectionTime />
      <CardsGreen />
      <CardsPlans />
      <Map />
      <Footer />
    </>
  )
}

export default App
