import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-sage">
      {/* Header */}
      <header className="bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-text-primary">
            Koality<span className="gradient-text">Kids</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Get in Touch
            </h1>
            <p className="text-text-secondary max-w-lg mx-auto">
              Have a question, suggestion, or partnership enquiry? We&apos;d
              love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Cards */}
            <ContactCard
              icon={<Mail size={24} className="text-purple" />}
              iconBg="bg-lavender"
              title="Email Us"
              description="For general enquiries, support, or feedback."
              detail="hello@koalitytech.com"
              href="mailto:hello@koalitytech.com"
              extra={
                <div style={{ marginTop: "20px" }}>
                  <Link
                    href="/support"
                    className="gradient-bg hover:gradient-bg-hover text-white text-sm font-medium px-5 py-2 rounded-pill transition-all"
                  >
                    Contact Support
                  </Link>
                </div>
              }
            />
            <ContactCard
              icon={<MapPin size={24} className="text-teal" />}
              iconBg="bg-[#E0F7FA]"
              title="Location"
              description="We're proudly based in Australia."
              detail="Sunshine Coast, QLD, Australia"
            />
          </div>

          {/* Enterprise / Schools */}
          <div className="mt-10 bg-white rounded-2xl p-8 md:p-10 shadow-sm text-center">
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Schools & Organisations
            </h2>
            <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
              Interested in KoalityKids for your school, childcare centre, or
              organisation? We offer custom Enterprise plans with dedicated
              support.
            </p>
            <a
              href="mailto:hello@koalitytech.com?subject=Enterprise%20Enquiry"
              className="inline-block gradient-bg hover:gradient-bg-hover text-white font-medium px-8 py-3 rounded-pill transition-all"
            >
              Enquire About Enterprise
            </a>
          </div>

          {/* Response time */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <Clock size={14} />
            <p>We typically respond within 1–2 business days.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactCard({
  icon,
  iconBg,
  title,
  description,
  detail,
  href,
  extra,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  detail: string;
  href?: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-text-secondary mb-3">{description}</p>
      {href ? (
        <a
          href={href}
          className="text-sm font-medium text-purple hover:underline"
        >
          {detail}
        </a>
      ) : (
        <p className="text-sm font-medium text-text-primary">{detail}</p>
      )}
      {extra}
    </div>
  );
}
