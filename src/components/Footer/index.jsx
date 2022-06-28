import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css.module.scss";
import { BsFillTelephoneFill , BsFillClockFill  } from "react-icons/bs";
import { FaWhatsappSquare , FaFacebookSquare , FaEnvelope , FaMapMarkedAlt } from "react-icons/fa";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {

    
    return (
        <div className={styles.footer}>
            <Container>
                <Row>
                    <Col md={4} style={{ padding: '0px' }}>
                        <div className={styles.footer__links}>
                            <h1>Посилання</h1>
                            <div className={styles.footer__links__items}>
                                <a href="#Block1">Про компанію</a>
                                <a href="#Block3">Підключення</a>
                                <a href="#Block4">Тарифи</a>
                                <a href="#Block5">F.A.Q.</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} style={{ padding: '0px' }}>
                        <div className={styles.footer__addres}>
                            <h1>Адресса</h1>
                            <p className={styles.footer__contacts__textstyle}><FaMapMarkedAlt alt="map" className={styles.footer__contacts__icon}/>вул. Ярославів Вал 13Б, Офіс 18 <br /></p>
                            <p className={styles.footer__contacts__textstyle}>(ст. метро «Золоті ворота»)</p>
                        </div>
                    </Col>
                    <Col md={4} style={{ padding: '0px' }}>
                        <div className={styles.footer__contacts}>
                            <h1>Контакти</h1>
                            <a href="tel:+380638785788"><BsFillTelephoneFill alt="phone" className={styles.footer__contacts__icon}/>+38(063)-878-57-88</a>
                            <div className={styles.footer__contacts__textstyle}>
                                <BsFillClockFill alt="clock" className={styles.footer__contacts__icon}/>Пн. – Пт. : з 8:30 до 18:00
                                
                            </div>
                            <div className={styles.footer__contacts__textstyle}>
                            <a href="mailto:el-eco@gmail.com"><FaEnvelope alt="email" className={styles.footer__contacts__icon}/>el-eco@gmail.com</a>
                            </div>
                            <div className={styles.footer__contacts__social}>
                                <a href="/"><FaFacebookSquare style={{ color: '#4867aa' , fontSize: '30px' , textDecoration: 'none' }}/></a>
                                <a href="/"><FaWhatsappSquare style={{ color: '#794f99' , fontSize: '30px' , textDecoration: 'none' }}/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
