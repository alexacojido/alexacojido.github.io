import icons from "./lib/icons";
import { FileText } from "lucide-react";

const frontend_skills = [
  icons.html,
  icons.css,
  icons.tailwind,
  icons.javascript,
  icons.typescript,
  icons.react,
  icons.nextjs,
];

const backend_skills = [icons.node, icons.express, icons.prisma, icons.clerk];

const database_skills = [icons.mongodb, icons.supabase];

const tools_skills = [
  icons.git,
  icons.github,
  icons.docker,
  icons.vite,
  icons.postman,
];

const projects = [
  {
    name: "Thinkboard",
    duration: "Dec 2025",
    role: "Fullstack Developer",
    description:
      "Built a collaborative idea-sharing platform using the MERN stack, featuring real-time updates.",
    skills: [
      icons.mongodb,
      icons.express,
      icons.react,
      icons.node,
      icons.tailwind,
    ],
    cover: import.meta.env.BASE_URL + "thinkboard.png",
    website: "https://github.com/alexacojido",
    repo: "https://github.com/alexacojido/meditrakk-raptaro",
    demo: "https://www.youtube.com/",
  },
  {
    name: "MediTrakk",
    duration: "Jan 2024 - Dec 2025",
    role: "Fullstack Developer",
    description:
      "A full-stack medical clinic management system built for Malibran Medical Clinic, featuring patient records, appointment scheduling, and medicine inventory tracking.",
    skills: [
      icons.nextjs,
      icons.supabase,
      icons.tailwind,
      icons.prisma,
      icons.clerk,
    ],
    cover: import.meta.env.BASE_URL + "/meditrakk.png",
    website: "https://github.com/alexacojido",
    repo: "https://github.com/alexacojido/meditrakk-raptaro",
    demo: "https://www.youtube.com/",
  },
];

const certificates = [
  "vercel-react.png",
  "zuitt-web-dev.png",
  "sololearn-html.png",
  "sololearn-js.png",
];

