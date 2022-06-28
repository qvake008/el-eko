import styles from "./css.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import CardComp from '../../Card'

export default function Block1() {


  return (
  <Container>
    <div id='Block1' className={styles.content}>
            <h1 className={styles.content__title}>Напрямки діяльності</h1>
            <p style={{ textAlign: 'center' , margin: '0 30px' }}>
              Енергокомпанія ЕЛ-ЕКО - це спеціалізоване підприємство, предметом діяльності якого є енергозабезпечення
              та підвищення енергоефективності промислових підприємств України
            </p>
            <div className={styles.content__cards}>
              <CardComp img='/images/card-img/1.svg' text='Електроенергія за найнижчими цінами та гнучким графіком оплати'/>
              <CardComp img='/images/card-img/2.svg' text='Подання звернень'/>
              <CardComp img='/images/card-img/3.svg' text='Енергетичний аудит комерційних, житлових, адміністративних та промислових приміщень.'/>
              <CardComp img='/images/card-img/4.svg' text='Оператор даних комерційного обліку електронної енергії України.'/>
            </div>
    </div>
  </Container>
)}