// 建议使用这中结构

// 1.定义默认数据
let initialState = {
    notificationCount: 0
}

// 2.Reducer
const pageHeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNT':
            return { ...state, notificationCount: action.notificationCount }
        default:
            return state
    }
}
// 3.导出
export default pageHeaderReducer;