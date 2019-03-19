// 1.定义默认数据
let initialState = {
    userImage: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
}

// 2.Reducer
const userImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERIMAGE':
            return { ...state, userImage: action.userImage }
        default:
            return state
    }
}
// 3.导出
export default userImageReducer;