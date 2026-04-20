"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Calendar, FileText, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { language } = useLanguage();

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">
                            <User size={14} />
                            <span>{language === 'fr' ? 'À propos de moi' : 'About Me'}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">
                            {language === 'fr' ? 'Ingénieur Logiciel Passionné & Créatif' : 'Passionate & Creative Software Engineer'}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            {language === 'fr' ? portfolioData.profile.about : (portfolioData.profile.enAbout || portfolioData.profile.about)}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <MapPin size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Localisation</p>
                                    <p className="font-medium">{portfolioData.profile.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <Mail size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Email</p>
                                    <p className="font-medium">{portfolioData.profile.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <Phone size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Téléphone</p>
                                    <p className="font-medium">{portfolioData.profile.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <Calendar size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Disponibilité PFE</p>
                                    <p className="font-medium">Février / Mars 2026</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Decorative background for "Image" */}
                            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl rotate-6 translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 bg-indigo-600/20 rounded-3xl blur-2xl -rotate-6 -translate-x-4 -translate-y-4" />

                            <div className="relative h-full w-full glass-card flex flex-col p-8 border-white/20 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                                <div className="m-auto text-center w-full">
                                    <div className="relative w-48 h-48 mx-auto mb-6 group">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full blue-glow opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Image
                                            src={portfolioData.profile.profileImage}
                                            alt={portfolioData.profile.name}
                                            fill
                                            sizes="192px"
                                            className="relative w-full h-full object-cover rounded-full border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold font-display mb-2">{portfolioData.profile.name}</h3>
                                    <p className="text-blue-400 font-medium mb-6">Software Engineer</p>
                                    <div className="flex justify-center gap-4 mb-8">
                                        <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    {portfolioData.profile.cvUrl && (
                                        <a
                                            href={portfolioData.profile.cvUrl}
                                            download
                                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                                        >
                                            <FileText size={18} />
                                            Télécharger mon CV
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
