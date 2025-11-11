import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Berpengalaman dalam React.js, Laravel, dan TypeScript, dengan fokus pada pengujian fungsionalitas dan kualitas aplikasi web modern.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Mahir dalam UI/UX design dengan tools seperti Figma dan Adobe Creative Suite",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Fokus pada analisis performa dan identifikasi bottleneck menggunakan tools seperti Google Lighthouse dan PageSpeed Insights, guna menjaga kecepatan serta stabilitas aplikasi.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Pengalaman bekerja dalam tim dengan metodologi Agile dan Scrum",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Tentang Saya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-card-hover border-border/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Dengan lebih dari X tahun pengalaman dalam industri teknologi, saya telah bekerja dengan berbagai klien 
              dan perusahaan untuk mengembangkan aplikasi web yang inovatif dan user-friendly. Saya percaya bahwa 
              kombinasi antara design yang baik dan code yang clean adalah kunci sukses sebuah produk digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
