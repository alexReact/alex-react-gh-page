type MainMenuType = {
  title: string;
  link: string;
  subMenu?: Array<{ title: string; link: string }>;
};

export const mainMenu: Array<MainMenuType> = [
  { link: "/", title: "Main" },
  {
    link: "/functions",
    title: "Functions",
    subMenu: [{ link: "/functions/anagram", title: "Anagram" }],
  },
  { link: "/english", title: "English" },
  { link: "/about", title: "About" },
];
