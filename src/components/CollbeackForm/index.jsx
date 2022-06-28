import React from 'react';
import { Form , Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css.module.scss'

export default function CollbeackForm() {
    return (
        <Form style={{ display: 'flex' , flexDirection: 'column' , alignItems: 'center' }}>
            <Form.Group className="mb-3">
                <Form.Label>Ваш номер телефону</Form.Label>
                <NumberFormat className="form-control" format="+38(0##) ### ## ##" allowEmptyFormatting mask="_" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ваше ім'я</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Button className={styles.collbeackModalBtn} type="submit">
                Надіслати
            </Button>
        </Form>
    )
}
