"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Cpu, Brain, Wrench, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const skillCategories = [
    { name: "Langages", icon: <Code2 />, skills: portfolioData.skills.languages },
    { name: "Front-end", icon: <Layout />, skills: portfolioData.skills.frontend },
    { name: "Back-end & DB", icon: <Database />, skills: portfolioData.skills.backend },
    { name: "IA & Data", icon: <Brain />, skills: portfolioData.skills.ia },
    { name: "Électronique & Robotique", icon: <Cpu />, skills: portfolioData.skills.robotics },
    { name: "Outils & DevOps", icon: <Wrench />, skills: portfolioData.skills.tools },
];

export default function Skills() {
    const { language } = useLanguage();

    return (
        <section id="skills" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient"
                    >
                        {language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        {language === 'fr' ? 'Un ensemble polyvalent de compétences alliant développement logiciel moderne, intelligence artificielle et robotique.' : 'A versatile skill set combining modern software development, artificial intelligence, and robotics.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold font-display">{category.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
