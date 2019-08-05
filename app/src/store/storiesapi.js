const baseURL = `http://localhost:5000/stories`

function fetchStories(count) {
    const url = `${baseURL}?count=${count}`
    return fetch(url)
        .then(response => response.json())
}

export {
    fetchStories
}