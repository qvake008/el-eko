import React from 'react';
import ModalWindow from '../ModalWindow';
import CollbeackForm from '../CollbeackForm'
import { BsFillTelephoneFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css.module.scss'

export default function TelephoneBar() {
    const collbeackBtnStyle = styles.collbeack

    const hendlerClick = () => {
        document.location='tel:+0638785788'
    }

    return (
        <div className={styles.nav_rigth}>
            <button className={styles.tell} onClick={()=>hendlerClick()}>+38(063)-878-57-88</button>
            <ModalWindow 
                btnStyle={collbeackBtnStyle} 
                btnImg={<BsFillTelephoneFill alt="phone" className={styles.phone}/>}
                modalTitle = {'Замовлення дзвінка'}
            >
                <CollbeackForm/>
            </ModalWindow>
        </div>
    )
}
