export class Question {
  category: string;
  consultant: string;
  human: string;

  constructor(category, consultant, human) {
    this.category = category;
    this.consultant = consultant;
    this.human = human;
  }
}
