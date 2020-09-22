import axios from 'axios';

// HTTP Request & Response 관련 기본 설정
const config = {
  baseUrl: 'http://api.chosajang.com'
};

// API 함수 정리
function postList () {
  return axios.get(`${config.baseUrl}/posts/list`);
}

function postRead (postSeq) {
  return axios.get(`${config.baseUrl}/posts/read`, {
    params: {
      article_seq: postSeq
    }
  });
}

export {
  postList,
  postRead
};
