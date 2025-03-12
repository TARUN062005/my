"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const [filter, setFilter] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "A full-featured e-commerce platform with product management.",
      description:
      "A Semi full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlAyNU8UhmDDy1XUnrjh2BSQlUO8R-s8pRw&s",
      tags: ["Typescript", "Java Script", "Css", "React"],
      category: "web",
      features: [
       "Inventory management system",
        "Real-time stock tracking",
        "Currencies Exchange Value",
        "Product search and filtering",
        "User authentication",
        "Wishlist and favorites",
        "Order management dashboard",
        "Customer analytics",
      ],
      demoLink: "https://shopnextbysai.vercel.app/",
      githubLink: "#",
      fullDescription:
      "A Semi full-featured e-commerce platform with product management, cart functionality, and payment processing.This e-commerce platform provides businesses with a complete solution for selling products online. Built with React and TypeScript, it includes features such as inventory management, real-time stock tracking, product search and filtering, user authentication, and order management. The platform also offers customer analytics and insights to help businesses make data-driven decisions.",
    },
    {
      id: 2,
      title: "Skill-Swap",
      shortDescription:  "A platform for exchanging skills and services with others in the community.",
      description: "Skill-Swap is a peer-to-peer skill-sharing platform that enables users to learn and teach skills by exchanging knowledge with each other." +
        "Skill-Swap eliminates the barrier of cost by allowing direct exchanges between users, fostering a community-driven learning ecosystem where people can grow together.",
      image: "https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU=",
      tags: ["Html", "CSS", "MongoDB", "Javascript", "Node.js", "Express"],
      category: "web",
      features: [
        "Real-time collaboration",
        "Task assignment",
        "Communication tools",
        "Progress tracking",
        " File attachments",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
           " Skill-Swap is a peer-to-peer skill-sharing platform that enables users to learn and teach skills by exchanging knowledge with each other. Whether someone is an expert in coding, graphic design, marketing, language learning, music, or fitness, they can offer their skills in exchange for learning something new from another user.",
    },
    {
      id: 3,
      title: "AI CODE-EDITOR",
      shortDescription: "An AI-powered code editor that helps developers write better code faster.",
      description:"An AI-powered code editor that helps developers write better code faster.",
      image:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/59/88/4d/59884d4d-60fd-75ae-717c-9106ae600592/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.png",
      tags: ["ReactJs", "NodeJS", "Gpt-4", "VS Code"],
      category: "ai",
      features: [
        "AI-powered code completion",
        "Real-time collaboration",
        "Code explanation",
        "Code generation",
        "Chat and communication",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
      "🔍 Introduction\nIn today’s fast-paced world of software development, coding is no longer a solo journey. Developers work in teams, contributing to projects from different locations, debugging errors, and reviewing each other’s code. But switching between VS Code, GitHub, Slack, and debugging tools is time-consuming and inefficient.\n\n" +
      "💡 What if there was an all-in-one solution?\n\n" +
      "Welcome to our AI-powered collaborative code editor, an advanced development environment that:\n" +
      "✔ Fixes coding errors automatically using AI.\n" +
      "✔ Explains code in simple terms for better understanding.\n" +
      "✔ Generates code from scratch based on user instructions.\n" +
      "✔ Supports real-time collaboration like Google Docs but for coding!\n" +
      "✔ Has built-in chat so teams can communicate without switching apps.\n" +
      "✔ Works like GitHub pull/push, allowing code sharing and version control.\n\n" +
      "This editor combines AI intelligence, real-time teamwork, and cloud-based coding into one powerful tool!",
    },
    {
      id: 4,
      title: "Face-Detection-App",
      shortDescription: "A web application that detects faces in images using machine learning.",
      description: "A web application that detects faces in images using machine learning.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFYAwqCnVPChg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691045078079?e=2147483647&v=beta&t=xrwkrzF7rrtdri-Z_2ZyeLQF5jMQ3dfpp_-4Re8yqr0",
      tags: ["Python", "Machine Learning", "Django"],
      category: "systems",
      features:["Face analyzing", "Motion identification", "Emotion detection", "24 hour monitoring", "AI help"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
      "This face detection app uses a pre-trained machine learning model to detect faces in images. Users can use the app to upload images, and the model will highlight the faces with bounding boxes. It also provides the option to download the image with the detected faces highlighted.",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "desktop", name: "Desktop Apps" },
    { id: "systems", name: "Systems Programming" },
    { id: "ai", name: "AI & Machine Learning" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

