const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const commonFetch = (targetUrl) => {
    console.log(targetUrl);
    return fetch(proxyUrl + targetUrl)
        .then(res => res.json())
};

module.exports = {

    getMovieOn: (start, count) => {
        let targetUrl = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=深圳" +
            "&start=" + start +
            "&count=" + count;
        return commonFetch(targetUrl);
    },

};