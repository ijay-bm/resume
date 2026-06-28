export enum DocumentStyle {
  TypeA = "type-a",
  TypeB = "type-b",
  TypeC = "type-c"
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
  shortTitle?: string;
  issuer: string;
  hidden: boolean;
};

export type SkillNode = {
  name: string;
  shortName?: string;
  rating: number;
  includeInSummary?: boolean;
  children?: SkillNode[];
};
