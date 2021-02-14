export const initialState = {
    mainPost: [{
        id: 1,
        User: {
            id: 1,
            nickname: "Mia"
        },
        content: "첫 번째 게시글 #해시태그, #해시태그22",
        Images: [{
                src: "https://github.com/jina95/TIL/blob/master/images/actions%20%EB%A1%9C%20%EB%84%98%EA%B8%B4%20%EC%BD%94%EB%93%9C.png"
            },
            {
                src: "https://github.com/jina95/TIL/blob/master/images/%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B4%80%EC%A0%901.png"
            },
            {
                src: "https://github.com/jina95/TIL/blob/master/images/%EB%8F%84%EC%84%9C/3way%EB%B3%91%ED%95%A9.png"
            }
        ],
        Comments: [{
            User: {
                nickname: "HH",
            },
            content: "HIII",  
        },{
            User: {
                nickname: "JJ",
            },
            content: "@@@@!!!!!$$$$"
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = "ADD_POST"

export const addPost = {
    type: ADD_POST
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};


const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            return {
                ...state,
                mainPost: [dummyPost, ...state.mainPost],
                postAdded: true,
            }
        default: 
        return state
    }
}

export default reducer;