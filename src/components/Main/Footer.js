import React from "react";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_desc}>
          <div className={styles.qna}>
            <h2 className={styles.qna_title}>고객행복센터</h2>
            <div className={styles.box}>
              <h2><span>1644-1107</span></h2>
              <dl>
                <dt className={styles.box_dt}>365 고객센터</dt>
                <dd className={styles.box_dd}>오전 7시 - 오후 7시</dd>
              </dl>
              
            </div>

            <div className={styles.box}>
              <h3><a href="#" className={styles.qna_box}>카카오톡 문의</a></h3>
              <dl>
                <dt className={styles.box_dt}>365 고객센터</dt>
                <dd className={styles.box_dd}>오전 7시 - 오후 7시</dd>
              </dl>
            </div>

            <div className={styles.box}>
              <h3 ><a href="#" className={styles.qna_box}>1:1 문의</a></h3>
              <dl>
                <dt className={styles.box_dt}>24시간 접수 가능</dt>
                <dd className={styles.box_dd}>고객 센터 운영 시간에 순차적으로 답변해드리겠습니다.</dd>
              </dl>
            </div>

            <div className={styles.box}>
              <h3><a href="#"className={styles.qna_box}>대량주문 문의</a></h3>
              <span className={styles.box_span}>비회원일 경우 메일로 문의 바랍니다.</span>
            </div>
          </div>
          <div className={styles.company}>
            <ul className={styles.company_ul}>
              <li>컬리소개</li>
              <li>컬리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
            
            법인명 (상호) : 주식회사 컬리 <span className={styles.bar}>I</span> 
            사업자등록번호 : 261-81-23567 <a href="#" className={styles.link}>사업자정보 확인</a> <br />
            통신판매업 : 제 2018-서울강남-01646호 <span className={styles.bar}>I</span>
            개인정보보호책임자 : 이원준 <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span className={styles.bar}>I</span>
            대표이사 : 김슬아 <br /> 입점문의 : <a href="#" className={styles.link}>입점문의 하기</a>
            <span className={styles.bar}>I</span> 마케팅제휴 : <a href="#" className={styles.link}>business@kurlycorp.com</a>
            <br /> 채용문의 : <a href="#" className={styles.link}>recruit@kurlycorp.com</a> <br/>
            팩스 : 070 - 7500 - 6098 <span className={styles.bar}>I</span> 
            이메일 :  <a href="#" className={styles.link}>help@kurlycorp.com</a> <br/>
            대량주문 문의 :  <a href="#" className={styles.link}>kurlygift@kurlycorp.com</a> <br/>

            <ul className={styles.sns_list}>
              <li><a href="https://instagram.com/marketkurly"  className={styles.link_sns} target="_blank"><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기" /></a></li>
              <li><a href="https://www.facebook.com/marketkurly" className={styles.link_sns} target="_blank"><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기" /></a></li>
              <li> <a href="http://blog.naver.com/marketkurly"  className={styles.link_sns} target="_blank"><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 네이버블로그 바로가기" /></a></li>
              <li><a href="https://m.post.naver.com/marketkurly"  className={styles.link_sns} target="_blank"><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 포스트 바로가기" /></a></li>
              <li><a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"  className={styles.link_sns} target="_blank"><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기" /></a></li>
            </ul>  
          </div>


        </div>
      </div>

      <div className={styles.footer_link}>
      <div className={styles.footer_link_box}>
      <a href="#none"  className={styles.mark} target="_blank">
        <img src="https://res.kurly.com/kurly/logo/isms_220310.png" alt="isms 로고" className={styles.logo}  />
        <p className={styles.txt}>
        [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br />
        (심사받지 않은 물리적 인프라 제외)<br />
        [유효기간] 2022.01.19 ~ 2025.01.18
        </p>
      </a>

      <a href="#none" className={styles.mark} target="_blank">
        <img src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" alt="eprivacy plus 로고" className={styles.logo} />
        <p className={styles.txt}>
        개인정보보호 우수 웹사이트 ·<br/>
        개인정보처리시스템 인증 (ePRIVACY PLUS)
        </p>
      </a>

      <a href="#none" className={styles.mark} target="_blank">
        <img src="https://res.kurly.com/pc/service/main/2009/logo_payments.png" alt="payments 로고" className={styles.logo_payment} />
        <p className={styles.txt}>
        고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br/>
        토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
        </p>
      </a>
      </div>

       </div>

      <div className={styles.footer_bottom}>
        <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓)상품이 포함되어 있습니다.</p>
        <p>마켓플레이스(오픈마켓)상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문,품질,교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
        <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
      </div>
    </div>
  );
}

export default Footer;