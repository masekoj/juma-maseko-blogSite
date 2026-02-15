import { YouTubeIcon, XTwitterIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

const socials = [
  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com" },
  { icon: XTwitterIcon, label: "Twitter/X", href: "https://x.com" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juma Maseko. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-muted-foreground/50 transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <span className="pill text-xs">Built with Go Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
