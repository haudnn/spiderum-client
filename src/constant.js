export const INIT_STATE = { 
    posts : {
        isLoading : false,
        data : [],
    },
    auth : {
        isLoggedIn: false,
        currentUser: null,
        err:null,
        token:null,

    },
}