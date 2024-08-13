import './App.css'
import { Favorite } from './components/Favorite/Favorite'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Greeting } from './components/Name/Name'
import { Title } from './components/Title/Title'
// import { Title } from './components/Title/Title'


function App() {
  const favoriteFoods = ["Pizza", "Pasta", "Sushi", "Steak", "Adobo"];
  const favoriteMovies = ["The Three Stooges", "Perfume", "Avengers EndGame", "Project Adam", "Journey to the center of the Earth"]
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    <Greeting name="BingBongidk" />
    <Greeting name="Carl" />
    <Greeting name="Bob" />
    {/* <Title titleText="Props are cool"/> */}
    <Title />
    <Favorite title="My Favorite Foods" list={favoriteFoods} />
    <Favorite title="My Favorite Movies" list={favoriteMovies} />
    </>
  )
}

export default App


