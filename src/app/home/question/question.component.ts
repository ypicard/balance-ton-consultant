import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Question } from 'src/app/classes/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() possibilities: Question[];
  @Output() answered = new EventEmitter<boolean>();

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

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
  }
}
