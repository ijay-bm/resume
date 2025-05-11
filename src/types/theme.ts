export enum Theme {
  Light = "light",
  Dark = "dark"
}

export enum ThemeStage {
  Light = "light",
  Auto = "auto",
  Dark = "dark"
}

export interface ThemeState {
  theme: Theme | null;
  stages: ThemeStage[];
  stageIndex: number;
}
