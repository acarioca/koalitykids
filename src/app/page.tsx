import {
  Camera,
  Eye,
  Trophy,
  Shield,
  Leaf,
  Star,
  Rocket,
  Check,
  Users,
  Smartphone,
  ArrowRight,
  Mail,
  Building2,
} from "lucide-react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-sage">
      {/* ── Navbar — hidden, slides down after scrolling past hero ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Hero Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/koality-kids.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* The Qualities — stacked typographic hero */}
          <h1 className="sr-only">KoalityKids — Creative, Curious, Courageous, Caring, Human</h1>
          <div className="flex flex-col items-start gap-0 select-none" aria-hidden="true">
            <span className="hero-word text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-white/90 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Curious<span className="text-violet">.</span>
            </span>
            <span className="hero-word text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-white/90 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              Mindful<span className="text-teal">.</span>
            </span>
            <span className="hero-word text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-white/90 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Brave<span className="text-pink">.</span>
            </span>
            <span className="hero-word text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-white/90 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              Kind<span className="text-teal">.</span>
            </span>
            <span className="hero-word text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight gradient-text animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              Playful.
            </span>
          </div>

          {/* Brand anchor + CTA — bottom right */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-2">We are</p>
              <p className="text-white text-2xl md:text-3xl font-bold">
                Koality<span className="gradient-text">Kids</span>
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "950ms" }}>
              <a
                href="#download"
                className="gradient-bg hover:gradient-bg-hover text-white font-medium px-8 py-4 rounded-pill transition-all flex items-center gap-2 text-base shadow-lg"
              >
                Download App
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-3">What we do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Fuelling Curious Young Minds
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards */}
            <FeatureCard
              icon={<Camera size={24} className="text-purple" />}
              iconBg="bg-lavender"
              title="Snap & Identify"
              description="Point your camera at any plant, animal, or insect. Our smart identification tells you exactly what you've found, with fun facts included."
            />
            <FeatureCard
              icon={<Eye size={24} className="text-teal" />}
              iconBg="bg-[#E0F7FA]"
              title="Observation Journal"
              description="Every discovery is saved to your personal journal. Track where and when you spotted each species, and watch your collection grow."
            />
            <FeatureCard
              icon={<Trophy size={24} className="text-success-green" />}
              iconBg="bg-[#E8F5E9]"
              title="Badges & Achievements"
              description="Earn badges for streaks, rare finds, and milestones. Stay motivated with weekly nature challenges and seasonal events."
            />
            <FeatureCard
              icon={<Users size={24} className="text-teal" />}
              iconBg="bg-[#E0F7FA]"
              title="Community Feed"
              description="See what other explorers have discovered nearby. Share your best finds and inspire friends and family to get outside."
            />
            <FeatureCard
              icon={<Shield size={24} className="text-purple" />}
              iconBg="bg-lavender"
              title="Parent Portal"
              description="A dedicated parental area to manage settings, review activity, and control subscriptions — protected by a parental code."
            />
            <FeatureCard
              icon={<Smartphone size={24} className="text-pink" />}
              iconBg="bg-[#FCE4EC]"
              title="Works Offline"
              description="No signal? No problem. Capture observations anywhere, and they'll sync automatically when you're back online."
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Three Steps to Start Exploring
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Download & Sign Up"
              description="Grab the free app from the App Store or Google Play. Create a profile for your child in under a minute."
            />
            <StepCard
              number="02"
              title="Snap a Photo"
              description="Head outside and take a photo of anything that catches your eye — a bird, a flower, an insect, a tree."
            />
            <StepCard
              number="03"
              title="Learn & Collect"
              description="Get instant identification with fun facts, danger levels, and audio guides. Every find is added to your journal."
            />
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Choose Your Plan
            </h2>
            <p className="text-text-secondary mt-4 max-w-lg mx-auto">
              Start free and upgrade anytime. Every plan includes a safe, ad-free experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <PricingCard
              icon={<Leaf size={24} className="text-success-green" />}
              iconBg="bg-[#E8F5E9]"
              name="Starter"
              price="Free"
              subtitle=""
              description="Get started with the basics"
              features={[
                "5 observations per month",
                "Basic species identification",
                "Personal observation journal",
              ]}
              ctaText="Download Free"
              ctaStyle="outline"
            />
            {/* Pro */}
            <PricingCard
              icon={<Star size={24} className="text-purple" />}
              iconBg="bg-lavender"
              name="Pro"
              price="$9"
              subtitle="/ month"
              badge="MOST POPULAR"
              badgeColor="text-purple bg-lavender"
              description="For curious explorers"
              features={[
                "Everything in Starter",
                "Unlimited observations",
                "Detailed species information",
                "Audio nature guides",
                "Weekly nature challenges",
              ]}
              ctaText="Start Pro Trial"
              ctaStyle="gradient"
              highlighted
            />
            {/* Elite */}
            <PricingCard
              icon={<Rocket size={24} className="text-pink" />}
              iconBg="bg-[#FCE4EC]"
              name="Elite"
              price="$19"
              subtitle="/ month"
              badge="RECOMMENDED"
              badgeColor="text-pink bg-[#FCE4EC]"
              description="The full KoalityKids experience"
              features={[
                "Everything in Pro",
                "Priority support",
                "Family sharing — multiple devices",
                "Exclusive badges & rewards",
                "Early access to new features",
              ]}
              ctaText="Start Elite Trial"
              ctaStyle="outline"
            />
            {/* Enterprise */}
            <PricingCard
              icon={<Building2 size={24} className="text-teal" />}
              iconBg="bg-[#E0F7FA]"
              name="Enterprise"
              price="Custom"
              subtitle=""
              description="For schools & organisations"
              features={[
                "Everything in Elite",
                "Unlimited seats",
                "Dedicated account manager",
                "Custom integrations",
                "SLA & priority support",
              ]}
              ctaText="Contact Us"
              ctaStyle="outline"
              ctaHref="mailto:hello@koalitykids.com.au"
            />
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Start Exploring?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed">
              Download KoalityKids for free and watch your child discover the wonders of the natural world — one photo at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="gradient-bg hover:gradient-bg-hover text-white font-medium px-8 py-4 rounded-pill transition-all flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="gradient-bg hover:gradient-bg-hover text-white font-medium px-8 py-4 rounded-pill transition-all flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.302v-.19zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-lg font-bold text-text-primary">
                Koality<span className="gradient-text">Kids</span>
              </span>
              <p className="text-sm text-text-secondary mt-1">
                Explore nature, one discovery at a time.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:hello@koalitykids.com.au" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
                <Mail size={14} />
                hello@koalitykids.com.au
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-secondary">
              &copy; {new Date().getFullYear()} Koality Pty Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Component: Feature Card ── */
