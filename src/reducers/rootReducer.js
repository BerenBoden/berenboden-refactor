const initState = {
    projects: [
        {key: 'webfirst', title: 'Webfirst', body: 'body1'},
        {key: 'devconnect', title: 'Devconnect', body: 'body2'},
        {key: 'fbclone', title: 'post3', body: 'body3'},
        {key: '', title: 'post4', body: 'body4'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer