import styles from "./css.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import Accordion from 'react-bootstrap/Accordion';

export default function Block6() {


  return (
  <div id='Block6' className={styles.content}>
    <Container>
      <h1 className={styles.content__title}>Відповіді на запитання</h1>
      <div className={styles.content__FAQ}>
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Запитання #1</Accordion.Header>
              <Accordion.Body>
                Риба текст використовується дизайнерами, проєктувальниками та фронтендерами, коли потрібно швидко заповнити макети чи прототипи
                вмістом. Це тестовий контент, який не повинен нести ніякого сенсу, лише показати наявність самого тексту.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Запитання #2</Accordion.Header>
              <Accordion.Body>
                Риба текст використовується дизайнерами, проєктувальниками та фронтендерами, коли потрібно швидко заповнити макети чи прототипи
                вмістом. Це тестовий контент, який не повинен нести ніякого сенсу, лише показати наявність самого тексту.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
    </Container>
  </div>
)}