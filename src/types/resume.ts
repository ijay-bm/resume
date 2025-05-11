export enum DocumentStyle {
  ResumeA = "resume-a",
  ResumeB = "resume-b",
  CurriculumVitaeA = "curriculum-vitae-a"
}

export enum ToolStyle {
  Hidden = "hidden",
  ToolsA = "tools-a",
  ToolsB = "tools-b"
}

export type Certification = {
  type: string;
  monthYear: string;
  title: string;
  issuer: string;
  hidden: boolean;
};

export type Experience = {
  name: string;
  shortName?: string;
  rating: number;
};

export type SubSkill = {
  name: string;
  shortName: string;
  rating: number;
  experiences: Experience[];
};

export type Skill = {
  name: string;
  shortName?: string;
  rating: number;
  subSkills?: SubSkill[];
  experiences?: Experience[];
};

export type OngoingCertification = {
  title: string;
  shortTitle: string;
  platform: string;
  description: string;
  hidden?: boolean;
};
