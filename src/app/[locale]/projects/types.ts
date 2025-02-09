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

export interface ProjectElementComponent {
  project: Projects;
}

export interface ProjectViewProp {
  children: React.ReactNode;
}

export interface ProjectProps {
  content: any;
}

export interface ProjectsControllerProps {
  projects?: Projects[];
}
