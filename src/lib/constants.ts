// any item set to 'undefined' is removed it from the site

interface Described {
  shortDescription: string,
  longDescription: string
}

interface PageMetadata extends Described {
  title: string,
}

interface SiteDetails extends Described {
  name: string,
  rootUrl: string,
}

interface SocialMediaLinks {
  github: string,
  twitter: string,
  linkedin: string
}

interface GlobalConstants {
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
    github: "https://github.com/dpgraham4401",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/dpgraham4401"
  },
  articles: {
    title: "Articles",
    shortDescription: "Unfiltered thoughts, and not-so-hot takes.",
    longDescription: "Web development, tech trends, and the occasional programming mishap."
  },
  projects: {
    title: "Projects",
    shortDescription: "A list of projects I've worked on.",
    longDescription: "All of my projects, ranging from dotfiles, static websites, full-blown web applications, CLIs, and more."
  },
  profileImage: "img/chico_cropped.webp",
  menu: {
    home: "/",
    projects: "/projects",
    articles: "/articles"
  }
};
