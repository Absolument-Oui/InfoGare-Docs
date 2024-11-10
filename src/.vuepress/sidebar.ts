import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "InfoGare Creator",
      icon: "train",
      prefix: "infogare-creator/",
      children: "structure",
    },
    {
      text: "InfoGare Dev",
      icon: "laptop-code",
      prefix: "infogare-dev/",
      children: "structure",
    },
  ],
});
