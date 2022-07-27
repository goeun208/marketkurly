import React from "react";
import styles from "./SearchProduct.module.css"

function SearchProduct(items) {

  console.log(items.lists.id);
      return (
    <div className={styles.products}>
    <a href="#">
      <img alt={items.lists.id} src={items.lists.thumbnail} />
    </a>
    <div className={styles.product_info}>
      <div className={styles.product_title}>
          <a href="#" style={{textDecoration: 'none'}}>{items.lists.title}</a>
      </div>
      <div className={styles.price_tag}>
        { items.lists.sale_pct === null ? null : <span className={styles.sale}>{items.lists.sale_pct}<span>%</span></span> }
        { items.lists.sale_pct === null ? null :<span className={styles.user_price}>{items.lists.sale_price}<span style={{fontSize: '18px', padding: '0px 7px 0px 2px'}}>원</span></span> }
        { items.lists.sale_price === null ?  <p className={styles.user_price}>{items.lists.origin_price}<span>원</span></p> :  <p className={styles.origin_price}>{items.lists.origin_price}<span>원</span></p> }
      </div>
      <div className={styles.product_desc}>{items.lists.desc}</div>
    </div>
  </div>
  );

  
}

export default SearchProduct;