export interface Post {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  date: string;
  tags: string;
  author: string;
  avatar: string;
}

export interface ArticleElementComponent {
  post: Post;
}

export interface BlogViewProp {
  children: React.ReactNode;
}

export interface ArticleProps {
  content: any;
  tagPosts: Post[];
}
