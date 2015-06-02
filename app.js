var ExLauncher;
(function (ExLauncher) {
    var App = (function () {
        function App() {
            var _this = this;
            this.setDisplayProgressBar(true);
            TweenMax.fromTo($(".progress-background"), 10, { width: '0%' }, { width: '100%', onComplete: function () {
                _this.setDisplayProgressBar(false);
            } });
        }
        App.prototype.setDisplayProgressBar = function (display) {
            if (display) {
                TweenMax.to($(".progress-zone"), 1, { top: '25px' });
            }
            else {
                TweenMax.to($(".progress-zone"), 1, { top: '0px' });
            }
        };
        return App;
    })();
    ExLauncher.App = App;
})(ExLauncher || (ExLauncher = {}));
$(function () {
    var app = new ExLauncher.App();
});
