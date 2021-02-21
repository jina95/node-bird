import shortId from "shortid"

export const initialState = {
    mainPost: [{
        id: 1,
        User: {
            id: 1,
            nickname: "Mia"
        },
        content: "첫 번째 게시글 #해시태그, #해시태그22",
        Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
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
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST"
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const ADD_POST_FAILURE = "ADD_POST_FAILURE"

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"


export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
});



const dummyPost = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제로초',
    },
})


const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST: 
            return {
                ...state, 
                addPostLoading: true,
                addPostDone: false,
                addPostError: null
            }
        case ADD_POST_SUCCESS: 
            return {
                ...state,
                mainPost: [dummyPost(action.data), ...state.mainPost],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE: 
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            }

        case ADD_COMMENT_REQUEST: 
            console.log("addRequest", action.data)
            return {
                ...state, 
                addCommentLoading: true,
                addPostDone: false,
                addPostError: null
            }
        case ADD_COMMENT_SUCCESS: {
            console.log("ADD_COMMENT_SUCCESS", action.data)
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
              ...state,
              mainPosts,
              addCommentLoading: false,
              addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE: 
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            }
        default: 
        return state
    }
}

export default reducer;