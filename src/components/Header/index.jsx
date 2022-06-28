import React, { useState , useEffect} from "react";

import { Navbar , Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import TelephoneBar from '../TelephoneBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState(document.documentElement.clientWidth);
    const menuToggler = () => setMenuOpen((p) => !p);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(document.documentElement.clientWidth)
        });
      },[]);
    
    return (
        <Navbar expand={(size<=1053)?false:true} className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <Navbar.Brand as={Link} to="/" className={styles.logo}>
                            <div className={styles.logo__main}>
                                <h1 style={{ display: 'flex' , alignItems: 'center'}}><p style={{ color: '#498BBA' , marginBottom: '0' }}>ЕЛ</p><img style={{ height: '15px', transform: 'rotate(90deg)' , margin: '0 2px 4px 2px' }} src="./images/header/light-logo.svg" alt="light" />ЕКО</h1>
                                <img className={styles.logo__main__img} src="/images/header/default-logo.svg" alt="logo" />
                                <img className={styles.logo__main__img} src="/images/header/default-logo.svg" alt="logo" />
                                <img className={styles.logo__main__img} src="/images/header/default-logo.svg" alt="logo" />
                            </div>
                            <p className={styles.logo__discription}>Постачальник електроенергії</p>
                    </Navbar.Brand>
                </div>
                    <Nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] :(size<=1053)?styles[`nav--close`]:{} }`}>
                        <Nav.Link onClick={menuToggler} href="#Block1" className={styles.menu_btn}>Про компанію</Nav.Link>
                        <Nav.Link onClick={menuToggler} href="#Block3" className={styles.menu_btn}>Тарифи</Nav.Link>
                        <Nav.Link onClick={menuToggler} href="#Block4" className={styles.menu_btn}>Підключення</Nav.Link>
                        <Nav.Link onClick={menuToggler} href="#Block5" className={styles.menu_btn}>Контакти</Nav.Link>
                        <Nav.Link onClick={menuToggler} href="#Block6" className={styles.menu_btn}>Поширені питання</Nav.Link>
                    </Nav>
                <div className={styles.header__button__container}>
                    <Button />
                </div>
                <div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </button>
                </div>
            </div>
        </Navbar>
    );
};

const Button = () => {
    return <TelephoneBar/>;
};

export default Header;