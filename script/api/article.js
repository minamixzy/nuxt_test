import request from "@/util/request.js";

//查询文章
export const getArticles = (params) => {
    return request({
        url: "/api/articles",
        method: "GET",
        params,
    });
};

