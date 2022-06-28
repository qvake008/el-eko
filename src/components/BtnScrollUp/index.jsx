import { BsArrowUp } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css.module.scss'

export default function BtnScrollUp() {
    const HenadlClickScrollBtn = () => {
        window.scrollTo(0, 0);
      }
    
    return (
<button className={styles.myBtn} onClick={() => HenadlClickScrollBtn()} title="Вгору"><BsArrowUp/></button>
)}
