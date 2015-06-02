module ExLauncher {
  export class App {

    constructor() {
      this.setDisplayProgressBar(true)
      TweenMax.fromTo($(".progress-background"), 10, {width: '0%'}, {width: '100%', onComplete: () => {
          this.setDisplayProgressBar(false)
        }});
    }

    setDisplayProgressBar(display: bool): void {
      if(display){
        TweenMax.to($(".progress-zone"), 1, {top: '25px'});
      }
      else {
        TweenMax.to($(".progress-zone"), 1, {top: '0px'});
      }
    }
  }
}

$(function(){
  var app = new ExLauncher.App();
});
