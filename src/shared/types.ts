export enum SelectedPage {
  Home = "home",
  Features = "features",
  Projects = "projects",
  ContactMe = "contactme",
}

export interface ProjectType {
  icon: JSX.Element;
  title: string;
  description: string;
}
