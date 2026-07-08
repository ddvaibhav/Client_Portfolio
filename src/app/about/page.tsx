"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import CTASection from "@/components/CTASection";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Cpu,
  Award,
  Clock,
  Zap,
  Quote,
  Mail,
  MessageCircle,
  Phone
} from "lucide-react";
import { clientsData } from "@/db/clients";

export default function AboutPage() {


  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
            Crafting Stories with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">AI & Creativity</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI Artist. Video Creator. Content Specialist.
          </p>
        </m.div>

        <BentoGrid className="max-w-6xl mx-auto mb-20">
          {/* 1. Hero Profile - SUPER HIGHLIGHTED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <BentoGridItem
              title=""
              description=""
              header={
                <div className="relative w-full h-full min-h-[28rem] md:min-h-[16rem] rounded-xl overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/sarang.png"
                    alt="Sarang"
                    fill
                    className="object-cover object-top grayscale-[0] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
                    >
                      SARANGDHAR<br />
                      <span className="text-blue-500">BHAVAR</span>
                    </m.div>
                    <div className="h-1 w-16 md:w-20 bg-purple-500 mt-4 rounded-full" />
                    <p className="text-gray-300 mt-4 text-xs md:text-sm font-medium tracking-wide uppercase">
                      AI Artist & Video Creator
                    </p>
                  </div>
                </div>
              }
              className="h-full shadow-2xl shadow-blue-900/10"
              icon={null} // Icon inside header
            />
          </m.div>

          {/* 2. Stats - Experience - VISUAL */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Experience"
              description="Hands-on professional work."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-black to-neutral-900 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors py-8 md:py-0">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 z-10">3+</span>
                  <div className="text-emerald-500/50 text-xs font-mono uppercase tracking-[0.2em] z-10 mt-2">Years Active</div>
                </div>
              }
              className="h-full"
              icon={<Clock className="h-4 w-4 text-emerald-500" />}
            />
          </m.div>



          {/* 4. Global Reach - Visual Map */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title="Global Reach"
              description="Remote ready."
              header={
                <a
                  aria-label="View location on Google Maps"
                  href="https://www.google.com/maps/search/?api=1&query=Ahilyanagar,+Maharashtra,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#0a0a0a] overflow-hidden flex items-center justify-center border border-white/5 cursor-pointer transition-all duration-300"
                >
                  {/* Abstract grid lines for map feel */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center w-full">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse">
                      <MapPin className="text-blue-500" size={32} />
                    </div>

                    <div className="mt-2 bg-blue-500/20 backdrop-blur text-blue-300 px-3 py-1 rounded text-xs font-bold border border-blue-500/30">
                      WORLDWIDE
                    </div>


                  </div>
                </a>
              }
              className="h-full"
              icon={<MapPin className="h-4 w-4 text-indigo-500" />}
            />
          </m.div>


          {/* 5. Resume - Separate Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="md:col-span-1"
          >
            <BentoGridItem
              title=""
              description=""
              header={
                <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 overflow-hidden p-6 flex flex-col items-start justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">📄</span>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">Visite my resume</div>
                      <div className="text-gray-400 text-xs mt-1">Open PDF</div>
                    </div>
                  </div>

                  <a
                    href="/SarangCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-4 inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                  >
                    Download
                  </a>
                </div>
              }
              className="h-full"
              icon={null}
            />
          </m.div>

          {/* 6. The Philosophy - Quote */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <BentoGridItem
              title="Philosophy"
              description="AI meets Creativity."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-6 flex items-center">
                  <Quote className="text-white/10 absolute top-4 right-4" size={48} />
                  <p className="text-gray-300 italic text-sm md:text-base leading-relaxed relative z-10">
                    "Transform ideas into high-quality, scroll-stopping videos by combining AI tools with creative storytelling. Speed meets artistry."
                  </p>
                </div>
              }
              className="h-full"
              icon={<Award className="h-4 w-4 text-yellow-500" />}
            />
          </m.div>

          {/* 6. Socials - Visual Bar */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-1"
            style={{ display: "flex" }}
          >
            <BentoGridItem
              title="Connect"
              description=""
              header={
                <div className="flex flex-1 h-full w-full items-center justify-between px-6 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl border border-white/5 py-4 md:py-0 min-h-[5rem]">
                  <a href="mailto:sarangbhavar7721@gmail.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-white"><Mail size={20} /></a>
                  <a href="https://wa.me/+918999706011" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 text-white"><MessageCircle size={20} /></a>
                  <a href="tel:+918999706011" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 text-white"><Phone size={20} /></a>
                </div>
              }
              className="h-full"
              icon={<Zap className="h-4 w-4 text-white" />}
            />
          </m.div>

        </BentoGrid>

        {/* Clients Section */}
        {/*
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Trusted By</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <Marquee className="[--duration:20s]">
              {clientsData.map((client) => (
                <div key={client.id} className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white/10 transition-all">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center whitespace-nowrap">
                    {client.name}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </m.div>
        */}


        <CTASection
          title="Ready to Work Together?"
          description="Let's make something that breaks the internet."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
