import {atom} from 'recoil';

export const LikeState = atom({ //함수 이름으로 임포트
	key: "likestate",
	default: false // 초기값!
});

export const ListProductState = atom({
  key: 'ListProductState',
  default: '',
})