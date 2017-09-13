const proxyUrl = "https://cors-anywhere.herokuapp.com/";

module.exports = {

    getMovieOn: (start, count) => {
        let targetUrl = proxyUrl
            + "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=深圳" +
            "&start=" + start +
            "&count=" + count;
        return fetch(targetUrl).then(res => res.json())
    }

};