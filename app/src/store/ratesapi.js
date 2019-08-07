const baseURL = process.env.RATES_API_URL

function fetchCurrentRates(base) {
    const url = `${baseURL}/latest_rates/base/${base}`
    return fetch(url)
        .then(response => response.json())
}
    
function fetchRateHistory(base, target, months) {
    const url = `${baseURL}/rate_history/base/${base}/target/${target}/months/${months}`
    return fetch(url)
        .then(response => response.json())
}

function csvDownloadURL(base, target, months) {
    return `${baseURL}/rate_history/base/${base}/target/${target}/months/${months}?format=csv`
}

export {
    fetchCurrentRates,
    fetchRateHistory,
    csvDownloadURL
}
