const delBookmark = (card) => {
    return {
        type: "DEL_BOOKMARK",
        payload: card
    }
}

export default delBookmark