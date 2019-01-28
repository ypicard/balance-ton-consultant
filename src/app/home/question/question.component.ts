import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Question } from 'src/app/classes/question';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() possibilities: Question[];
  @Output() answered = new EventEmitter<boolean>();
  bgImage: String;

  constructor(public alertController: AlertController) {}

  ngOnInit() {
    this.bgImage = this.getRandomBackgorundImage();
  }

  public async answerQuestion(choice) {
    if (choice.consultant === this.question.consultant) {
      const alert = await this.alertController.create({
        header: 'GG',
        message: 'Bientot senior',
        buttons: ['OK']
      });
      await alert.present();
      this.nextQuestion();
    } else {
      const alert = await this.alertController.create({
        header: 'Arf, loser',
        message: 'Demande au stagiaire',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  public nextQuestion() {
    this.answered.emit(true);
    this.bgImage = this.getRandomBackgorundImage();
  }

  public getRandomBackgorundImage() {
    // set number of background image choices here (must be equal to number of pictures in /assets/question-backgrounds)
    const nb = this.getRandomInt(1, 25);
    return '/assets/question-backgrounds/q-' + nb + '.jpg';
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
