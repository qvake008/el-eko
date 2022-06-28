import styles from "./css.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaWhatsappSquare , FaFacebookSquare } from "react-icons/fa";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Block5() {


  return (<div id='Block5' className={styles.content}>
  <Container>
    <h1 className={styles.content__title}>Контакти</h1>
      <Row>
        <Col lg={3}>
          <div className={styles.content__left}>
            <div className={styles.logo}>
                <div className={styles.logo__main}>
                    <h1 style={{ display: 'flex' , alignItems: 'center'}}><p style={{ color: '#498BBA' , marginBottom: '0' }}>ЕЛ</p><img style={{ height: '15px', transform: 'rotate(90deg)' , margin: '0 2px 4px 2px' }} src="./images/header/light-logo.svg" alt="light" />ЕКО</h1>
                    <img className={styles.logo__main__img} src="./images/header/default-logo.svg" alt="logo" />
                    <img className={styles.logo__main__img} src="./images/header/default-logo.svg" alt="logo" />
                    <img className={styles.logo__main__img} src="./images/header/default-logo.svg" alt="logo" />
                </div>
                <p className={styles.logo__discription}>Постачальник електроенергії</p>
              </div>
              <p style={{ margin: '0px' }}>Адреса:</p>
              <p style={{ margin: '0px' }}>м. Київ, вул. Ярославів Вал 13Б, офіс 18 (метро «Золоті ворота»)</p>
              <p style={{ marginTop: '10px' , marginBottom: '0px' }}>Час роботи:</p>
              <p style={{ margin: '0px' }}>Пн. – Пт. : з 8:30 до 18:00</p>
              <p style={{ marginTop: '10px' , marginBottom: '0px' }}>Телефон:</p>
              <p style={{ margin: '0px' }}>+380 (63) 878-57-88</p>
              <p style={{ marginTop: '10px' , marginBottom: '0px' }}>E-mail: el-eco@gmail.com</p>
              <p style={{ margin: '10px 0' }}>
                Соціальні мережі:
                <a href="/"><FaWhatsappSquare style={{ color: '#794f99' , fontSize: '30px' , textDecoration: 'none' , margin: '0 5px' }}/></a>
                <a href="/"><FaFacebookSquare style={{ color: '#4867aa' , fontSize: '30px' , textDecoration: 'none' }}/></a>
              </p>
          </div>
        </Col>
        <Col lg={9}>
          <iframe title="map" style={{width: '100%' , height: '93%' , marginTop: '30px' , minHeight: '250px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.476508962162!2d30.50725331591148!3d50.45085079521683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce594cb21303%3A0xc47ef6329e8b6906!2z0YPQuy4g0K_RgNC-0YHQu9Cw0LLQvtCyINCS0LDQuywgMTPQkSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1645112071004!5m2!1sru!2sua"></iframe>
        </Col>
      </Row>
    </Container>
  </div>
)}