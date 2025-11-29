import { ArrowLeft, CheckCircle, Zap, ShoppingCart, Database, Layout } from "lucide-react";
import Link from "next/link";

export default function VelanoCaseStudy() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-16">
      
      {/* Header */}
      <Link href="/" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="mt-10 max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Velano – Modern Clothing E-Commerce Experience
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Velano is a full clothing e-commerce store built from scratch using a modern stack.  
          It includes product management, cart handling, checkout, order tracking, and a full admin panel —
          all built for real customers.
        </p>

        {/* Key Details */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          <Detail title="Timeline" value="1.5 Months" />
          <Detail title="My Role" value="Full-Stack Developer" />
          <Detail title="Tech Stack" value="Next.js, Tailwind, Firebase, Redux, Framer" />
          <Detail title="Platform" value="velanoshop.store" />
        </div>

        {/* Problem */}
        <Section title="The Problem">
          <p className="text-gray-300 leading-relaxed">
            The store required a clean, fast, and easy-to-manage e-commerce system that didn’t rely on
            Shopify or expensive platforms. The goal was to build a custom solution with full ownership,
            smooth UX, and low running cost.
          </p>
        </Section>

        {/* Solution */}
        <Section title="The Solution">
          <ul className="text-gray-300 space-y-3">
            <ListItem icon={<ShoppingCart />}>Custom UI for cart drawer + full cart page</ListItem>
            <ListItem icon={<Zap />}>Ultra-fast product pages with variant support (size/color)</ListItem>
            <ListItem icon={<Database />}>Firestore-based product + order + cart activity tracking</ListItem>
            <ListItem icon={<CheckCircle />}>Secure checkout form with real-time validation</ListItem>
            <ListItem icon={<Layout />}>Admin panel with product CRUD, duplication & order view</ListItem>
          </ul>
        </Section>

        {/* Outcome */}
        <Section title="Outcome & Impact">
          <p className="text-gray-300 leading-relaxed">
            Velano now runs as a live e-commerce store with real customers.  
            It loads fast, feels polished, and gives full control without monthly platform fees.
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
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ListItem({ icon, children }: any) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-purple-400">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
