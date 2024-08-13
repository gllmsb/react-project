import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Greeting } from './components/Name/Name'


function App() {
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    <Greeting name="BingBongidk" />
    <Greeting name="Carl" />
    <Greeting name="Bob" />
    </>
  )
}

export default App


