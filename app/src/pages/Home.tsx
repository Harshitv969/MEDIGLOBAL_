import { Link } from 'react-router';
import { Check, Clock, Shield, Users, Heart, Award, ArrowRight, Phone, Mail } from 'lucide-react';

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Healthcare professional"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.87) blur(0px)' }}
        />
        {/* Left-to-right gradient: dark on text side, fades to transparent on image side */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 45%, transparent 100%)' }} />
      </div>

      {/* Subtle decorative teal circle blur — right side */}
      <div className="absolute right-[-80px] top-[-80px] w-[420px] h-[420px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <p className="text-teal-300 font-medium text-xs uppercase tracking-widest">Healthcare Recruitment That Works</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-5 tracking-tight drop-shadow-md">
            People Who Care,<br />
            <span className="text-teal-300">Placed Where It Matters.</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Framework-approved staffing for care homes, hospitals, and healthcare providers across the UK. Temporary and permanent solutions available 24/7.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/about"
              className="px-8 py-3.5 font-semibold rounded-lg text-sm text-white transition-all duration-250 hover:scale-[1.03] hover:shadow-[0_6px_24px_rgba(20,184,166,0.35)]"
              style={{ background: 'linear-gradient(135deg,#0f766e,#14b8a6)' }}
            >
              Know More
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-lg text-sm bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:scale-[1.03] transition-all duration-250"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust pills inside hero */}
          <div className="flex flex-wrap gap-3">
            {['24/7 Support', 'NHS & Private', 'Fast Placement', 'Fully Compliant'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 text-xs text-white/85 font-medium"
              >
                <Check size={11} className="text-teal-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges ─── */
function TrustBadges() {
  const badges = [
    { icon: <Clock size={20} />, label: '24/7 Support', desc: 'Round the clock service' },
    { icon: <Shield size={20} />, label: 'NHS & Private', desc: 'Framework approved' },
    { icon: <Users size={20} />, label: 'Fast Placement', desc: 'Quick turnaround' },
    { icon: <Heart size={20} />, label: 'Dedicated Support', desc: 'Personal consultants' },
  ];
  return (
    <section className="py-0 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3.5 px-6 py-7 hover:bg-teal-50/40 transition-colors duration-200 group">
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-100 transition-colors duration-200">
                {b.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{b.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const reasons = [
    '24/7 support when you need it most',
    'NHS and private healthcare staffing',
    'Expert recruitment consultants',
    'Fast and efficient placements',
    'Tailored workforce solutions',
    'Rigorous screening and compliance',
    'Candidate and client focused approach',
    'Ongoing support throughout the process',
  ];
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <div>
            <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-3">Why MediGlobal</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
              Finding the right healthcare staff<br className="hidden md:block" /> shouldn't be hard.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">
              At MediGlobal, we connect skilled healthcare professionals with organisations that need them. Fast, reliable, and fully compliant. We are a trusted staffing agency serving care homes, hospitals, and healthcare providers throughout the United Kingdom.
            </p>
            <p className="text-sm font-semibold text-teal-700 mb-4">What makes us different?</p>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center">
                    <Check size={12} className="text-teal-600" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-10 pointer-events-none"
              style={{ background: 'linear-gradient(135deg,#14b8a6,#0f766e)' }} />
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-gray-100">
              <img src="/images/service-1.jpg" alt="Healthcare team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Preview ─── */
function ServicesPreview() {
  const services = [
    { icon: <Users size={26} />, title: 'Healthcare Recruitment', desc: 'Connecting skilled professionals with healthcare institutions that need them most.' },
    { icon: <Clock size={26} />, title: 'Locum Staffing', desc: 'Flexible temporary staffing solutions available 24 hours a day, 7 days a week.' },
    { icon: <Shield size={26} />, title: 'Permanent Placement', desc: 'Finding the perfect long-term match for both candidates and healthcare providers.' },
    { icon: <Heart size={26} />, title: 'Care Worker Services', desc: 'Specialized locum care workers delivering exceptional support to private clients.' },
    { icon: <Award size={26} />, title: 'Compliance Support', desc: 'Full compliance handling including DBS checks and training verification.' },
    { icon: <Users size={26} />, title: 'Workforce Solutions', desc: "Tailored staffing strategies to meet your organisation's unique needs." },
  ];
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      {/* Top divider accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-[15px]">
            We provide a wide variety of staffing solutions in both NHS and private healthcare sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg,#0f766e,#14b8a6)' }} />

              <div className="w-13 h-13 w-[52px] h-[52px] bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                {s.icon}
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-2.5">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors text-sm group"
          >
            View All Services <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Candidate / Client Split ─── */
function CandidateClientCTA() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-3">Who We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for Everyone in Healthcare</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {/* Candidates */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] group shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src="/images/split-candidates.jpg" alt="Healthcare professional" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            {/* Bottom-heavy gradient for readability */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,25,35,0.85) 0%, rgba(10,25,35,0.30) 55%, transparent 100%)' }} />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">For Candidates</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Looking for a Job?</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-sm leading-relaxed">
                Find flexible healthcare opportunities with leading NHS and private providers. We support you at every step.
              </p>
              <Link
                to="/candidates"
                className="inline-flex items-center self-start gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg text-sm hover:bg-gray-50 hover:scale-[1.03] transition-all duration-250 shadow"
              >
                Candidates <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Clients */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] group shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src="/images/split-clients.jpg" alt="Healthcare team" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,25,35,0.85) 0%, rgba(10,25,35,0.30) 55%, transparent 100%)' }} />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">For Clients</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Healthcare Staff?</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-sm leading-relaxed">
                Reliable healthcare professionals for your organisation. Temporary and permanent staffing solutions.
              </p>
              <Link
                to="/clients"
                className="inline-flex items-center self-start gap-2 px-5 py-2.5 font-semibold rounded-lg text-sm text-white hover:opacity-90 hover:scale-[1.03] transition-all duration-250 shadow"
                style={{ background: 'linear-gradient(135deg,#0f766e,#14b8a6)' }}
              >
                Clients <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const testimonials = [
    { quote: "MediGlobal made the entire recruitment process seamless. Their team found me the perfect role within days.", name: "Sarah M.", role: "Registered Nurse" },
    { quote: "The level of support we receive from MediGlobal is exceptional. They truly understand our staffing needs.", name: "James T.", role: "Care Home Manager" },
    { quote: "I have worked with many agencies, but MediGlobal stands out for their professionalism and dedication.", name: "Priya K.", role: "Healthcare Assistant" },
  ];
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Partners Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Decorative quote mark */}
              <span className="absolute top-6 right-7 text-6xl leading-none text-teal-100 font-serif select-none">&ldquo;</span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill="#f59e0b" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-7 relative z-10">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3.5 border-t border-gray-50 pt-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#ccfbf1,#99f6e4)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─── */
function ContactCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0d4f47 0%,#0f766e 45%,#0e9485 100%)' }}>
      {/* Subtle diagonal texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

      {/* Soft glow blobs */}
      <div className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5eead4 0%, transparent 70%)' }} />
      <div className="absolute right-[-60px] top-[-60px] w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5eead4 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-teal-300 font-semibold text-xs uppercase tracking-widest mb-4">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">Ready to Get Started?</h2>
        <p className="text-teal-100/80 max-w-2xl mx-auto mb-10 leading-relaxed text-[15px]">
          Whether you are a healthcare professional looking for your next opportunity or an organisation seeking exceptional staff, we are here to help.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://docs.google.com/forms/d/1FehajWJxv6iGCSlBlpHIys1lQeLkTRsIVO5nGT57pIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-teal-800 font-semibold rounded-lg text-sm hover:bg-gray-50 hover:scale-[1.03] transition-all duration-250 shadow-lg"
          >
            Register Now
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-lg text-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:scale-[1.03] transition-all duration-250"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact info row */}
        <div className="flex flex-wrap justify-center gap-8">
          <a href="tel:02039166660" className="flex items-center gap-2 text-teal-200 text-sm hover:text-white transition-colors duration-200">
            <Phone size={15} /> 0203 916 6660
          </a>
          <a href="mailto:info@mediglobal.info" className="flex items-center gap-2 text-teal-200 text-sm hover:text-white transition-colors duration-200">
            <Mail size={15} /> info@mediglobal.info
          </a>
          <a href="https://wa.me/447405040652" className="flex items-center gap-2 text-teal-200 text-sm hover:text-white transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +44 7405 040 652
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <WhyChooseUs />
      <ServicesPreview />
      <CandidateClientCTA />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
