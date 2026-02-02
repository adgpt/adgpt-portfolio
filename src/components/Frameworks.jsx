import { OrbitingCircles } from "./OrbitingCircles";


export function Frameworks() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Java",
    "React",
    "HTML5",
    "CSS3",
    "Nodedotjs",
    // "expressdotjs",
    "Nextdotjs",
    "Jest",
    "Git",
    "GitHub",
    "VSCode",
    "Sqlite"
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={50}>
        {/* icons can be rendered here */}
        {skills.map(
            (skill, index) => (
                <Icon
                key={index}
                // src={`https://cdn.simpleicons.org/${skill.toLowerCase()}/000000`}
                src={`assets/logos/${skill.toLowerCase()}.svg`}
                />
            )
        )}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {/* icons can be rendered here */}
        {skills.reverse().map(
            (skill, index) => (
                <Icon
                key={index}
                // src={`https://cdn.simpleicons.org/${skill.toLowerCase()}/000000`}
                src={`assets/logos/${skill.toLowerCase()}.svg`}
                />
            )
        )}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="rounded-sm hover:scale-110 duration-200" alt="Framework Icon" />
)