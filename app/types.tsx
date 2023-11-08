export type Bird = {
  id: number,
  name: string,
  image: string
};

export type Question = {
  bird: Bird,
  answers: string[]
}

export type Score = {
  score: number,
  highestScore: number;
  previousScore: number;
}