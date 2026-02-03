// We keep the structure but remove hardcoded text where possible, or we will map it in the component.
// Actually, to use useTranslations, we need to map over keys or use a key in this object.
// Let's add a 'key' property to link to translation files.

export const demoProjectCard = [
  {
    id: 1,
    translationKey: "todo",
    tags: ["React", "Tailwind", "Typescript", "LocalStorage"],
    websiteLink: "https://kacperbartlomiejczak.github.io/rn-task-manager/",
    repoLink: "https://github.com/KacperBartlomiejczak/rn-task-manager",
    projectImg: "/project1.webp",
  },

  {
    id: 2,
    translationKey: "anime",
    tags: ["Next.js", "Jikan API", "Tailwind CSS", "Framer Motion"],
    websiteLink: "https://hello-anime-dun.vercel.app/",
    repoLink: "https://github.com/KacperBartlomiejczak/HelloAnime",
    projectImg: "/project2.webp",
  },
];
