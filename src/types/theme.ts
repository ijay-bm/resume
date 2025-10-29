export enum Theme {
  Light = "light",
  Dark = "dark"
}

export enum ThemeStage {
  Light = "light",
  Auto = "auto",
  Dark = "dark"
}

export type ThemeState = {
  theme: Theme | null;
  stages: ThemeStage[];
  stageIndex: number;
};

export type FlattenedSkill = {
  name: string;
  rating: number;
};
