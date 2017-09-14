const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const commonFetch = (targetUrl) => {
    return fetch(targetUrl).then(res => res.json());
};

module.exports = {

    getTopArticles() {
        const targetUrl = proxyUrl + "http://news-at.zhihu.com/api/4/news/latest";
        return commonFetch(targetUrl);
    },


};
