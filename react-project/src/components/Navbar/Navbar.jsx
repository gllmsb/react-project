import style from "./Navbar.module.scss"

export const Navbar = () => {
    return (
        <>
        <nav className={style.navStyle}>
            <ul className={style.navList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}   