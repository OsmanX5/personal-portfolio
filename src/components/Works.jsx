import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import { featuredProjects } from "../Data";
import SectionHeading from "./ui/SectionHeading";
import { ArrowUpRight, GithubIcon } from "./ui/icons";

const ease = [0.22, 1, 0.36, 1];

const ProjectCard = ({ project, index }) => {
  const { title, description, tags = [], videoUrl, links = {} } = project;
  const initial = (title || "?").charAt(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease, delay: (index % 3) * 0.08 }}
      className="glass-card group flex flex-col overflow-hidden rounded-2xl"
    >
      {/* Media */}
      <div className="relative h-52 w-full overflow-hidden border-b border-white/5">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title={title}
            loading="lazy"
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-accent-2/15 to-transparent">
            <span className="font-display text-7xl font-bold text-white/20">
              {initial}
            </span>
            <span className="absolute top-3 left-3 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
              Featured · Live
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink leading-snug">
            {title}
          </h3>
          {(links.demo || links.repo) && (
            <div className="flex shrink-0 items-center gap-1.5">
              {links.repo && (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Source code"
                  className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  <GithubIcon width={17} height={17} />
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  <ArrowUpRight width={17} height={17} />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-4">
          {description}
        </p>

        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Works = () => {
  const { resume } = useResume();

  // API projects (e.g. Dev-Resume) lead; curated XR video demos follow.
  const apiProjects = (resume?.projects || []).map((p) => ({
    title: p.title,
    description: p.description,
    tags: p.technologies,
    links: p.links,
  }));
  const projects = [...apiProjects, ...featuredProjects];

  return (
    <section id="work" className={styles.section}>
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've built"
        subtitle="A mix of production platforms and immersive XR experiences — from a full-stack SaaS to aviation-grade VR training."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Works;
