import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Main/Footer";
import Header from "../components/Header";
import SearchProduct from "../components/Search/SearchProduct";
import { dummy } from "../dummyData";
import styles from "./Search.module.css"

function Search() {
  const location =  useLocation();

  const keyword = location.state.keyword;


  useEffect(() => {
    console.log('검색 화면 나타남');

    console.log('받아온 키워드', keyword);
  
      return () => { 
        console.log('Search Bye!!!!');
      }  
  }, [])

  return (
    <div>
      <Header/>

      <div className={styles.search_page}>
        <h2 className={styles.title}>상품검색</h2>
        <div className={styles.search_box}>
          <label>검색조건</label>
          <input type="text" className={styles.input_bar} placeholder={keyword} value={keyword} readOnly/>
          <button type="button" className={styles.search_btn}>검색하기</button>
        </div>

        <div className={styles.sort_menu}>
          <span>총 <span>1</span>개</span>
        </div>

        <div className={styles.lists}>
          
          {keyword && dummy.productLists.map((m) => (
            m.title.includes(keyword) 
             ? <SearchProduct lists={m}/> : null))}
             
          {keyword && dummy.productLists2.map((m) => (
            m.title.includes(keyword) 
             ? <SearchProduct lists={m}/> : null))}
        </div>
      </div>

      <Footer />
  </div>

  );
}

export default Search;