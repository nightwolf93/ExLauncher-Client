/// <reference path="../typings/tsd.d.ts"/>

module ExLauncher {
  export class App {

    constructor() {
      UI.setProgressBarDisplay(true);
      this.checkUpdate();
    }

    checkUpdate(): void {
      setTimeout(() => {
        UI.setProgressBarText(I18N.getText("SEARCH_FOR_UPDATE"));
      }, 1000);
      setInterval(() => {
        UI.setProgressBarText("Téléchargement des mises à jour .. 0%");
      }, 4000);
    }
  }
}

$(function(){
  var app: ExLauncher.App = new ExLauncher.App();
});
