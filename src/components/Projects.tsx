"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
    const { language } = useLanguage();

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient"
                    >
                        {language === 'fr' ? 'Projets Réalisés' : 'Featured Projects'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        {language === 'fr' ? 'Sélection de projets académiques et personnels mettant en œuvre des technologies variées.' : 'A selection of academic and personal projects showcasing various technologies.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card flex flex-col h-full group overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors duration-500 z-10" />
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                        <Layers size={48} className="text-blue-500/30" />
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 z-20">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`GitHub repository for ${project.title}`}
                                            className="p-2 bg-slate-900/90 backdrop-blur-md rounded-full text-white/70 hover:text-white cursor-pointer transition-colors shadow-lg shadow-black/50"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 py-1 px-2 bg-blue-500/10 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 mb-4">{project.subtitle}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {language === 'fr' ? project.description : (project.enDescription || project.description)}
                                </p>
                                {(project.github || project.demoUrl) ? (
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 border border-white/10 rounded-xl text-sm font-bold text-slate-300 hover:bg-white/5 hover:text-white transition-all flex items-center justify-center group/btn"
                                            >
                                                Code GitHub
                                                <Github size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg blue-glow"
                                            >
                                                {language === 'fr' ? 'Regarder Démo' : 'Live Demo'}
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                ) : (
                                    <div className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-500 flex items-center justify-center cursor-default">
                                        {language === 'fr' ? 'Projet Académique' : 'Academic Project'}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
