import React from "react";
import { useRecoilValue } from "recoil";
import { LikeState } from "../../recoil/Like";

function MyLikeProduct() {
  const Like = useRecoilValue(LikeState);
  
  console.log(Like);
  return (
    <div>
      <div>찜 여부: {Like === false ? 'false' : 'true'} 입니다.</div>
      <div>내가 찜한 상품: ...</div>
    </div>
  );
}

export default MyLikeProduct;