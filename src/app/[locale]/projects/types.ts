export interface Projects {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  date: string;
  tags: string;
  author: string;
  avatar: string;
}

export interface ProjectsElementComponent {
  post: Projects;
}

export interface ProjectsViewProp {
  children: React.ReactNode;
}

export interface ProjectsProps {
  content: any;
  tagProjects?: Projects[];
}
