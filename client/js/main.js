var Viewsaurus = require('./Viewsaurus');
var GoogleAnalytics = require('./GoogleAnalytics');

$(function () {
    // create GA client
    if (window.GATrackingID) {
        window.GAClient = new GoogleAnalytics(window.GATrackingID);
        GAClient.trackPage(location.href);
    }
    // create global viewsaurus object
    window.viewsaurus = new Viewsaurus();
});
