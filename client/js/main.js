var Viewsaurus = require('./Viewsaurus');
var GoogleAnalytics = require('./GoogleAnalytics');

$(function () {
    // create GA client
    window.GAClient = new GoogleAnalytics("UA-57519112-3");
    var totalSteps = $('.saurus-prose .step').length;

    GAClient.trackPage(location.href, 0, 0, totalSteps);
    // create global viewsaurus object
    window.viewsaurus = new Viewsaurus();
});
