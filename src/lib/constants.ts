// any item set to 'undefined' is removed it from the site

type PageMetadata = {
  title: string,
  shortDescription: string,
  longDescription: string
}

type SiteDetails = {
  name: string,
  rootUrl: string,
  shortDescription: string,
  longDescription: string,
}

type SocialMediaLinks = {
  github: string,
  twitter: string,
  linkedin: string
}

type GlobalConstants = {
  site: SiteDetails,
  social: SocialMediaLinks,
  profileImage: string,
  articles: PageMetadata,
  projects: PageMetadata,
  menu: Record<string, string>
}


export const GLOBAL: GlobalConstants = {
  site: {
    name: "Vim Pirate",
    rootUrl: "https://vimpirate.com",
    shortDescription: "Ahoy Matey! Welcome aboard my corner of the internet.",
    longDescription: "David Paul Grahams personal website, articles, and portfolio."
  },
  social: {
    github: "https://github.com/vimpirate",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/dpgraham4401"
  },
  articles: {
    title: "articles",
    shortDescription: "Practical wisdom, unfiltered thoughts, and hot takes.",
    longDescription: "Web development, tech trends, and the occasional programming mishap."
  },
  projects: {
    title: "Projects",
    shortDescription: "A list of projects I've worked on and developer tools.",
    longDescription: "All of my projects, ranging from dotfiles, static websites, full-blown web applications, CLIs, and more."
  },
  profileImage: "img/chico_cropped.webp",
  menu: {
    home: "/",
    projects: "/projects",
    articles: "/articles"
  }
};
