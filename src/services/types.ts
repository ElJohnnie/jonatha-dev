export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  request_id: string;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: any;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  avaible: Avaible;
  tags: Tags;
  date: Date;
  author: Author;
  slug: Slug;
  page: Page;
}

export interface Avaible {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Date {
  id: string;
  type: string;
  date: Date2;
}

export interface Date2 {
  start: string;
  end: any;
  time_zone: any;
}

export interface Author {
  id: string;
  type: string;
  people: People[];
}

export interface People {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: Person;
}

export interface Person {}

export interface Slug {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Page {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PageOrDatabase {}
