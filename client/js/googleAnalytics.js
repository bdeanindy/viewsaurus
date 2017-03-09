var GoogleAnalytics = function (id) {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', id, 'auto');
    this.trackPage = function (url, percentage, step) {
        var title = window.tutorialName || document.title;
        ga('set', 'dimension1', title);
        ga('set', 'dimension2', percentage);
        ga('set', 'dimension3', url);
        ga('set', 'dimension4', step);
        // var eventData = {
        //     'url': url,
        //     'title': title,
        //     'step': step,
        //     'completedPercentage': percentage
        // };
        //
        ga('send', 'pageview', {
            'dimension1': title,
            'dimension2': percentage,
            'dimension3': url,
            'dimension4': step
        });
    };
};

module.exports = GoogleAnalytics;