"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { language } = useLanguage();

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient"
                    >
                        {language === 'fr' ? 'Parlons de votre Projet' : 'Let\'s Discuss Your Project'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        {language === 'fr' ? 'Prêt à collaborer sur des projets innovants ? N\'hésitez pas à me contacter par email ou par téléphone.' : 'Ready to collaborate on innovative projects? Feel free to contact me via email or phone.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass-card p-8 flex items-center space-x-6">
                            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{language === 'fr' ? 'Email' : 'Email'}</p>
                                <a href={`mailto:${portfolioData.profile.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                                    {portfolioData.profile.email}
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex items-center space-x-6">
                            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{language === 'fr' ? 'Téléphone' : 'Phone'}</p>
                                <a href={`tel:${portfolioData.profile.phone}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                                    {portfolioData.profile.phone}
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex items-center space-x-6">
                            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{language === 'fr' ? 'Localisation' : 'Location'}</p>
                                <p className="text-lg font-medium">{portfolioData.profile.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.form
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 relative overflow-hidden"
                            action="https://formspree.io/f/mqaeavvy" // À remplacer par votre ID Formspree réel
                            method="POST"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">{language === 'fr' ? 'Nom Complet' : 'Full Name'}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">{language === 'fr' ? 'Email' : 'Email'}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="votre@email.com"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 mb-8">
                                <label className="text-sm font-bold text-slate-400 ml-1">{language === 'fr' ? 'Message' : 'Message'}</label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    required
                                    placeholder={language === 'fr' ? "Comment puis-je vous aider ?" : "How can I help you?"}
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 blue-glow group"
                            >
                                <span>{language === 'fr' ? 'Envoyer le message' : 'Send Message'}</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-white/5 text-center">
                <p className="text-slate-500 text-sm mb-6">
                    © {new Date().getFullYear()} Saad Arafet Ben Mahfoudh. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
                </p>
                <div className="flex justify-center space-x-6 text-slate-400 mb-6">
                    <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </a>
                    <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
                    </a>
                </div>
            </footer>
        </section>
    );
}
