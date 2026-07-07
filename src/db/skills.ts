import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.png",
    icon: Film,
    description:
      "Professional color grading, editing, and audio post-production",
    color: "text-orange-400",
  },
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Advanced video editing, multicam sync, and workflow optimization",
    color: "text-purple-400",
  },
  {
    name: "After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description: "Motion graphics, visual effects, and advanced animations",
    color: "text-blue-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description: "Thumbnail design, graphics creation, and image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Adobe Audition",
    image_link: "/tools/Adobe_Audition_CC.png",
    icon: Volume2,
    description: "Audio editing, noise reduction, and sound enhancement",
    color: "text-green-400",
  },
];

export const specializations = [
  {
    title: "Short-Form Content",
    skills: [
      "Reels Editing",
      "Engagement Optimization",
      "Pacing & Timing",
      "Platform Adaptation",
    ],
    icon: "📱",
    description:
      "Creating engaging short-form videos optimized for reels and social platforms",
  },
  {
    title: "AI Image Generation",
    skills: [
      "Midjourney",
      "Leonardo AI",
      "Prompt Engineering",
      "Character Consistency",
    ],
    icon: "🤖",
    description:
      "Generating stunning AI visuals while maintaining character and brand consistency",
  },
  {
    title: "AI Video Creation",
    skills: [
      "Runway",
      "Pika",
      "Motion Generation",
      "Visual Enhancement",
    ],
    icon: "✨",
    description:
      "Creating dynamic AI-powered videos and animations for professional content",
  },
  {
    title: "Video Editing",
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "Color Grading",
      "Sound Design",
    ],
    icon: "🎬",
    description:
      "Professional editing with storytelling, pacing, and modern techniques",
  },
  {
    title: "Motion Graphics",
    skills: [
      "Visual Effects",
      "Transitions",
      "Lower Thirds",
      "Dynamic Graphics",
    ],
    icon: "🎨",
    description: "Creating eye-catching animations that enhance storytelling",
  },
  {
    title: "Promotional Content",
    skills: [
      "Brand Messaging",
      "Visual Consistency",
      "Engagement Hooks",
      "Call-to-Action Design",
    ],
    icon: "📢",
    description:
      "Creating compelling promotional and marketing videos for brands and creators",
  },
];

export const achievements = [
  {
    title: "100+ Videos Edited",
    description:
      "Successfully delivered over 100+ short-form videos, reels, and promotional content",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "AI-Driven Solutions",
    description:
      "Integrated modern AI tools to enhance visuals and accelerate content production",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "1+ Year Experience",
    description:
      "Professional hands-on experience in video editing with continuous skill development",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Fast Delivery",
    description:
      "Known for delivering high-quality content with quick turnaround times",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Analyzing raw footage, identifying key moments, and planning the edit",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
