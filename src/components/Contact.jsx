import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import SectionHeading from "./ui/SectionHeading";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
} from "./ui/icons";

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  const { resume } = useResume();
  const p = resume?.profile || {};
  const social = p.social || {};

  const methods = [
    p.email && {
      icon: <MailIcon />,
      label: "Email",
      value: p.email,
      href: `mailto:${p.email}`,
    },
    p.phone && {
      icon: <PhoneIcon />,
      label: "Phone",
      value: p.phone,
      href: `tel:${p.phone.replace(/\s/g, "")}`,
    },
    p.location && {
      icon: <MapPinIcon />,
      label: "Location",
      value: p.location,
    },
  ].filter(Boolean);

  const socials = [
    social.github && { icon: <GithubIcon />, label: "GitHub", href: social.github },
    social.linkedin && {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      href: social.linkedin,
    },
    social.portfolio && {
      icon: <GlobeIcon />,
      label: "Website",
      href: social.portfolio,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className={styles.section}>
      <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Invitation */}
          <div>
            <SectionHeading eyebrow="Contact" title="Let's build something" />
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Have a role, a project or an idea worth shipping? I'm open to
              opportunities in backend, full-stack and XR. I usually reply within
              a day.
            </p>

            {p.email && (
              <motion.a
                href={`mailto:${p.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-white shadow-[0_14px_36px_-10px_rgba(10,132,255,0.9)]"
              >
                <MailIcon width={18} height={18} />
                Say hello
              </motion.a>
            )}

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl glass text-muted transition-colors hover:text-ink hover:border-accent/50"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact methods */}
          <div className="space-y-3">
            {methods.map((m, i) => {
              const inner = (
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-2/20 text-accent">
                    {m.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-faint">
                      {m.label}
                    </p>
                    <p className="truncate text-ink">{m.value}</p>
                  </div>
                </motion.div>
              );
              return m.href ? (
                <a key={m.label} href={m.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={m.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
