import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  chosenIdx = -1;
  constructor()
  {
  
  }

  onClick(event: any, idx: number){
    let chosen = event.target;
    if(chosen.innerText == "Vote"){
      this.chosenIdx = idx;
      chosen.innerText = "Unvote";
    }else if(chosen.innerTexas = "Unvote"){
      this.chosenIdx = -1;
      chosen.innerText = "Vote";
    }
     
  }

  isChosen(idx: number){
    if(idx == this.chosenIdx)
      return false;
    else
      return true;
  }

  isDisabled(idx: number){
    if(this.chosenIdx < 0 || idx==this.chosenIdx)
      return false;
    else
      return true;
  }
}
