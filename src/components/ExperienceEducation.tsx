"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceEducation() {
    const { language } = useLanguage();

    return (
        <section id="experience" className="py-24 bg-slate-900/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                                <Briefcase size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient">{language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}</h2>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                            {portfolioData.experience.map((exp, idx) => (
                                <motion.div
                                    key={exp.role + idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-12"
                                >
                                    <div className="absolute left-[20px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full border-4 border-slate-900 z-10" />
                                    <div className="glass-card p-6 border-white/5 hover:border-blue-500/20 transition-all group">
                                        <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                            <div>
                                                <h3 className="text-xl font-bold font-display group-hover:text-blue-400 transition-colors uppercase tracking-tight">{exp.role}</h3>
                                                <p className="text-blue-500 font-medium">{exp.company}</p>
                                            </div>
                                            <div className="flex items-center text-xs font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                <Calendar size={12} className="mr-2" />
                                                {language === 'fr' ? exp.period : (exp.enPeriod || exp.period)}
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed italic">
                                            {language === 'fr' ? exp.description : (exp.enDescription || exp.description)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div id="education">
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                <GraduationCap size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient">{language === 'fr' ? 'Formation Académique' : 'Education'}</h2>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                            {portfolioData.education.map((edu, idx) => (
                                <motion.div
                                    key={edu.degree + idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-12"
                                >
                                    <div className="absolute left-[20px] top-2 w-2.5 h-2.5 bg-indigo-500 rounded-full border-4 border-slate-900 z-10" />
                                    <div className="glass-card p-6 border-white/5 hover:border-indigo-500/20 transition-all group">
                                        <div className="flex flex-wrap justify-between items-start mb-2 gap-4">
                                            <div>
                                                <h3 className="text-xl font-bold font-display group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                                    {language === 'fr' ? edu.degree : (edu.enDegree || edu.degree)}
                                                </h3>
                                                <p className="text-indigo-400 font-medium">{edu.school}</p>
                                            </div>
                                            <div className="flex items-center text-xs font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                <Calendar size={12} className="mr-2" />
                                                {language === 'fr' ? edu.period : (edu.enPeriod || edu.period)}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
