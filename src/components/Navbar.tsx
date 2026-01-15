"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
    { name: "Accueil", enName: "Home", href: "#home" },
    { name: "À propos", enName: "About", href: "#about" },
    { name: "Compétences", enName: "Skills", href: "#skills" },
    { name: "Projets", enName: "Projects", href: "#projects" },
    { name: "Expérience", enName: "Experience", href: "#experience" },
    { name: "Contact", enName: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-slate-900/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold font-display tracking-tight"
                >
                    Saad<span className="text-blue-500">.Arafet</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {language === 'fr' ? link.name : link.enName}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-xs font-bold uppercase text-slate-400 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded-md mr-2"
                        >
                            <Globe size={14} />
                            <span>{language.toUpperCase()}</span>
                        </button>
                        <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                            <Github size={18} />
                        </a>
                        <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href={`mailto:${portfolioData.profile.email}`} className="text-slate-400 hover:text-white transition-colors" title="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-slate-900 border-b border-white/10 px-6 py-8"
                >
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {language === 'fr' ? link.name : link.enName}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
