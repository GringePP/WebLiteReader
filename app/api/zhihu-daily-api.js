const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const commonFetch = (targetUrl) => {
    return fetch(proxyUrl + targetUrl).then(res => res.json());
};

module.exports = {

    getTopArticles() {
        const targetUrl = "http://news-at.zhihu.com/api/4/news/latest";
        return commonFetch(targetUrl);
    },

    getSections(){
        const targetUrl = "http://news-at.zhihu.com/api/4/sections";
        return commonFetch(targetUrl);
    }

};
