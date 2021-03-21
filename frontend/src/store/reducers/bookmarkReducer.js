const initialStateBookmark = {
    bookmark: []
}

const bookmarkReducer = (state = initialStateBookmark, action) => {
    switch (action.type) {
        case "ADD_BOOKMARK":
            return {
                ...state,
                bookmark: state.bookmark.concat(action.payload)
            }
        case "DEL_BOOKMARK":
            let newBookmark = state.bookmark.filter(e => e.id !== action.payload.id)
            return {
                ...state,
                bookmark: newBookmark
            }
        default:
            return state

    }
}

export default bookmarkReducer