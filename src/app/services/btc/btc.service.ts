import { Injectable } from '@angular/core';
import { Question } from 'src/app/classes/question';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BtcService {
  private questions: Question[] = [];
  private ready: Boolean = false;

  constructor(private _http: HttpClient) {
    console.log('init btc');
    this.fetchDataset().subscribe(
      res => {
        this.questions = res;
        this.ready = true;
      },
      err => {
        console.error(err);
      }
    );
  }

  public isReady() {
    return this.ready;
  }

  public getRandomQuestion(): Question {
    console.log('random')
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  public getPossibilitiesFromQuestion(question: Question, nb: number): Question[] {
    const res = [question];

    while (res.length < nb) {
      let q = this.getRandomQuestion();
      while (res.indexOf(q) > -1) {
        q = this.getRandomQuestion();
      }
      res.push(q);
    }

    return this.shuffle(res);
  }

  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  private fetchDataset() {
    return this._http
      .get(
        'https://spreadsheets.google.com/feeds/list/1r9pWqB1pPykQzkTnnQP0WJ3znXpzjV5R6Eh9YvaqV0E/od6/public/values?alt=json'
      )
      .pipe(
        map((res: any) => {
          return res.feed.entry.map(el => {
            return new Question(
              el['gsx$category']['$t'],
              el['gsx$consultant']['$t'],
              el['gsx$humain']['$t']
            );
          });
        })
      );
  }
}