export default function Home() {
  return (
    <div className="flex justify-center sm:m-10">
      <main className="w-full max-w-5xl space-y-6 rounded-xl bg-base-100 p-10 shadow-2xl">
        {/* Header */}
        <section className="flex flex-col items-center justify-between space-y-4 text-center lg:flex-row lg:items-start lg:space-y-0 lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="avatar">
              <div className="w-16 rounded">
                <img
                  src={import.meta.env.BASE_URL + "acojido.jpg"}
                  alt="profile-picture"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Alexander Acojido</h1>
              <h2 className="text-xl font-medium text-base-content/70">
                Frontend Developer
              </h2>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <button className="btn btn-square btn-sm">
              <a
                href="https://github.com/alexacojido"
                target="_blank"
                rel="noreferrer"
              >
                {icons.github}
              </a>
            </button>
            <button className="btn btn-square btn-sm">
              <a
                href="https://wakatime.com/@alexacojido"
                target="_blank"
                rel="noreferrer"
              >
                {icons.wakatime}
              </a>
            </button>
            <button className="btn btn-square btn-sm">
              <a href="acojido-resume.pdf" target="_blank" rel="noreferrer">
                <div className="tooltip" data-tip="Resume">
                  <FileText className="size-4" />
                </div>
              </a>
            </button>
          </div>
        </section>

        {/* About Me */}
        <section className="space-y-2">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            massa est, sodales sit amet purus nec, placerat tempor ligula. Nam
            purus ligula, facilisis id interdum nec, imperdiet ullamcorper nunc.
            Nulla facilisi. Donec nec viverra est. Donec congue consequat
            mattis. In hac habitasse platea dictumst. Aliquam mattis eu purus at
            facilisis.
          </p>
        </section>

        {/* Skills */}
        <section className="space-y-2">
          <h2 className="text-4xl font-semibold">Skills</h2>

          <h3 className="text-xl">Frontend</h3>
          {frontend_skills.map((item, index) => (
            <div className="badge badge-ghost me-1" key={index}>
              {item}
            </div>
          ))}

          <h3 className="text-xl">Backend</h3>
          {backend_skills.map((item, index) => (
            <div className="badge badge-ghost me-1" key={index}>
              {item}
            </div>
          ))}

          <h3 className="text-xl">Database</h3>
          {database_skills.map((item, index) => (
            <div className="badge badge-ghost me-1" key={index}>
              {item}
            </div>
          ))}

          <h3 className="text-xl">Tools</h3>
          {tools_skills.map((item, index) => (
            <div className="badge badge-ghost me-1 flex-none" key={index}>
              {item}
            </div>
          ))}
        </section>

        {/* Work Experience */}
        <section></section>

        {/* Projects */}
        <section>
          <h2 className="mb-4 text-4xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, index) => (
              <div
                className="card w-auto rounded-none bg-base-100 shadow-xl"
                key={index}
              >
                <figure>
                  <label htmlFor={`modal-${index}`} className="cursor-pointer">
                    <img src={item.cover} alt="project-cover" />
                  </label>
                </figure>

                <input
                  type="checkbox"
                  id={`modal-${index}`}
                  className="modal-toggle"
                />

                <div className="modal" role="dialog">
                  <div className="modal-box max-w-[90%]">
                    <figure>
                      <img src={item.cover} alt="project-cover" />
                    </figure>
                  </div>

                  <label className="modal-backdrop" htmlFor={`modal-${index}`}>
                    Close
                  </label>
                </div>

                <div className="card-body">
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>

                      <span className="block text-sm text-base-content/70">
                        {item.role}
                      </span>
                      <span className="block text-sm text-base-content/70">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* <div className="flex gap-1">
                    <button className="btn btn-circle btn-sm">
                      <a href={item.website} target="_blank" rel="noreferrer">
                        <div className="tooltip" data-tip="Website">
                          <Globe className="size-4 text-blue-500" />
                        </div>
                      </a>
                    </button>

                    <button className="btn btn-circle btn-sm">
                      <a href={item.repo} target="_blank" rel="noreferrer">
                        {icons.github}
                      </a>
                    </button>
                    <button className="btn btn-circle btn-sm">
                      <a href={item.demo} target="_blank" rel="noreferrer">
                        {icons.youtube}
                      </a>
                    </button>
                  </div> */}

                  <p>{item.description}</p>
                  <div className="card-actions">
                    {item.skills.map((skill, index) => (
                      <div className="badge badge-ghost gap-1" key={index}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-2">
          <h2 className="mb-4 text-4xl font-semibold">Education</h2>
          <div className="flex flex-row gap-4">
            <div className="avatar hidden min-[455px]:block">
              <div className="object w-16 rounded">
                <img
                  src={import.meta.env.BASE_URL + "sti-logo.png"}
                  alt="sti-logo"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Science
              </h3>
              <span className="block text-sm text-base-content/70">
                STI College Munoz Edsa
              </span>
              <span className="block text-sm text-base-content/70">
                Aug 2022 - Jun 2026
              </span>
            </div>
          </div>
          <p>
            Coursework included web development, databases, and software
            engineering; built multiple full-stack projects.
          </p>
          <div className="space-x-1">
            <span className="badge badge-ghost">{icons.html}</span>
            <span className="badge badge-ghost">{icons.css}</span>
            <span className="badge badge-ghost">{icons.javascript}</span>
          </div>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="mb-4 text-4xl font-semibold">Certificates</h2>
          <div className="carousel aspect-video w-full">
            {certificates.map((item, index) => (
              <div
                key={index}
                id={`slide-${index}`}
                className="carousel-item w-full"
              >
                <img src={item} className="w-full" />
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center gap-2 py-2">
            {certificates.map((_, index) => (
              <a key={index} href={`#slide-${index}`} className="btn btn-xs">
                {index + 1}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
