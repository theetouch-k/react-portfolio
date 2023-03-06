import './topbar.scss'
import {AccountCircle, Mail} from '@mui/icons-material';
import {useContext} from 'react'
import {MenuOpenContext} from '../../contexts/MenuOpenContext'

export default function Topbar() {
    const {menuOpen, setMenuOpen} = useContext(MenuOpenContext);

    return (
        <div className={"topbar " +(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">urn.</a>
                    <div className="itemContainer">
                        <AccountCircle />
                        <span>+66 94 529 6162</span>
                    </div>
                    <div className="itemContainer">
                        <Mail />
                        <span>theetouch.k@ku.th</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
