import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Website Rental Mobil",
    description: "Platform rental mobil modern dengan fitur lengkap termasuk sistem pemesanan online, manajemen armada kendaraan,, serta dashboard admin untuk pengelolaan operasional yang efisien.",
    tech: ["HTML", "CSS", "Bootstrap", "Laravel"],
    image: "/rental-mobil.png",
    github: "https://github.com/szuryanailham/MPTI_Rental.git",
    demo: "https://cahayawaskithajogja.com/",
  },
  {
    title: "Analisis Kualitas Web Prodi & Fakultas Agama Islam UAD",
    description: "Analisis performa, aksesibilitas, dan kualitas website untuk meningkatkan kualitas layanan digital fakultas.",
    tech: ["Google PageSpeed Insights", "Google Analytics", "Pingdom"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Game Find the Different (Game Artist)",
    description: "Aplikasi game anak-anak interaktif mencari perbedaan pada gambar.",
    tech: ["Figma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://www.figma.com/design/ZGNzuwrcS9r3QKQqQJdKKO/Untitled?node-id=0-1&p=f&t=vPi0LagDJXGUO1bR-0",
    demo: "https://www.figma.com/proto/ZGNzuwrcS9r3QKQqQJdKKO/Untitled?node-id=48-4&p=f&t=rUiupxtXhr4xc7YP-1&scaling=contain&content-scaling=fixed&page-id=48%3A3",
  },
  {
    title: "UI Website Zoo",
    description: "Desain website zoo interaktif yang menampilkan informasi hewan, jadwal pertunjukan, dan layanan tiket online dengan tampilan ramah pengguna dan ilustrasi menarik.",
    tech: ["Figma"],
    image: "/ui-zoo.png",
    github: "https://www.figma.com/design/ptBMjN1QNJtisuRIl4PBMf/Animal-Planet-Zoo?node-id=0-1&p=f&t=PetAeGSfYNlzEDt6-0",
    demo: "https://www.figma.com/proto/ptBMjN1QNJtisuRIl4PBMf/Animal-Planet-Zoo?node-id=0-3&starting-point-node-id=0%3A3&t=POutQL54wvMMB2OQ-1",
  },
  {
    title: "Portal Berita",
    description: "Website portal berita interaktif dengan sistem kategori, pencarian artikel, dan tampilan responsif yang informatif.",
    tech: ["JavaScript", "Express.js"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    github: "https://github.com/nrfarah22/portal_berita.git",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-border/50"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gradient-hero" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
