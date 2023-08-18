declare module 'group-data' {
  type Skill =
    | 'Adobe'
    | 'Android'
    | 'Angular'
    | 'Apache'
    | 'Aws'
    | 'Ec2'
    | 'Babel'
    | 'BootStrap'
    | 'Cpp'
    | 'C#'
    | 'Css'
    | 'Diango'
    | 'Docker'
    | 'Electron'
    | 'Eslint'
    | 'Figma'
    | 'Firebase'
    | 'Flask'
    | 'Flutter'
    | 'Gatsby'
    | 'Git'
    | 'Github'
    | 'Gitlab'
    | 'Go'
    | 'GoogleAnalytics'
    | 'Graphql'
    | 'Heroku'
    | 'Html'
    | 'Illustrator'
    | 'Insomnia'
    | 'Java'
    | 'JavaScript'
    | 'Jest'
    | 'Jira'
    | 'Jquery'
    | 'Kotlin'
    | 'Kubernetes'
    | 'Laravel'
    | 'Linux'
    | 'MongoDb'
    | 'Mui'
    | 'MySql'
    | 'Nest'
    | 'Netlify'
    | 'Next'
    | 'NodeJs'
    | 'Npm'
    | 'OAuth'
    | 'OpenAi'
    | 'Oracle'
    | 'Photoshop'
    | 'Php'
    | 'PostgreSql'
    | 'Postman'
    | 'prettier'
    | 'Prisma'
    | 'Pug'
    | 'Pwa'
    | 'Python'
    | 'Rails'
    | 'React'
    | 'ReactQuery'
    | 'Redis'
    | 'Redux'
    | 'Ruby'
    | 'Rust'
    | 'Scss'
    | 'Spring'
    | 'Svelte'
    | 'Swift'
    | 'Tailwind'
    | 'TypeScript'
    | 'Vim'
    | 'Vite'
    | 'VsCode'
    | 'Vue'
    | 'Webpack'
    | 'Wordpress'
    | 'Xd';
  type Position =
    | '프론트엔드'
    | '백엔드'
    | '디자이너'
    | '기획자'
    | '마케팅'
    | 'PM'
    | '퍼블리셔'
    | '풀스택'
    | 'QA'
    | '전체';
  type GropType = 'study' | 'project';

  interface GroupData {
    _id: string;
    title: string;
    description: string;
    author: {
      _id: string;
      nickName: string;
    };
    imageUrl: string;
    type: GropType;
    skills: Skill[];
    position: Position[];
    location: string;
    maxMembers: number;
    currentMembers: {
      _id: string;
      nickName: string;
    }[];
    createdAt: string;
    dueDate: string;
    wishCount: number;
    viewCount: number;
  }
  interface CardData {
    title: string;
    imageUrl: string;
    type: GropType;
    skills: Skill[];
    position: Position[];
    dueDate?: string;
    wishCount: number;
    viewCount: number;
  }
}
