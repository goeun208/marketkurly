import React from "react";
import Footer from "../components/Main/Footer";
import Header from "../components/Header";
import styles from "./Main.module.css"
import {dummy} from "../dummyData";
import MainProduct from "../components/Main/MainProduct";
import Banner from "../components/Main/Banner";

function Main() {

  return(
    <div>
      <Header />
      
      <Banner />

      <div className={styles.product_list}>
        <div className={styles.title}><span>이 상품 어때요?</span></div>
        {dummy.productLists.map((items) => (
          <MainProduct key={items.id}
            id={items.id}
            title={items.title}
            thumbnail={items.thumbnail}
            desc={items.desc}
            sale_pct={items.sale_pct}
            sale_price={items.sale_price}
            origin_price={items.origin_price}
            info={items.info}  
          />
        ))}
      </div>

      <div className={styles.event_banner_div}>
        <img className={styles.event_banner} alt="event-banner" src="https://img-cf.kurly.com/banner/random-band/pc/img/938f89dd-1b0d-4d62-9cbf-3c9f1f1c1245" />
      </div>

      <div className={styles.product_list}>
        <div className={styles.title}><span>놓치면 후회할 가격 {'>'}</span></div>
        {dummy.productLists2.map((items) => (
          <MainProduct key={items.id}
            id={items.id}
            title={items.title}
            thumbnail={items.thumbnail}
            desc={items.desc}
            sale_pct={items.sale_pct}
            sale_price={items.sale_price}
            origin_price={items.origin_price}  
            info={items.info}  
          />
        ))}
      </div>
      
      <Footer />
    </div>
  )
}

export default Main;