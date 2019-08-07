const baseURL = process.env.STORIES_API_URL

function fetchStories(count) {
    const url = `${baseURL}?count=${count}`
    return fetch(url)
        .then(response => response.json())
}

export {
    fetchStories
}