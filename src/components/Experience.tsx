import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Tech Company Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Sekarang",
    description: [
      "Memimpin tim development dalam membangun aplikasi web skala enterprise",
      "Mengimplementasikan CI/CD pipeline dan meningkatkan efisiensi deployment hingga 40%",
      "Mentoring junior developers dan melakukan code review",
    ],
    tech: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    company: "Digital Agency Ltd.",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: [
      "Mengembangkan website dan aplikasi untuk berbagai klien dari berbagai industri",
      "Berkolaborasi dengan tim design untuk mengimplementasikan UI/UX yang optimal",
      "Mengoptimasi performa website dan meningkatkan SEO score",
    ],
    tech: ["React", "Vue.js", "PHP", "MySQL"],
  },
  {
    company: "Startup Innovation",
    position: "Frontend Developer",
    period: "2019 - 2020",
    description: [
      "Membangun dan maintain frontend aplikasi web menggunakan React dan TypeScript",
      "Implementasi responsive design dan cross-browser compatibility",
      "Integrasi dengan REST API dan GraphQL",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "2018 - 2019",
    description: [
      "Mengembangkan website untuk berbagai klien lokal dan internasional",
      "Desain dan development dari konsep hingga deployment",
      "Maintenance dan support untuk klien existing",
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Pengalaman</h2>
            <p className="text-lg text-muted-foreground">
              Journey profesional saya dalam dunia teknologi
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-card-hover border-border/50"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
