/// <reference path="../typings/tsd.d.ts"/>
var ExLauncher;
(function (ExLauncher) {
    var App = (function () {
        function App() {
            ExLauncher.UI.setProgressBarDisplay(true);
            this.checkUpdate();
        }
        App.prototype.checkUpdate = function () {
            setTimeout(function () {
                ExLauncher.UI.setProgressBarText(ExLauncher.I18N.getText("SEARCH_FOR_UPDATE"));
            }, 1000);
            setInterval(function () {
                ExLauncher.UI.setProgressBarText("Téléchargement des mises à jour .. 0%");
            }, 4000);
        };
        return App;
    })();
    ExLauncher.App = App;
})(ExLauncher || (ExLauncher = {}));
$(function () {
    var app = new ExLauncher.App();
});
/// <reference path="../typings/tsd.d.ts"/>
var ExLauncher;
(function (ExLauncher) {
    var I18N = (function () {
        function I18N() {
        }
        I18N.getText = function (key, data) {
            if (data === void 0) { data = null; }
            return I18N.translation[I18N.lang][key];
        };
        I18N.lang = "fr";
        I18N.translation = {
            "fr": {
                "SEARCH_FOR_UPDATE": "Récupération des données .."
            }
        };
        return I18N;
    })();
    ExLauncher.I18N = I18N;
})(ExLauncher || (ExLauncher = {}));
/// <reference path="../typings/tsd.d.ts"/>
var ExLauncher;
(function (ExLauncher) {
    var UI = (function () {
        function UI() {
        }
        UI.setProgressBarDisplay = function (display) {
            if (display) {
                TweenMax.to($(".progress-zone"), 1, { top: '25px' });
            }
            else {
                TweenMax.to($(".progress-zone"), 1, { top: '0px' });
            }
        };
        UI.setProgressBarText = function (text) {
            var $text = $(".progress-zone .progress-bar .progress-text");
            TweenMax.fromTo($text, 0.8, { bottom: "0px", top: "auto" }, { opacity: 0, bottom: "-10px", onComplete: function () {
                $text.text(text);
                TweenMax.fromTo($text, 0.8, { opacity: 0, bottom: "0px", top: "-10px" }, { opacity: 1, top: "0px" });
            } });
        };
        return UI;
    })();
    ExLauncher.UI = UI;
})(ExLauncher || (ExLauncher = {}));
