"use client";
// Portfolio page
import { useState, useEffect } from "react";

import Card from "@/components/Card";
import projectsJson from "@/data/projects_data.json";
import styles from "./page.module.scss";
import Button from "@/components/Button";


const Portfolio = () => {

  const [projects, setProjects] = useState<Models.Client.IProject[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await fetch("https://api.example.com/projects");
      // const data = await response.json();
      setLoading(true);
      const frontendProjects = projectsJson.frontend.filter((p: Models.Server.IProject) => p.enabled);
      const backendProjects = projectsJson.backend.filter((p: Models.Server.IProject) => p.enabled);

      const projectsData: Models.Client.IProject[] = [...frontendProjects, ...backendProjects].map((project: Models.Server.IProject) => ({
        id: project.id,
        name: project.name,
        description: project.description,
        image: project.image,
        liveDemo: project.live_demo,
        techStack: project.tech_stack,
        readme: project.readme,
      }));

      setProjects(projectsData);

    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, [])


  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.title}>Let&apos;s see the projects</h1>
      </div>
      <main className={styles.projectContainer}>

        <section className={styles.cardContainer}>
          {loading && <div className={styles.loading}>Loading...</div>}
          {!loading && projects.length === 0 && <div className={styles.noProjects}>No projects available</div>}
          {!loading && projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>
      </main>
      <section className={styles.contactSection}>
        <h2 className={styles.title}>Impressed by what you see? <Button url="/contact" text="Let's connect" variant="primary" className={styles.contactButton} /></h2>
        <p className={styles.contactText}>I&apos;d love to discuss how my skills can benefit your team!</p>
      </section>
    </>
  );
};

export default Portfolio;
