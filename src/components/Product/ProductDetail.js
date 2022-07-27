import React, { useEffect } from "react";
import styles from "./ProductDetail.module.css"
import Footer from "../Main/Footer";
import Header from "../Header";
import { useNavigate, useLocation } from "react-router-dom";
import {LikeState} from "../../recoil/Like";
import { useRecoilState } from "recoil";
function ProductDetail() {

  const navigate = useNavigate();

  const [like, setLike] = useRecoilState(LikeState);

  const onClickLike = () => {
    setLike(current => !current);
  }

  const onClickEvent = () => {
    navigate('/like');
  }
  
  const location = useLocation();
  
  const id = location.state.id;
  const title = location.state.title;
  const sale_pct = location.state.sale_pct;
  const desc = location.state.desc;
  const thumbnail = location.state.thumbnail;
  const sale_price = location.state.sale_price;
  const origin_price = location.state.origin_price;
  const info = location.state.info;

  useEffect(() => {
    console.log("id : ", id);

  }, [id])

  useEffect(() => {
    console.log('상품 화면 나타남');
      return () => { 
        console.log('상품 화면 사라짐');
      }  
    }, [])

  return (
    <div>
      <Header />
      <div>
      <div className={styles.product_top}>
    <div className={styles.cart_top}>
      <img className={styles.product_image} alt={id} src={thumbnail} />
      <div className={styles.product_info}>
      <div className={styles.goods_name}>
        <div className={styles.goods1}>
          <div className={styles.title}>{title}</div>
          <div><img className={styles.share_btn} alt="share" src="https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns.png" /></div>
        </div>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.goods_info}>
        <p className={styles.user_sale}>회원할인가</p>
        { sale_pct === null ? null :<span className={styles.user_price}>{sale_price}<span style={{fontSize: '18px', padding: '0px 7px 0px 2px'}}>원</span></span> }
        { sale_pct === null ? null : <span className={styles.sale}>{sale_pct}<span>%</span></span> }
        { sale_pct === null ?  <p className={styles.user_price}>{origin_price}<span>원</span></p> :  <p className={styles.origin_price}>{origin_price}<span>원</span></p> }
        <p className={styles.login_info}>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</p>
        <div className={styles.coupon_box}><a href="#none" className={styles.coupon_btn}>존쿡 15% 쿠폰 발급 받기</a></div>
      </div>

      <div className={styles.product_table}>
        <dl>
          <dt>판매단위</dt><dd>{info.count}</dd>
          <dt>중량/용량</dt><dd>{info.weight}</dd>
        </dl>
        <dl>
          <dt>배송구분</dt><dd>{info.delivery}</dd>
        </dl>
        
        {info.origin === "" ? null : <dl><dt>원산지</dt><dd>{info.origin}</dd></dl>}

        {info.pktype === "" ? null : <dl><dt>포장타입</dt><dd>{info.pktype}</dd></dl> }

        {info.exdata === "" ? null : <dl><dt>유통기한</dt><dd>{info.exdata}</dd></dl> }

        {info.alergy === "" ? null : <dl><dt>알레르기</dt><dd>{info.alergy}</dd></dl> }

        {info.announce === "" ? null :
        <dl>
          <dt>안내사항</dt>
          <dd>
            <span>{info.announce}</span>
          </dd>
        </dl>}

        <dl className={styles.btn_quantity}>
        <dt>구매수량</dt>
        <dd>
          <span className={styles.qbox}>
            <button type="button">-</button>
            <input type="number" defaultValue="1" style={{paddingLeft: "5px", width: "20px", color: "#666"}}/>
            <button type="button">+</button>
          </span>
        </dd>
        </dl>
      </div>

      

      <div className={styles.total}>
        <div className={styles.price_box}>
          <span>총 상품금액: </span>
          <span className={styles.price_big}>{sale_price ? sale_price : origin_price}<span className={styles.price_small}>원</span></span>
        </div>

        <div className={styles.point_txt}>
          <span className={styles.point_alrim}>적립</span>
          로그인 후, 회원할인가와 적립혜택 제공
        </div>
      </div>

      {/* <button type="button" onClick={onClickEvent}>찜 여부</button> */}
      <div className={styles.buttons}>
        <button type="button" value={like} onClick={onClickLike} className={like===false ? styles.pick_button : styles.pick_button2}>찜하기</button>
        <button type="button" className={styles.alarm_button}>재입고 알림</button>
        <button type="button" className={styles.cart_button}>장바구니 담기</button>
      </div>
    </div>
  </div> 
  </div>


    <div className={styles.goods_info_box}>
    <ul className={styles.goods_view}>
      <li className={styles.goods_view_info}><a href="#goods-description" className={styles.goods_view_tab}>상품설명</a></li>
      <li className={styles.goods_view_info}><a href="#goods-infomation" className={styles.goods_view_tab}>상세정보</a></li>
      <li className={styles.goods_view_info}><a href="#goods-review" className={styles.goods_view_tab}>후기 <span className="count_review">(8811)</span></a></li>
      <li className={styles.goods_view_info}><a href="#goods-qna" className={styles.goods_view_tab}>문의</a></li>
      </ul>

    <div >
      <img alt="brocoli" src="https://img-cf.kurly.com/shop/data/goodsview/20210618/gv30000194499_1.jpg" style={{width: "1010px", height : "670px", marginTop: "100px"}}/>
      <div  className={styles.title_small}>풍부한 영양이 담긴 초록 꽃송이</div>
      <div className={styles.title_design}>  
        친환경 브로콜리
      </div>
      
    </div>

    </div>

      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;