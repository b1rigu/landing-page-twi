"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { appData } from "./consts";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="text-xl font-bold text-blue-600">{appData.name}</div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {["Home", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm font-medium transition-colors ${
                        activeSection === item.toLowerCase()
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-blue-600"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href={appData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href={appData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={`mailto:${appData.email}`}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 pt-24 mx-auto">
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-64 mb-8 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
              <img
                src={appData.profileImage}
                alt="Profile"
                className="object-cover"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-slate-800 md:text-5xl lg:text-6xl">
              {appData.name}
            </h1>
            <h2 className="mb-6 text-xl font-medium text-blue-600 md:text-2xl">
              {appData.hero.title}
            </h2>
            <p className="max-w-2xl mb-8 text-slate-600">
              {appData.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-20 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
              Tech Stack that I use
            </h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-4 w-full max-w-4xl mx-auto"
          >
            {appData.techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-8 mb-2 object-contain"
                />
                <span className="text-sm font-medium text-slate-700">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-slate-600"
          >
            Don't see your favorite tech here? Feel free to reach out! I am fast
            at learning new things.
          </motion.p>
        </section>

        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
              Projects
            </h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects I am proud of. Check out my
              GitHub for more.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {appData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-800">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.code && (
                      <Link
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Link>
                    )}

                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Site
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link
                href={appData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
              Experience
            </h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative border-l-2 border-blue-200 pl-8 ml-4"
            >
              {appData.experiences.map((job, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative mb-12"
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-800">
                        {job.role}
                      </h3>
                      <div className="flex items-center text-blue-600 mb-2 flex-wrap">
                        <span className="text-sm font-medium">
                          {job.company}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{job.period}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <p className="text-slate-600">{job.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
              Get In Touch
            </h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="mb-4 text-xl font-bold text-slate-800">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700">Email</p>
                    <Link
                      href={`mailto:${appData.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {appData.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="w-5 h-5 mt-1 mr-3 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700">LinkedIn</p>
                    <Link
                      href={appData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {appData.linkedinLabel}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="w-5 h-5 mt-1 mr-3 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-700">GitHub</p>
                    <Link
                      href={appData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {appData.githubLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 mt-20 bg-slate-800 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold text-blue-400">{appData.name}</p>
              <p className="text-sm text-slate-400">Full Stack Developer</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href={appData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href={appData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href={`mailto:${appData.email}`}
                className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} {appData.name}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
