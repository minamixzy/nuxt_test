import request from "@/util/request.js";

export const login = (data) => {
    return request({
        url: "/api/users/login",
        method: "POST",
        data,
    });
};

export const register = (data) => {
    return request({
        url: "/api/users",
        method: "POST",
        data,
    });
};
