import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart, Lightbulb } from "lucide-react"

export default function ContactPage() {
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
              <a href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Courses
              </a>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors border-b-2 border-primary pb-1"
              >
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
            Get In{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Want to discuss your child's learning journey? I'm here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-space-grotesk">Send Me a Message</h2>
                <p className="text-muted-foreground">
                  I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Parent's Name</label>
                        <Input placeholder="Your full name" className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input type="email" placeholder="your.email@example.com" className="rounded-lg" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input placeholder="(555) 123-4567" className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Child's Age</label>
                        <Input placeholder="e.g., 8 years old" className="rounded-lg" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="What would you like to discuss?" className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="Tell me about your child's interests, any questions about courses, or how I can help..."
                        className="rounded-lg min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-space-grotesk">Let's Connect</h2>
                <p className="text-muted-foreground">
                  I'm always excited to meet new families and discuss how StelTech can help your child discover the joy
                  of coding.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-primary" />,
                    title: "Email Me",
                    content: "hello@steltech.com",
                    description: "I typically respond within 24 hours",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-primary" />,
                    title: "Call Me",
                    content: "(555) 123-STEM",
                    description: "Available Mon-Fri, 9AM-6PM EST",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-primary" />,
                    title: "Location",
                    content: "Online Worldwide",
                    description: "Serving families globally",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-primary" />,
                    title: "Response Time",
                    content: "Within 24 hours",
                    description: "Usually much faster!",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-foreground font-medium">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-space-grotesk">Quick Questions?</h3>
                  <p className="text-muted-foreground">
                    For quick questions about courses, pricing, or enrollment, feel free to reach out directly!
                  </p>
                  <Button variant="outline" className="rounded-full bg-transparent">
                    Start a Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some common questions parents ask about StelTech
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What age groups do you teach?",
                answer:
                  "I offer courses for children ages 6-16, with age-appropriate curriculum designed for different developmental stages.",
              },
              {
                question: "Do kids need any prior experience?",
                answer:
                  "Not at all! Our beginner courses start from the very basics and gradually build up skills and confidence.",
              },
              {
                question: "How are classes conducted?",
                answer:
                  "All classes are conducted online through interactive video sessions with hands-on coding exercises and projects.",
              },
              {
                question: "What if my child needs extra help?",
                answer:
                  "I provide personalized attention and additional support sessions to ensure every child succeeds at their own pace.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
