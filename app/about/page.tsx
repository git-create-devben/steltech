import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Target, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-space-grotesk">StelTech</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors border-b-2 border-primary pb-1"
              >
                About
              </a>
              <a href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Courses
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center">
              <Button className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-secondary-foreground rounded-full px-6 shadow-lg">
                Login/Register
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
        <div className="absolute top-20 right-20 text-primary/20 animate-pulse">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-20 text-secondary/20 animate-bounce">
          <Lightbulb className="w-6 h-6" />
        </div>

        <div className="container mx-auto px-4 text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold font-space-grotesk">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">StelTech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation through innovative coding education designed specifically for kids
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  StelTech was founded with a simple yet powerful vision: to make coding education accessible, fun, and
                  engaging for children of all ages. As a passionate educator and technology enthusiast, I recognized
                  the growing need for quality programming education that speaks to young minds.
                </p>
                <p>
                  What started as a small initiative to teach neighborhood kids has grown into a comprehensive online
                  platform that serves families worldwide. Every course, every lesson, and every interaction is
                  carefully crafted to ensure children not only learn to code but also develop critical thinking,
                  creativity, and problem-solving skills.
                </p>
                <p>
                  At StelTech, we believe that every child has the potential to be a creator, innovator, and
                  problem-solver. Our mission is to provide them with the tools and knowledge they need to shape the
                  digital future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Founder teaching kids"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at StelTech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Child-Centered Learning",
                description:
                  "Every lesson is designed with children's natural curiosity and learning patterns in mind.",
                icon: <Heart className="w-8 h-8 text-primary" />,
                gradient: "from-primary/10 to-secondary/10",
              },
              {
                title: "Quality Education",
                description: "We maintain the highest standards in curriculum design and educational delivery.",
                icon: <Award className="w-8 h-8 text-primary" />,
                gradient: "from-secondary/10 to-accent/10",
              },
              {
                title: "Innovation",
                description: "We continuously evolve our teaching methods to stay current with technology trends.",
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                gradient: "from-accent/10 to-primary/10",
              },
              {
                title: "Accessibility",
                description: "Making quality coding education available to children from all backgrounds.",
                icon: <Users className="w-8 h-8 text-primary" />,
                gradient: "from-primary/10 to-accent/10",
              },
              {
                title: "Safety First",
                description: "Providing a secure, monitored environment where children can learn and explore safely.",
                icon: <GraduationCap className="w-8 h-8 text-primary" />,
                gradient: "from-secondary/10 to-primary/10",
              },
              {
                title: "Future-Ready",
                description: "Preparing children with skills that will serve them in an increasingly digital world.",
                icon: <Target className="w-8 h-8 text-primary" />,
                gradient: "from-accent/10 to-secondary/10",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-space-grotesk">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-primary/95 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Ready to Join Our Community?</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Become part of the StelTech family and give your child the gift of coding education.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold font-space-grotesk">StelTech</span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              &copy; 2024 StelTech. Empowering kids through coding education.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
