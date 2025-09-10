import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Star,
  Clock,
  Users,
  Code,
  Calculator,
  Globe,
  BookOpen,
  Gamepad2,
  Palette,
  Lightbulb,
  Rocket,
} from "lucide-react"

export default function CoursesPage() {
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
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a
                href="/courses"
                className="text-foreground hover:text-primary transition-colors border-b-2 border-primary pb-1"
              >
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
        <div className="absolute top-20 right-20 text-primary/20 animate-bounce">
          <Rocket className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-20 text-secondary/20 animate-pulse">
          <Lightbulb className="w-6 h-6" />
        </div>

        <div className="container mx-auto px-4 text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold font-space-grotesk">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive coding bootcamps designed to take your child from beginner to confident programmer
          </p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border-secondary/30">
              Most Popular
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Featured Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Coding Fundamentals for Kids",
                description: "Perfect introduction to programming concepts using visual blocks and simple syntax.",
                lessons: "42 Lessons",
                duration: "8 Weeks",
                students: "1,200+",
                rating: 5,
                price: "$99",
                gradient: "from-green-400 to-green-600",
                icon: <Code className="w-6 h-6" />,
                image: "/placeholder.svg?height=200&width=300",
                level: "Beginner",
                age: "6-10 years",
              },
              {
                title: "Web Development Bootcamp",
                description: "Learn HTML, CSS, and JavaScript to build real websites and interactive projects.",
                lessons: "56 Lessons",
                duration: "12 Weeks",
                students: "850+",
                rating: 5,
                price: "$149",
                gradient: "from-blue-400 to-blue-600",
                icon: <Globe className="w-6 h-6" />,
                image: "/placeholder.svg?height=200&width=300",
                level: "Intermediate",
                age: "10-14 years",
              },
              {
                title: "Game Development with Scratch",
                description: "Create amazing games and animations using Scratch programming language.",
                lessons: "35 Lessons",
                duration: "6 Weeks",
                students: "950+",
                rating: 5,
                price: "$79",
                gradient: "from-purple-400 to-purple-600",
                icon: <Gamepad2 className="w-6 h-6" />,
                image: "/placeholder.svg?height=200&width=300",
                level: "Beginner",
                age: "7-12 years",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className={`bg-gradient-to-br ${course.gradient} h-48 flex items-center justify-center relative`}
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{course.level}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{course.age}</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(5.0)</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">All Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our complete curriculum designed for different age groups and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Math Logic & Problem Solving",
                lessons: "28 Lessons",
                rating: 5,
                gradient: "from-yellow-400 to-orange-500",
                icon: <Calculator className="w-6 h-6" />,
                price: "$69",
                level: "Beginner",
              },
              {
                title: "Digital Art & Design",
                lessons: "32 Lessons",
                rating: 5,
                gradient: "from-pink-400 to-rose-500",
                icon: <Palette className="w-6 h-6" />,
                price: "$89",
                level: "Beginner",
              },
              {
                title: "Python Programming",
                lessons: "45 Lessons",
                rating: 5,
                gradient: "from-cyan-400 to-blue-500",
                icon: <Code className="w-6 h-6" />,
                price: "$129",
                level: "Intermediate",
              },
              {
                title: "Mobile App Development",
                lessons: "38 Lessons",
                rating: 5,
                gradient: "from-indigo-400 to-purple-500",
                icon: <Rocket className="w-6 h-6" />,
                price: "$159",
                level: "Advanced",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className={`bg-gradient-to-br ${course.gradient} h-32 flex items-center justify-center relative`}
                  >
                    <div className="text-white">{course.icon}</div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-gray-800 text-xs">{course.level}</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">{course.price}</div>
                    <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-primary/95 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Start Your Child's Coding Journey Today</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Join thousands of kids who are already learning to code with StelTech. Choose the perfect course for your
            child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Free Trial
            </Button>
          </div>
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
