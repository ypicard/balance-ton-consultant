import { Component, OnInit } from '@angular/core';
import { BtcService } from '../services/btc/btc.service';
import { Question } from '../classes/question';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public question: Question;
  public possibilities: Question[];

  constructor(public btc: BtcService) {
    // btc service singleton
  }

  ngOnInit() {}

  public refreshQuestion() {
    this.question = this.btc.getRandomQuestion();
    this.possibilities = this.btc.getPossibilitiesFromQuestion(this.question, 4);
  }
}
