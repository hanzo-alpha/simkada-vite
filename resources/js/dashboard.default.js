/**
 *
 * DashboardDefault
 *
 * Dashboards.Default page content scripts. Initialized from scripts.js file.
 *
 *
 */

(function () {
    "use strict";

    // References to page items that might require an update
    let _largeLineChart1 = null;
    let _largeLineChart2 = null;

    function _initEvents() {
        // Listening for color change events to update charts
        document.documentElement.addEventListener(Globals.colorAttributeChange, (event) => {
            _largeLineChart1 && _largeLineChart1.destroy();
            _largeLineChart2 && _largeLineChart2.destroy();
            _initSalesStocksCharts();
        });
    }

    // Stats Carousel
    function _initStatsCarousel() {
        if (document.querySelector('#statsCarousel') !== null && typeof GlideCustom !== 'undefined') {
            new GlideCustom(
                document.querySelector('#statsCarousel'),
                {
                    gap: 0,
                    rewind: false,
                    bound: true,
                    perView: 6,
                    breakpoints: {
                        400: {perView: 1},
                        600: {perView: 2},
                        1400: {perView: 3},
                        1600: {perView: 4},
                        1900: {perView: 5},
                        3840: {perView: 6},
                    },
                },
                true,
            ).mount();
        }
    }

    // Video Guide Player
    function _initVideoGuidePlayer() {
        if (document.querySelector('#videoGuide') !== null && typeof Plyr !== 'undefined') {
            new Plyr(document.querySelector('#videoGuide'));
        }
    }

    // Help Category Select2
    function _initHelpSelect2() {
        if ($.select2) {
            $('#categorySelect').select2({minimumResultsForSearch: Infinity});
        }
    }

    // Custom Sales & Stock Charts
    let chartExtend = ChartsExtend;

    function _initSalesStocksCharts() {
        if (document.getElementById('largeLineChart1')) {
            _largeLineChart1 = chartExtend.LargeLineChart('largeLineChart1', {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Today'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [23, 24, 26, 30, 27],
                        icons: ['arrow-top', 'arrow-top', 'arrow-top', 'arrow-top', 'arrow-bottom'],
                        borderColor: Globals.primary,
                        pointBackgroundColor: Globals.primary,
                        pointBorderColor: Globals.primary,
                        pointHoverBackgroundColor: Globals.foreground,
                        pointHoverBorderColor: Globals.primary,
                        borderWidth: 2,
                        pointRadius: 2,
                        pointBorderWidth: 2,
                        pointHoverBorderWidth: 2,
                        pointHoverRadius: 5,
                        fill: false,
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                        },
                    },
                ],
            });
        }

        if (document.getElementById('largeLineChart2')) {
            _largeLineChart2 = chartExtend.LargeLineChart('largeLineChart2', {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Today'],
                datasets: [
                    {
                        label: 'Stock',
                        data: [44, 49, 45, 33, 52],
                        icons: ['arrow-top', 'arrow-top', 'arrow-bottom', 'arrow-bottom', 'arrow-top'],
                        borderColor: Globals.secondary,
                        pointBackgroundColor: Globals.secondary,
                        pointBorderColor: Globals.secondary,
                        pointHoverBackgroundColor: Globals.foreground,
                        pointHoverBorderColor: Globals.secondary,
                        borderWidth: 2,
                        pointRadius: 2,
                        pointBorderWidth: 2,
                        pointHoverBorderWidth: 2,
                        pointHoverRadius: 5,
                        fill: false,
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                        },
                    },
                ],
            });
        }
    }

    // Dashboard Take a Tour
    function _initTour() {
        if (typeof introJs !== 'undefined' && document.getElementById('dashboardTourButton') !== null) {
            document.getElementById('dashboardTourButton').addEventListener('click', (event) => {
                introJs()
                    .setOption('nextLabel', '<span>Next</span><i class="cs-chevron-right"></i>')
                    .setOption('prevLabel', '<i class="cs-chevron-left"></i><span>Prev</span>')
                    .setOption('skipLabel', '<i class="cs-close"></i>')
                    .setOption('doneLabel', '<i class="cs-check"></i><span>Done</span>')
                    .setOption('overlayOpacity', 0.5)
                    .start();
            });
        }
    }

    _initVideoGuidePlayer();
    _initTour();
    _initEvents();
    _initHelpSelect2();
    _initSalesStocksCharts();
})();
