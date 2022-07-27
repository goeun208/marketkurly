import React from "react";
import styles from "./MainProduct.module.css";
import { useNavigate } from "react-router-dom";

function MainProduct({id, title, thumbnail, desc, sale_pct, sale_price, origin_price, info}) {

  const navigate = useNavigate();

  const onClickProductItem = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${id}`, {
      state: {
        id: id,
        title: title,
        thumbnail: thumbnail,
        desc: desc,
        sale_pct: sale_pct,
        sale_price: sale_price,
        origin_price: origin_price,
        info: info
      }
    })
  }

  return(
        <div key={id}>
          <div className={styles.lists}>
            <div className={styles.products}>
                <img alt={id} src={thumbnail} onClick={onClickProductItem}/>
              <div className={styles.product_info}>
                <div className={styles.product_title}>
                  <div onClick={onClickProductItem} style={{textDecoration: 'none', cursor: 'pointer'}}>{title}</div>
                </div>
                <div className={styles.price_tag}>
                  { sale_pct === null ? null : <div className={styles.sale}>{sale_pct}%</div>}
                  { sale_price === null ? null : <div className={styles.sale_price}>{sale_price}<span>원</span></div>}
                  { sale_pct === null ? <div className={styles.sale_price}>{origin_price}원</div> : <div className={styles.origin_price}>{origin_price}원</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default MainProduct;