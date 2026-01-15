"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Code2, Cpu, Github, Linkedin, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8"
                >
                    <Terminal size={14} className="text-blue-400" />
                    <span className="text-sm font-medium text-blue-400">
                        {language === 'fr' ? 'PFE 2026 - Étudiant Ingénieur' : 'Graduation Project 2026 - Engineering Student'}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight"
                >
                    <span className="text-gradient">Saad Arafet</span> <br />
                    <span className="text-blue-500">Ben Mahfoudh</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {portfolioData.profile.title}. {language === 'fr' ? 'Spécialisé en conception d\'interfaces modernes et passionné par la robotique.' : 'Specialized in modern interface design and passionate about robotics.'}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center blue-glow"
                    >
                        {language === 'fr' ? 'Voir mes projets' : 'View my work'}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </a>
                    <a
                        href={portfolioData.profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all duration-300 flex items-center"
                        title="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href={portfolioData.profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-600/20 rounded-full font-semibold transition-all duration-300 flex items-center"
                        title="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    {portfolioData.profile.cvUrl && (
                        <a
                            href={portfolioData.profile.cvUrl}
                            download
                            className="px-8 py-4 bg-slate-100 hover:bg-white text-slate-900 rounded-full font-bold transition-all duration-300 flex items-center shadow-xl"
                        >
                            <FileDown size={18} className="mr-2" />
                            CV PDF
                        </a>
                    )}
                </motion.div>

                {/* Feature badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex flex-wrap justify-center gap-8 text-slate-500 opacity-60"
                >
                    <div className="flex items-center space-x-2">
                        <Code2 size={20} />
                        <span className="uppercase tracking-widest text-xs font-bold">Software Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Cpu size={20} />
                        <span className="uppercase tracking-widest text-xs font-bold">Robotics & IoT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Terminal size={20} />
                        <span className="uppercase tracking-widest text-xs font-bold">Full-Stack Capability</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
