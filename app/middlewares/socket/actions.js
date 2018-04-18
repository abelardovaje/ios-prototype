export function set(data) {
    return {
        type: 'SET_SOCKET',
        payload: data
    }
}

export function message(data) {
    return {
        type: 'MESSAGE',
        payload: data
    }
}