function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-sage rounded-card p-6 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

/* ── Component: Step Card ── */
function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-card p-8 text-center shadow-sm">
      <span className="gradient-text text-4xl font-bold">{number}</span>
      <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

/* ── Component: Pricing Card ── */
function PricingCard({
  icon,
  iconBg,
  name,
  price,
  subtitle,
  badge,
  badgeColor,
  description,
  features,
  ctaText,
  ctaStyle,
  ctaHref,
  highlighted,
}: {
  icon: React.ReactNode;
  iconBg: string;
  name: string;
  price: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaStyle: "gradient" | "outline";
  ctaHref?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border-2 transition-shadow ${
        highlighted
          ? "border-purple shadow-lg scale-[1.02]"
          : "border-transparent shadow-sm hover:shadow-md"
      }`}
    >
      {badge && (
        <span className={`inline-block text-[10px] font-medium px-3 py-1 rounded-lg mb-4 ${badgeColor}`}>
          {badge}
        </span>
      )}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-text-primary text-lg">{name}</h3>
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold text-text-primary">{price}</span>
        {subtitle && <span className="text-sm text-text-secondary">{subtitle}</span>}
      </div>
      <p className="text-sm text-text-secondary mb-5">{description}</p>
      <ul className="space-y-2.5 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
            <Check size={16} className="text-success-green mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      {ctaStyle === "gradient" ? (
        <a
          href={ctaHref || "#download"}
          className="block text-center gradient-bg hover:gradient-bg-hover text-white font-medium py-3 rounded-pill transition-all"
        >
          {ctaText}
        </a>
      ) : (
        <a
          href={ctaHref || "#download"}
          className="block text-center border-2 border-black/10 hover:border-black/20 text-text-primary font-medium py-3 rounded-pill transition-all"
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}

