const fetchData = (value) => {
    return {
        type: "FETCH_DATA",
        payload: value
    }
}

export default fetchData