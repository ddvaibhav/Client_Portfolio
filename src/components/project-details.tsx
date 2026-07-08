"use client";

import { useState } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
    ArrowLeft,
    Play,
    Clock,
    User,
    Calendar,
    Quote,
    ExternalLink,
    X,
} from "lucide-react";

import type { VideoProject } from "@/types/videos";

interface ProjectDetailsProps {
    project: VideoProject;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [showVideo, setShowVideo] = useState(false);
    const [showImageLightbox, setShowImageLightbox] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const videoSrc = project.video_link || project.video_path || null;



    const isGraphicsOrYouTubeThumbnails = project.category.some(
        (cat) =>
            cat === "Graphics Designs" ||
            cat === "YouTube Thumbnails"
    );

    const images = project.project_images ?? [];
    const designedImageSrc = images[0] || null;


    return (

        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <m.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Button
                        asChild
                        variant="outline"
                        className="pl-4 pr-6 py-2 h-auto text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl group"
                    >
                        <Link href="/">
                            <ArrowLeft className="mr-2" size={16} />
                            Back to Projects
                        </Link>
                    </Button>
                </m.div>

                {/* Preview Section */}
                {isGraphicsOrYouTubeThumbnails ? (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <GlassmorphismCard className="p-4 md:p-6">
                            {designedImageSrc ? (
                                <div className="flex flex-col gap-4">
                                    <button
                                        type="button"
                                        className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 group"
                                        onClick={() => {
                                            setActiveImageIndex(0);
                                            setShowImageLightbox(true);
                                        }}
                                        aria-label="Open image lightbox"
                                    >
                                        <Image
                                            src={designedImageSrc}
                                            alt={project.video_title}
                                            fill
                                            className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </button>

                                    {images.length > 1 && (
                                        <div className="flex flex-wrap gap-3">
                                            {images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className={
                                                        "relative w-24 h-16 rounded-md overflow-hidden bg-gray-900 " +
                                                        (idx === activeImageIndex
                                                            ? "ring-2 ring-blue-400"
                                                            : "opacity-80 hover:opacity-100")
                                                    }
                                                    onClick={() => {
                                                        setActiveImageIndex(idx);
                                                        setShowImageLightbox(true);
                                                    }}
                                                    aria-label={`Open image ${idx + 1}`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`Project image ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-gray-400">No images available.</div>
                            )}
                        </GlassmorphismCard>
                    </m.div>
                ) : (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <GlassmorphismCard className="p-4 md:p-6">
                            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
                                {showVideo && videoSrc ? (
                                    <video
                                        controls
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        title={project.video_title}
                                        className="w-full h-full"
                                    >
                                        {videoSrc ? (
                                            <source src={videoSrc} type="video/mp4" />
                                        ) : null}
                                    </video>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={
                                                project.cover_image.startsWith("/")
                                                    ? project.cover_image
                                                    : `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
                                            }
                                            alt={project.video_title}
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <Button
                                                onClick={() => setShowVideo(true)}
                                                size="lg"
                                                className="bg-red-600 hover:bg-red-700 cursor-pointer"
                                            >
                                                <Play className="mr-2" size={24} />
                                                Play Video
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </GlassmorphismCard>
                    </m.div>
                )}

                {/* Image Lightbox */}
                {isGraphicsOrYouTubeThumbnails && showImageLightbox && images[activeImageIndex] && (
                    <m.div
                        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowImageLightbox(false)}
                    >
                            <button
                            type="button"
                            onClick={() => setShowImageLightbox(false)}
                            className="absolute top-4 right-4 z-[201] bg-black/60 hover:bg-black/80 text-white rounded-full p-2 border border-white/10"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                        <div
                            className="relative w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                                <Image
                                    src={images[activeImageIndex]}
                                    alt={`Project image ${activeImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {images.length > 1 && (
                                <div className="flex items-center justify-between mt-4">
                                    <Button
                                        variant="secondary"
                                        className="bg-white/10 hover:bg-white/15 text-white"
                                        onClick={() =>
                                            setActiveImageIndex(
                                                (prev) => (prev - 1 + images.length) % images.length
                                            )
                                        }
                                    >
                                        Prev
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="bg-white/10 hover:bg-white/15 text-white"
                                        onClick={() =>
                                            setActiveImageIndex((prev) => (prev + 1) % images.length)
                                        }
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </div>
                    </m.div>
                )}


                {/* Project Details Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <GlassmorphismCard className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end mb-4 gap-4">
                                {project.duration && (
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Clock className="mr-1" size={14} />
                                        {project.duration}
                                    </div>
                                )}
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                                {project.video_title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {project.video_description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-white">
                                    Project Details
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center text-gray-400">
                                        <Calendar className="mr-2" size={14} />
                                        <span>
                                            Published:{" "}
                                            {new Date(project.publish_date).toLocaleDateString(
                                                "en-US",
                                                {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    timeZone: "UTC",
                                                }
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <User className="mr-2" size={14} />
                                        <span>Client: {project.client_name}</span>
                                    </div>
                                </div>
                            </div>

                            {project.software_used && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-white">
                                        Software Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.software_used.map((software) => (
                                            <Badge
                                                key={software}
                                                variant="outline"
                                                className="border-gray-600 text-gray-300"
                                            >
                                                {software}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3 text-white">
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((category) => (
                                    <Badge
                                        key={category}
                                        variant="outline"
                                        className="border-gray-600 text-gray-300"
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="bg-red-600 hover:bg-red-700">
                                <a
                                    href={project.video_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="mr-2" size={16} />
                                    Watch on YouTube
                                </a>
                            </Button>
                        </div> */}
                    </GlassmorphismCard>
                </m.div>



                {/* Client Feedback */}
                {project.client_feedback && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                                Client Feedback
                            </h3>
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-center justify-center space-x-4 mb-6">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                    <div className="text-center">
                                        <p className="font-medium text-white text-lg">
                                            {project.client_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Quote
                                        className="absolute -top-4 -left-4 text-blue-400 opacity-50"
                                        size={32}
                                    />
                                    <blockquote className="text-gray-300 italic text-lg text-center leading-relaxed pl-8">
                                        "{project.client_feedback}"
                                    </blockquote>
                                </div>
                            </div>
                        </GlassmorphismCard>
                    </m.div>
                )}
            </div>
        </div>
    );
}
