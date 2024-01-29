import './App.css'
import Headerview from './components/headerComponent'
import Bodyview from './components/bodyComponent'
import FooterView from './components/footerComponent'
import BGaleryView from './components/bGaleryComponent'

function App() {
  return  (<div className="App">
    <Headerview/>
    <Bodyview/>
    <FooterView/>
  </div> 
  )
}

export default App
