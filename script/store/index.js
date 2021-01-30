const cookieparser = process.server ? require("cookieparser") : undefined;
export const state = () => ({
    user: null,
    auth: null,
});

export const mutations = {
    setAuth(state, auth) {
        state.auth = auth;
    },
    setUser(state, user) {
        console.log(user)
        state.user = user;
    },
};

export const actions = {
    //只会再服务端运行
    nuxtServerInit({ commit }, { req }) {
        let user = null;
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie);
            console.log(parsed)
            try {
                user = JSON.parse(parsed.user);
            } catch (err) {
                console.log(err);
                // No valid cookie found
            }
        }
        commit("setUser", user);
    },
};
