import './home.scss'
import {KeyboardArrowDown, Facebook, LinkedIn, GitHub} from '@mui/icons-material';
import { init } from 'ityped';
import {useEffect, useRef} from 'react';

export default function Home() {
    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { showCursor: false, strings: ['Student', 'Software Developer', 'Music Lover', 'Tester' ] });
    }, [])
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="wrapper">
                    <h2>Hi, I am</h2>
                    <h1>Urn Theetouch</h1>
                    <h3>[ <span ref={textRef}></span> ]</h3>

                    <div className="itemContainer">
                        <a href="https://www.facebook.com/urn.thk" target="_blank">
                            <Facebook className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/theetouch-kasemarnontana-51a17922a/" target="_blank">
                            <LinkedIn className="icon"/>
                        </a>
                        <a href="https://github.com/lisbono2001" target="_blank">
                            <GitHub className="icon"/>
                        </a>
                    </div>
                </div>
                
            </div>
            
            <div className="right">
                <div className="imgContainer">
                    <img className="portrait" src="assets/profile.jpg" alt="profile" />
                </div>
            </div>

            <div className="downContainer">
                <a href="#skills">
                    <KeyboardArrowDown className="down"/>
                </a>
            </div>
        </div>
    )
}
