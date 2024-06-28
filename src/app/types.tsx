
export type SiteURLType = {
  labels: Array<string>,
  urls: Array<string>,
};

export type ExperienceType = {
  key: number,
  year: string,
  title: string,
  affiliationName: string,
  description: string
};

export type SkillType = {
  key: number,
  startDate: string,
  endDate: string,
  iconName: string,
  description: string
};

export type ExperiencesType = {
  [key: string]: Array<ExperienceType>,

};