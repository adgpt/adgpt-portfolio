import React from "react";

const icons = [
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  {
    name: "Java",
    url: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "HTML5", url: "https://cdn.simpleicons.org/html5/E34F26" },
  {
    name: "CSS3",
    url: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", url: "https://cdn.simpleicons.org/express/000000" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Jest", url: "https://cdn.simpleicons.org/jest/C21325" },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", url: "https://cdn.simpleicons.org/github/181717" },
  {
    name: "VS Code",
    url: "https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000",
  },
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
];

const IconCloudDemo = () => {
  return (
    <div className="w-full rounded-l bg-white/5 backdrop-blur-sm p-6 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 place-items-center">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="w-14 h-14 rounded-full bg-white backdrop-blur-md shadow-md flex items-center justify-center transition-transform hover:scale-110"
        >
          <img
            src={icon.url}
            alt={icon.name}
            className="w-8 h-8 object-contain"
            title={icon.name}
          />
        </div>
      ))}
    </div>
  );
};

export default IconCloudDemo;
