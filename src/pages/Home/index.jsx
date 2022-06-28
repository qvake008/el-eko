import React from 'react';
import styles from "./css.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import Block1 from '../../components/Blocks/Block1';
import Block2 from '../../components/Blocks/Block2';
import Block3 from '../../components/Blocks/Block3';
import Block4 from '../../components/Blocks/Block4';
import Block5 from '../../components/Blocks/Block5';
import Block6 from '../../components/Blocks/Block6';

export default function Home() {


  return (<div className={styles.content}>
          <Block1/>
          <Block2/>
          <Block3/>
          <Block4/>
          <Block5/>
          <Block6/>
  </div>
)}