import { Navbar } from "../Navbar/Navbar"
import style from "./Header.module.scss"

export const Header = () => {
    return (

    <header className={style.headerStyle}>
        <h1 className={style.title}>This is my header</h1>
        <Navbar/>
    </header>   
    )
}