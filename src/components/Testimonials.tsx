"use client";

import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
    const { language } = useLanguage();

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient"
                    >
                        {language === 'fr' ? 'Recommandations' : 'Testimonials'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        {language === 'fr'
                            ? "Ce que mes collègues et superviseurs disent de mon travail et de mon engagement professionnel."
                            : "What my colleagues and supervisors say about my work and professional commitment."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {portfolioData.testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 flex flex-col relative group hover:border-blue-500/30 transition-colors"
                        >
                            <div className="absolute top-6 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                                <Quote size={48} />
                            </div>

                            <p className="text-slate-300 mb-8 italic leading-relaxed relative z-10">
                                &quot;{language === 'fr' ? testimonial.content : (testimonial.enContent || testimonial.content)}&quot;
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                                    {testimonial.image ? (
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-display text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-400 font-medium">{testimonial.role}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
