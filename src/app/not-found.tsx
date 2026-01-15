"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden text-center px-6">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 glass-card p-12 max-w-lg w-full border-white/5 shadow-2xl">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mb-4 animate-pulse">
                        <AlertTriangle size={48} />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl font-bold font-display text-white mb-2"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-slate-300 mb-6"
                >
                    Page Introuvable / Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-400 mb-8 leading-relaxed"
                >
                    Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
                    <br />
                    <span className="text-sm italic opacity-70">Sorry, the page you are looking for does not exist or has been moved.</span>
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 blue-glow group"
                    >
                        <Home size={20} />
                        <span>Retour à l&apos;accueil / Back Home</span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
