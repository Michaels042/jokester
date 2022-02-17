import * as types from './mutation-types'

export const initJokes = ({ commit }) => {
    fetch('http://localhost:3005/jokes/ten', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({ commit }) => {
    fetch('http://localhost:3005/jokes/random', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({ commit }, index) => {    
    commit(types.REMOVE_JOKE, index)
}