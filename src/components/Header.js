import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import styles from "./Header.module.css"

function Header() {

 
  const [kw, setKw] = useState("");
  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setKw(e.target.value);
  }


  const onSubmitSearchbar = (e) => {
    console.log(e);
    //e.preventDefault();
    if(e.key === 'Enter') {
      onClickSearchbar();
    }
  }

  const onClickSearchbar = () => {
      navigate(`/search/${kw}`, {state : {keyword: kw}});

    
  }
  return (
    <div>
      <div className={styles.header}>
      <div className={styles.header_top}> 
        <div className={styles.devide_top}><img alt="delivery_notice" src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" className={styles.delivery_notice} /> </div>
        <div className={styles.devide_top}>
          <ul className={styles.top_menu}>
            <li className={styles.top_menu_item}><a href="#" style={{color: "#5F0080"}}>회원가입</a></li>
            <li className={styles.top_menu_item}><a href="#">로그인</a></li>
            <li className={styles.top_menu_item}><a href="#">고객센터</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.header_logo}>
        <div className={styles.img_div}>
          <Link to="/">
            <img alt="logo" src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" className={styles.logo} />
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.nav}>
      <div>
       <ul className={styles.navbar}>
        <li><a href="#"><img className={styles.hbg} alt="hbg" src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"/>전체 카테고리</a></li>
        <li><a href="#">신상품</a></li>
        <li><a href="#">베스트</a></li>
        <li><a href="#">알뜰쇼핑</a></li>
        <li><a href="#">특가/혜택</a></li>
       </ul>
      </div>
      <div>
        <form className={styles.nav_form}>
          <input value={kw} onChange={handleUserInput} onKeyPress={onSubmitSearchbar} type="text" placeholder="검색어를 입력해주세요." className={styles.search} />
          
          <img onClick={onClickSearchbar} src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" className={styles.search_img} />
        </form>
      </div>
      <div><button type="button" className={styles.btn}><img className={styles.location_img} alt="location" src="https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1" /></button></div>
      <div><button type="button" className={styles.btn}><img alt="like" src="https://res.kurly.com/pc/service/pick/btn-heart-off.svg" /></button></div>
      <div><button type="button" className={styles.btn}><img alt="cart" src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg" /></button></div>
    </div>
    </div>
  );
}

export default Header;