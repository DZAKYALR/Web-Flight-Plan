const initialState = {
    meals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                meals: action.payload
            }
        case "PUT_DATA":
            let newMeals = state.meals.map(e => {
                if (e.id === action.payload.id) {
                    e.isBookmarked = true
                }
                return e
            })
            return {
                ...state,
                meals: newMeals
            }
        case "DEL_DATA":
            let putMeals = state.meals.map(e => {
                if (e.id === action.payload.id) {
                    e.isBookmarked = false
                }
                return e
            })
            return {
                ...state,
                meals: putMeals
            }
        default:
            return state

    }
}

export default mealReducer