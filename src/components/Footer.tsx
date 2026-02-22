import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, href: import.meta.env.VITE_GITHUB_URL || '#', label: "GitHub" },
    { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL || '#', label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground font-body text-sm">
          © {year} · Built with craft and care
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
