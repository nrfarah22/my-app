import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-hero opacity-10" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 animate-fade-in">
          <div className="flex-1 text-left space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Halo, saya</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Farah Nur Izzati</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
                QA Engineer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Saya seorang QA Engineer yang passionate dalam memastikan
              kualitas dan keandalan produk digital. Dengan pemahaman terhadap
              pengembangan frontend dan backend, saya mampu menguji,
              menganalisis, serta memberikan masukan untuk menciptakan
              pengalaman pengguna yang optimal dan bebas dari bug.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="gradient-hero"
                onClick={() => scrollToSection("projects")}
              >
                Lihat Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/nrfarah22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/farah-izzati-74a538310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:raarznrzt29@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/profile.webp"
              alt="Farah Nur Izzati"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-lg border border-accent/30"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
