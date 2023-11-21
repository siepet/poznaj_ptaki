export type Bird = {
  id: number;
  name: string;
  image: string;
};

export type Question = {
  bird: Bird;
  answers: string[];
};

export type Score = {
  score: number;
  highestScore: number;
  previousScore: number;
};

export const InitScore: Score = {
  score: 0,
  highestScore: 0,
  previousScore: 0,
};

export const InitBird: Bird = {
  id: 0,
  name: "",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subalpine_Warbler_-_Monfrague_-_Spain_2669_%2819110069408%29.jpg/150px-Subalpine_Warbler_-_Monfrague_-_Spain_2669_%2819110069408%29.jpg",
};
