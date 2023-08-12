export interface QuestionModel {
  topic_id: string;

  difficulty: number;

  text: string;

  answers: Array;

  correct_answer: string;

  datetime: Date;
}
