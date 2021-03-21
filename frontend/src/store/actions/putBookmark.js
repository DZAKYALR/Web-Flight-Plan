const putBookmark = (card) => {
    return {
        type: "ADD_BOOKMARK",
        payload: card
    }
}

export default putBookmark