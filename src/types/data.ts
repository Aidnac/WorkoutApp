export type Difficulty = 'easy' | 'normal' | 'hard';
export type SequenceType = 'exercise' | 'stretch' | 'break';

export interface Workout {
  slug: string;
  name: string;
  duration: Difficulty;
  difficulty: string;
  sequence: SequenceType[];
}

export interface SquenceItem {
  slug: string;
  name: string;
  type: SequenceType;
  duration: number;
  reps?: number;
}
