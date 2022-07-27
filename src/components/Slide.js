import React, {useState } from "react";
import styles from "./Slide.module.css";

function Slide() {
  
  const img_list = ["https://img-cf.kurly.com/banner/main/pc/img/81c8240d-6ded-4edb-ac34-7e49bc490181", 
                    "https://img-cf.kurly.com/banner/main/pc/img/60b67224-684f-444e-8467-0dd3466bb6ee",
                    "https://img-cf.kurly.com/banner/main/pc/img/be5f9ae9-3c68-4b01-a407-f4e2c407e95c",
                    "https://img-cf.kurly.com/banner/main/pc/img/81c8240d-6ded-4edb-ac34-7e49bc490181",
                    "https://img-cf.kurly.com/banner/main/pc/img/60b67224-684f-444e-8467-0dd3466bb6ee"];


  const [transformImg, setTransformImg] = useState(0);
  const [transitionImg, setTransitionImg] = useState('');
  let key = 0;
  
  const nextBtn = () => {
    key++;
    console.log(key);
    if(transformImg > -200) {
      
      setTransformImg(transformImg - 100);
      setTransitionImg('1s ease-in-out');
    }
  }

  const prevBtn = () => {
    key--;
    if(transformImg <  0) {
      setTransformImg(transformImg + 100);
      setTransitionImg('1s ease-in-out');
    }
  }

  const componentDidUpdate = () => {
    if(transformImg === -400) {
      setTimeout(() => (
        setTransformImg(-200),
        setTransitionImg('0s')
      ), 1000);
    }

    if(transitionImg === 0) {
      setTimeout(() => (
        setTransformImg(-100),
        setTransitionImg('0s')
      ), 1000);
    }

  }

  return (

    <div>
    <div className={styles.slide}>
      <ul className={styles.slide_list} style={{
        transform: `translateX(${transformImg}vw)`,
        transition: `${transitionImg}`
      }}>
        <li className={styles.slide_item}>
          <img className={styles.slide_image} alt="ban" src={img_list[key]}/>
        </li>
      </ul>
      
    </div>
    </div>
  );

  /* <button className={styles.buttons_next} onClick={nextBtn}>next</button>
      <button className={styles.buttons_prev} onClick={prevBtn}>prev</button> */
}


export default Slide;