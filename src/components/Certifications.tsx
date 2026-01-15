"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        <Award size={14} />
                        <span>Reconnaissances</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-display mb-4 text-gradient"
                    >
                        Certifications & Prix
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 border-white/5 hover:border-blue-500/30 transition-all group"
                        >
                            {cert.image ? (
                                <div className="relative h-40 mb-6 rounded-lg overflow-hidden border border-white/10">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ) : (
                                <div className="h-40 mb-6 rounded-lg bg-blue-500/5 border border-white/5 flex items-center justify-center">
                                    <Award size={48} className="text-blue-500/20" />
                                </div>
                            )}

                            <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-400 transition-colors">
                                {cert.title}
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-slate-400">
                                    <Briefcase size={14} className="mr-2" />
                                    {cert.issuer}
                                </div>
                                <div className="flex items-center text-xs text-slate-500">
                                    <Calendar size={14} className="mr-2" />
                                    {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
