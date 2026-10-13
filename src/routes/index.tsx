import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection, ProjectsSection, ContactBand, github, linkedin, portfolioHead } from "@/components/portfolio";
import landscape from "@/assets/calm-landscape.jpg";
export const Route = createFileRoute("/")({
  head: () => portfolioHead('Aspiring Software Engineer', 'Meet Ghanisth Saini, a JECRC University student building websites and chatbots, exploring C++ DSA, and growing through hackathons.'),
  component: Index,
});
function Index() {
  return <><section className="hero"><img src={landscape} alt="A calm blue sea and distant mountains beneath an open morning sky" width={1920} height={1024} className="hero-image" /><div className="site-container hero-content fade-in"><div className="eyebrow"><span className="eyebrow-dot" />Aspiring software engineer</div><h1>Hi, I’m<br /><span className="text-primary">Ghanisth Saini.</span></h1><p className="hero-description">A curious mind, a love for code, and a drive to build something meaningful. Learning today. Creating for tomorrow.</p><div className="hero-actions"><Button asChild variant="portfolio" size="lg"><Link to="/projects">Explore my work <ArrowRight /></Link></Button><Button asChild variant="calm" size="lg"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div><div className="hero-socials"><a href={github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" title="GitHub"><Github size={18} /></a><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" title="LinkedIn"><Linkedin size={18} /></a><span className="h-4 border-l border-border mx-1" /><span>Always learning. Always growing.</span></div><div className="hero-note"><Code2 size={16} /> Turning curiosity into code.</div></div></section>
  <section className="stat-band" aria-label="At a glance"><div className="site-container stats"><div className="stat"><span className="stat-number">50<span className="text-primary">+</span></span><span className="stat-label">Hackathons<br />participated</span></div><div className="stat"><span className="stat-number">42</span><span className="stat-label">Hackathon<br />wins</span></div><div className="stat"><span className="stat-number">4</span><span className="stat-label">Programming<br />languages</span></div><div className="stat"><span className="stat-number text-primary">∞</span><span className="stat-label">Curiosity &<br />possibilities</span></div></div></section>
  <AboutSection /><div className="border-t border-border"><ProjectsSection /></div><ContactBand /></>;
}
