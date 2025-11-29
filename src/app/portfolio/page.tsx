import { ArrowLeft, Sparkles, Code2, Layout, Monitor, Cpu } from "lucide-react";
import Link from "next/link";

export default function PortfolioCaseStudy() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-16">
      
      <Link href="/" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="mt-10 max-w-4xl space-y-8">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Personal Portfolio — Modern Developer Identity
        </h1>

        <p className="text-gray-300 leading-relaxed">
          A sleek, responsive portfolio designed to represent my skills, projects, and personality.
          It focuses on performance, clarity, and visual storytelling — helping clients understand my expertise instantly.
        </p>

        {/* key details */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          <Detail title="Timeline" value="1 Week" />
          <Detail title="My Role" value="Designer & Developer" />
          <Detail title="Tech Stack" value="Next.js, Tailwind, Framer Motion" />
          <Detail title="Features" value="Animations, Case Studies, Resume Download" />
        </div>

        {/* The Problem */}
        <Section title="The Problem">
          <p className="text-gray-300 leading-relaxed">
            I needed a portfolio that looked modern, clean, and professional — without feeling generic.
            Something that reflects who I am, shows real projects, and convinces a client or recruiter in 10 seconds.
          </p>
        </Section>

        {/* The Solution */}
        <Section title="The Solution">
          <ul className="text-gray-300 space-y-3">
            <ListItem icon={<Sparkles />}>
              Custom UI with gradients, glass effects, and motion to match my personal branding
            </ListItem>
            <ListItem icon={<Monitor />}>
              Hero section with instant clarity: who I am, what I do, what I offer
            </ListItem>
            <ListItem icon={<Code2 />}>
              Performance-optimized Next.js pages with lazy loading + smooth transitions
            </ListItem>
            <ListItem icon={<Layout />}>
              Structured sections: Projects, Skills, Tools, Highlights, Stats
            </ListItem>
            <ListItem icon={<Cpu />}>
              Resume download + preview functionality for easy hiring
            </ListItem>
          </ul>
        </Section>

        {/* Outcome */}
        <Section title="Outcome & Impact">
          <p className="text-gray-300 leading-relaxed">
            The portfolio helped me position myself as a professional developer.  
            It is fast, modern, and immediately communicates my value.  
            It also increased confidence while applying for jobs and talking to clients.
          </p>
        </Section>

      </div>
    </div>
  );
}

function Detail({ title, value }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <p className="text-xs uppercase opacity-60">{title}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ListItem({ icon, children }: any) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-blue-400">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
