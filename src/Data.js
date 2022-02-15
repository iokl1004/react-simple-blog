import React from 'react';

const postList = [
    {
        "no": 1,
        "title": "첫번째 게시글입니다.",
        "content": "첫번째 게시글 내용입니다.",
        "CreateDate": "2020-10-25",
        "readCount": 6
    }, {
        "no": 2,
        "title": "두번째 게시글입니다.",
        "content": "두번째 게시글 내용입니다.",
        "CreateDate": "2020-10-25",
        "readCount": 5
    }, {
        "no": 3,
        "title": "세번째 게시글입니다.",
        "content": "세번째 게시글 내용입니다.",
        "CreateDate": "2020-10-25",
        "readCount": 1
    }, {
        "no": 4,
        "title": "네번째 게시글입니다.",
        "content": "네번째 게시글 내용입니다.",
        "CreateDate": "2020-10-25",
        "readCount": 6
    }, {
        "no": 5,
        "title": "다섯번째 게시글입니다.",
        "content": "다섯번째 게시글 내용입니다.",
        "CreateDate": "2020-10-25",
        "readCount": 4
    },
];

// 게시글 리스트를 갖고 있는 변수 ( array ) 생성 후 특정 게시글 번호를
// 통해 게시글 객체를 가져올 수 있는 함수 getPostByNo 생성
const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    console.log(no);
    if (array.length == 1) {
        return array[0];
    }
    return null;
}

export {
    postList,
    getPostByNo
};