// 1.定义默认数据
let initialState = {
    userId:'rocky191',
    userName:'rocky191',
    userImage: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    userDesc:'前端工程师'
}

// 2.Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERIMAGE':
            return { ...state, userImage: action.userImage }
        case 'CHANGE_USERID':
            return { ...state,userId:action.userId}
        default:
            return state
    }
}
// 3.导出
export default userReducer;