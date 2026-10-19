// Everything the site says lives here. Add to these lists and the page
// picks it up; an empty list hides its section.

export const profile = {
  name: "Farino Joshua",
  role: "Software engineer",
  location: "Jakarta",
  bio: [
    "I build web applications, mostly with Go, TypeScript and Python.",
    "This site is new. I'll add to it as I go.",
  ],
};

export type Link = { label: string; href: string };

export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/farinojoshua" },
];

export type Project = {
  name: string;
  description: string;
  href?: string;
  year?: string;
};

export const projects: Project[] = [];

export type Job = {
  company: string;
  title: string;
  period: string;
};

export const experience: Job[] = [];
