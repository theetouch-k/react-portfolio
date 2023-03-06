import "./menu.scss"
import {useContext} from 'react'
import {MenuList} from "./MenuList";
import {MenuOpenContext} from '../../contexts/MenuOpenContext'

export default function Menu() {
    const {menuOpen, setMenuOpen} = useContext(MenuOpenContext);
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <MenuList name="Home" setMenuOpen={setMenuOpen}/>
                <MenuList name="Skills" setMenuOpen={setMenuOpen}/>
                <MenuList name="Portfolio" setMenuOpen={setMenuOpen}/>
                <MenuList name="Contact" setMenuOpen={setMenuOpen}/>
            </ul>
        </div>
    )
}
