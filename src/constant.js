export const INIT_STATE = {
    allPosts: {
        isLoading: false,
        data: [],
        err: null,
        post: null,
    },
    categories: {
        isLoading: false,
        data: [],
        err: null,
    },
    auth: {
        isLoggedIn: false,
        currentUser: null,
        err: null,
        token: false,
        check: false
    },
    post: {
        post: null,
        isLoading: false,
        err: null,
    },

}