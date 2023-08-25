declare module 'author-data' {
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
  type Location =
    | '전국'
    | '서울'
    | '부산'
    | '대구'
    | '인천'
    | '광주'
    | '대전'
    | '울산'
    | '강원'
    | '경기'
    | '경남'
    | '경북'
    | '전남'
    | '전북'
    | '충남'
    | '충북'
    | '제주';

  type Link = {
    gitHub: string;
    blog: string;
  };

  interface AuthorData {
    email: string;
    nickname: string;
    password: string;
    profileImage?: string;
    overview?: string;
    skills: string[];
    links: {
      gitHub?: string;
      blog?: string;
    };
    createdGroup: typeof Schema.Types.ObjectId;
    wishList: (typeof Schema.Types.ObjectId)[];
    endGroup: (typeof Schema.Types.ObjectId)[];
    ongoingGroup: (typeof Schema.Types.ObjectId)[];
    joinRequestGroup: (typeof Schema.Types.ObjectId)[];

    notifications: (typeof Schema.Types.ObjectId)[];
  }
}
