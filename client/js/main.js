var Viewsaurus = require('./Viewsaurus');
var GoogleAnalytics = require('./GoogleAnalytics');

$(function () {
    // create GA client
    window.GAClient = new GoogleAnalytics("UA-57519112-3");
    GAClient.trackPage(location.href, 0, 0);
    // create global viewsaurus object
    window.viewsaurus = new Viewsaurus();
});
