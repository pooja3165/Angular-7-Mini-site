const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('15c58766cdf2482cb6653d8ed473a483');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
    sources: 'all',
    q: 'modi',
    category: 'entertainment',
    language: 'en',
    country: 'us'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
    q: 'modi',
    sources: 'all',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 5
}).then(response => {
    console.log(response);
});
// To query sources
// All options are optional
newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
});