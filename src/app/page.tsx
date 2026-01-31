"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Twitter,
  Mail,
  ChevronDown,
  Play,
  ExternalLink,
  BookOpen,
  Shield,
  Globe,
  MessageSquare,
  ArrowRight,
  Plus,
  Layers,
  Cpu,
  Hash,
  Activity,
  Youtube,
  Chrome,
  Figma,
  Slack,
  Circle } from
"lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/84447f63-bea5-4634-83b3-f72c8bf854ce/ss2-1769798267584.png?width=8000&height=8000&resize=contain";

  const navItems = [
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Principles", href: "#principles" },
  { name: "Knowledge", href: "#knowledge" },
  { name: "Insights", href: "#insights" }];


  const stats = [
  { label: "Active Nodes", value: "40.2k" },
  { label: "Daily Ops", value: "1.2M" },
  { label: "Protocol v.", value: "2.0.4" }];

  const brands = [
    { icon: <Github />, name: "GitHub" },
    { icon: <Youtube />, name: "YouTube" },
    { icon: <Chrome />, name: "Google" },
    { icon: <Figma />, name: "Figma" },
    { icon: <Slack />, name: "Slack" },
    { icon: <Twitter />, name: "Twitter" },
    { icon: <MessageSquare />, name: "Discord" }
  ];

  const brandMarquee = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative bg-[#FAFAFA] text-black selection:bg-black selection:text-white font-inter overflow-x-hidden min-h-screen">
      
      {/* --- CUSTOM CURSOR --- */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-black/20 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }} />

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
        transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.2 }} />


      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-zinc-200/30 rounded-full blur-[120px]" />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-zinc-100/50 rounded-full blur-[100px]" />

      </div>

      {/* --- PROGRESS BAR --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[2000] origin-left" style={{ scaleX }} />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-8 left-0 right-0 z-[1000] px-6 md:px-12 flex items-center justify-between pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto">

          <a href="#" className="flex items-center gap-4 group">
            <img src={logoUrl} alt="Logo" className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 hover:rotate-[360deg]" />
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 pointer-events-auto absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, idx) =>
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="px-5 py-2.5 bg-white/40 backdrop-blur-xl border border-white/40 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 hover:text-black hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] transition-all">

              {item.name}
            </motion.a>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-4">

          <div className="hidden lg:flex items-center -space-x-2 mr-2">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                  x: [0, i % 2 === 0 ? 5 : -5, 0]
                }}
                transition={{ 
                  delay: i * 0.1,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                }}
                className="w-8 h-8 bg-white/60 backdrop-blur-md border border-black/5 rounded-full flex items-center justify-center shadow-sm hover:z-20 hover:scale-125 transition-transform"
              >
                {React.cloneElement(brand.icon as React.ReactElement, { className: "w-3.5 h-3.5 opacity-60" })}
              </motion.div>
            ))}
          </div>

          <button className="px-8 py-3 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-95 group flex items-center gap-3">
            Access Core
            <div className="flex gap-1 overflow-hidden w-0 group-hover:w-16 transition-all duration-500">
               <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </motion.div>
      </nav>

      <main ref={containerRef} className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center relative">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 bg-white/40 backdrop-blur-md border border-black/5 rounded-full inline-flex items-center gap-3 mb-16 shadow-sm">

              <div className="w-2 h-2 rounded-full bg-emerald-500 relative">
                <div className="absolute inset-0 bg-emerald-500 animate-ping rounded-full" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40">Network Synchronized</span>
            </motion.div>
            
            <h1 className="text-[12vw] font-black tracking-[-0.06em] leading-[0.8] font-syne text-black mb-12 select-none uppercase">
              SQUAERDS<br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-black/5">

                SOFT
              </motion.span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
              <p className="text-black/30 text-[11px] font-bold tracking-[0.3em] uppercase max-w-xs leading-loose text-center md:text-left">
                Engineering autonomous systems for the decentralized creative era.
              </p>
              <div className="h-[1px] w-20 bg-black/10 hidden md:block" />
              <div className="flex gap-12">
                {stats.map((s, i) =>
                <div key={s.label} className="text-center md:text-left">
                    <p className="text-lg font-black font-syne leading-none mb-1">{s.value}</p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/20">{s.label}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

            <div className="w-[1px] h-12 bg-gradient-to-b from-black/0 via-black/20 to-black/0" />
            <span className="text-[8px] font-bold uppercase tracking-[0.6em] text-black/20">Expand Intelligence</span>
          </motion.div>
        </section>

        {/* --- BRAND SNAKE MARQUEE (The "Snake" Section) --- */}
        <section className="py-20 overflow-hidden">
          <div className="flex relative">
            <motion.div
              animate={{ x: [0, -3000] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-12 whitespace-nowrap min-w-full px-10"
            >
              {brandMarquee.map((brand, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, Math.sin(i * 0.5) * 40, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1 
                  }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-white group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl shadow-black/[0.02]">
                    {React.cloneElement(brand.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 group-hover:text-black transition-colors">
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- VIDEO EXPERIENCE --- */}
        <section className="px-6 md:px-12 py-40 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-[21/9] w-full bg-zinc-100/30 backdrop-blur-sm rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-white/20 overflow-hidden">

            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale opacity-5 group-hover:scale-105 group-hover:opacity-10 transition-all duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-white/80 backdrop-blur-xl shadow-2xl rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">

                <Play className="w-8 h-8 ml-1 fill-current" />
              </motion.button>
            </div>
            <div className="absolute bottom-12 left-12">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 mb-2 block">Feature Presentation</span>
               <h3 className="text-2xl font-black font-syne uppercase">The Ecosystem Vision 2026</h3>
            </div>
          </motion.div>
        </section>

        {/* --- ECOSYSTEM HUB --- */}
        <section id="ecosystem" className="px-6 md:px-12 py-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/20 mb-8 block">Project Infrastructure</span>
              <h2 className="text-6xl md:text-9xl font-black font-syne tracking-tight uppercase leading-[0.85]">Core<br /><span className="text-black/5">Protocols</span></h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-black/40 text-lg font-medium leading-relaxed mb-10">
                Independent architecture designed for high-throughput creative networks and distributed intelligence.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white shadow-sm">
                  <Cpu className="w-5 h-5 text-black/20" />
                </div>
                <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white shadow-sm">
                  <Globe className="w-5 h-5 text-black/20" />
                </div>
                <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white shadow-sm">
                  <Activity className="w-5 h-5 text-black/20" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="https://squaerdssoft.github.io/WYRM/"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-16 rounded-[60px] bg-white/40 backdrop-blur-xl border border-white/40 hover:bg-black transition-all duration-700 min-h-[650px] flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/[0.01]">

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <Hash className="w-5 h-5 text-black/10 group-hover:text-white/20 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 group-hover:text-white/30 transition-colors">Integration 01</span>
                </div>
                <h3 className="text-7xl font-black font-syne tracking-tighter uppercase text-black group-hover:text-white transition-all duration-700 group-hover:tracking-normal mb-8">WYRM AI</h3>
                <p className="text-black/30 text-xl font-medium leading-relaxed max-w-xs group-hover:text-white/40 transition-colors">
                  Next-generation cognitive automation for sophisticated workflows.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="px-6 py-2 rounded-full border border-black/5 group-hover:border-white/10 text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 group-hover:text-white/50 transition-all flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white animate-pulse" />
                  Live System
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <ExternalLink className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.01] group-hover:bg-white/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-colors" />
            </motion.a>

            <motion.a
              href="https://squaerdssoft.github.io/LovorisMc/"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-16 rounded-[60px] bg-white/40 backdrop-blur-xl border border-white/40 hover:bg-black transition-all duration-700 min-h-[650px] flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/[0.01]">

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <Layers className="w-5 h-5 text-black/10 group-hover:text-white/20 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 group-hover:text-white/30 transition-colors">Network 02</span>
                </div>
                <h3 className="text-7xl font-black font-syne tracking-tighter uppercase text-black group-hover:text-white transition-all duration-700 group-hover:tracking-normal mb-8">LOVORIS</h3>
                <p className="text-black/30 text-xl font-medium leading-relaxed max-w-xs group-hover:text-white/40 transition-colors">
                  Distributed node synchronization for massive creative networks.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="px-6 py-2 rounded-full border border-black/5 group-hover:border-white/10 text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 group-hover:text-white/50 transition-all flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white animate-pulse" />
                  Stable Pulse
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.01] group-hover:bg-white/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-colors" />
            </motion.a>
          </div>
        </section>

        {/* --- PRINCIPLES / PHILOSOPHY --- */}
        <section id="principles" className="px-6 md:px-12 py-60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-40">
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-black/20 mb-10 block">System Foundations</span>
              <h2 className="text-6xl md:text-9xl font-black font-syne uppercase tracking-tighter leading-none mb-12 !whitespace-pre-line">DAİMA GELCEĞE<br /></h2>
              <div className="w-24 h-1 bg-black/10 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              {[
              { icon: <Shield />, title: "Autonomous Security", desc: "Encryption layers that adapt to network evolution." },
              { icon: <Activity />, title: "Neural Dynamics", desc: "Self-evolving logic gates that adapt to user interaction patterns." },
              { icon: <Globe />, title: "Open Logic", desc: "Transparent architecture built for collaborative growth." }].
              map((item, i) =>
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group text-center md:text-left">

                  <div className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-[30px] flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:rotate-[15deg] mx-auto md:mx-0 shadow-sm border border-white">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-6 tracking-tight">{item.title}</h4>
                  <p className="text-black/40 font-medium leading-relaxed max-w-xs mx-auto md:md-0">{item.desc}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* --- KNOWLEDGE BASE --- */}
        <section id="knowledge" className="px-6 md:px-12 py-40 max-w-7xl mx-auto">
          <div className="bg-zinc-950 rounded-[60px] p-12 md:p-32 text-white relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div>
                   <BookOpen className="w-16 h-16 mb-12 text-white/10" />
                   <h2 className="text-6xl md:text-8xl font-black font-syne uppercase leading-[0.9] mb-12">The Archive</h2>
                   <p className="text-white/40 text-lg font-medium max-w-md mb-16 leading-relaxed">
                      Deep-dive documentation, API structures, and network schematics for every SQUAERDSSOFT protocol.
                   </p>
                   <button className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform">
                      Read Documentation <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                   </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                { name: 'Core Setup', desc: 'Initialize your node.' },
                { name: 'API Reference', desc: 'Full endpoint map.' },
                { name: 'Security', desc: 'Auth & Encryption.' },
                { name: 'Network', desc: 'Scaling guides.' }].
                map((item) =>
                <div key={item.name} className="p-10 bg-white/5 border border-white/5 rounded-[40px] hover:bg-white hover:text-black transition-all cursor-pointer group">
                        <Plus className="w-5 h-5 mb-20 text-white/10 group-hover:text-black/20" />
                        <h5 className="text-[11px] font-bold uppercase tracking-widest mb-2">{item.name}</h5>
                        <p className="text-[9px] text-white/30 font-medium uppercase tracking-wider group-hover:text-black/40">{item.desc}</p>
                     </div>
                )}
                </div>
             </div>
             
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>
        </section>

        {/* --- INSIGHTS / BLOG --- */}
        <section id="insights" className="px-6 md:px-12 py-60 max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-black/20 mb-8 block">Latest Thinking</span>
                <h2 className="text-6xl md:text-9xl font-black font-syne uppercase tracking-tighter">Insights</h2>
              </div>
              <a href="#" className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:opacity-50 transition-opacity pb-4 border-b-2 border-black/5 group">
                 Explore Archive <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>

           <div className="space-y-6">
              {[
            { date: "30.01.26", title: "The Sovereign AI Paradigm", cat: "Intelligence" },
            { date: "18.01.26", title: "LOVORIS: Multi-Chain Nodes", cat: "Network" },
            { date: "04.01.26", title: "Design Principles for 2026", cat: "Manifesto" }].
            map((post, i) =>
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-12 md:p-16 bg-white/40 backdrop-blur-xl border border-white hover:border-black/5 rounded-[50px] transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-black/[0.01]">

                  <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24 mb-8 md:mb-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 w-32">{post.date}</span>
                    <h3 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tighter group-hover:translate-x-6 transition-transform duration-700">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-12">
                    <span className="px-6 py-2 rounded-full border border-black/5 text-[9px] font-bold uppercase tracking-widest text-black/30 group-hover:bg-black group-hover:text-white transition-all">{post.cat}</span>
                    <ArrowRight className="w-8 h-8 text-black/10 group-hover:text-black transition-colors" />
                  </div>
                </motion.div>
            )}
           </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <section className="px-6 md:px-12 py-80">
           <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 bg-black/[0.01] blur-[100px] rounded-full -z-10" />
              <h2 className="text-6xl md:text-[10vw] font-black font-syne uppercase tracking-tighter mb-20 leading-none">Stay<br />Synced</h2>
              <div className="relative max-w-xl mx-auto">
                 <input
                type="email"
                placeholder="NETWORK EMAIL"
                className="w-full bg-transparent border-b-2 border-black/10 py-8 text-lg font-black tracking-[0.4em] uppercase focus:outline-none focus:border-black transition-all placeholder:text-black/10 text-center" />

                 <button className="mt-12 group flex items-center gap-4 mx-auto text-[10px] font-bold uppercase tracking-[0.5em] hover:text-emerald-500 transition-colors">
                    Join Ecosystem <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </section>

        {/* --- EXPANDED FOOTER --- */}
        <footer className="px-6 md:px-24 pt-60 pb-20 border-t border-black/[0.03]">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-20 mb-60">
                 <div className="col-span-2 md:col-span-1 lg:col-span-2">
                    <img src={logoUrl} alt="Footer Logo" className="w-14 h-14 mb-12 grayscale opacity-50 hover:opacity-100 transition-opacity" />
                    <p className="text-black/30 text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed max-w-xs">
                       Architecting the independent digital landscape. Built for the future of distributed intelligence.
                    </p>
                 </div>
                 
                 <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/20 mb-12">Protocols</h5>
                    <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.4em]">
                       <li><a href="https://squaerdssoft.github.io/WYRM/" className="hover:text-black/40 transition-colors">WYRM AI</a></li>
                       <li><a href="https://squaerdssoft.github.io/LovorisMc/" className="hover:text-black/40 transition-colors">Lovoris</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Network Map</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Status</a></li>
                    </ul>
                 </div>

                 <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/20 mb-12">Resources</h5>
                    <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.4em]">
                       <li><a href="#" className="hover:text-black/40 transition-colors">The Archive</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">API Console</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Open Nodes</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Media Kit</a></li>
                    </ul>
                 </div>

                 <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/20 mb-12">Network</h5>
                    <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.4em]">
                       <li><a href="#" className="hover:text-black/40 transition-colors">X / Twitter</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Github</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Discord</a></li>
                       <li><a href="#" className="hover:text-black/40 transition-colors">Mail</a></li>
                    </ul>
                 </div>
              </div>

              <div className="pt-24 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-10">
                 <div className="flex flex-col md:flex-row items-center gap-10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-black/20">SQUAERDSSOFT © 2026</span>
                    <div className="h-[1px] w-12 bg-black/5 hidden md:block" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/20">Independent Digital Entity</span>
                 </div>
                 <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.4em] text-black/20">
                    <a href="#" className="hover:text-black transition-colors">T&C</a>
                    <a href="#" className="hover:text-black transition-colors">Privacy</a>
                    <a href="#" className="hover:text-black transition-colors">Cookies</a>
                 </div>
              </div>
           </div>
        </footer>

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Inter:wght@400;500;700;900&display=swap');
        
        :root {
          --font-syne: 'Syne', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }

        .font-syne { font-family: var(--font-syne); }
        .font-inter { font-family: var(--font-inter); }

        body {
          background: #FAFAFA;
          -webkit-font-smoothing: antialiased;
          color: black;
          cursor: none;
        }

        @media (max-width: 768px) {
          body { cursor: auto; }
        }

        ::-webkit-scrollbar {
          width: 0px;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: black;
          color: white;
        }
      `}</style>
    </div>);

}
