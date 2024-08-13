import './App.css'
import { Button } from './components/Button/Button'
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

  const showAlert1 = () => alert('Button 1 clicked');
  const showAlert2 = () => alert('Button 2 clicked');
  const showAlert3 = () => alert('Button 3 clicked');
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

    <Button
      action={showAlert1}
      size="small"
      theme="light"
      text="small light button"
    />
    <Button
      action={showAlert2}
      size="medium"
      theme="dark"
      text="medium dark button"
    />
    <Button
      action={showAlert3}
      size="large"
      theme="light"
      text="large light button"
    />
    
    </>
  )
}

export default App


