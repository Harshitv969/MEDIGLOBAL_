import { Check, ArrowRight, FileText, ClipboardCheck, Briefcase, HeartHandshake } from 'lucide-react';

const benefits = [
  'Access to NHS and private sector opportunities',
  'Flexible working hours and shifts',
  'Competitive pay rates',
  'Dedicated consultant support',
  'Fast and efficient registration process',
  'Ongoing training and development',
  '24/7 on-call support',
  'Weekly pay available',
];

const steps = [
  { icon: <FileText size={24} />, title: 'Register', desc: 'Complete our simple online registration form with your details and experience.' },
  { icon: <ClipboardCheck size={24} />, title: 'Compliance', desc: 'Our team will guide you through all compliance checks and documentation.' },
  { icon: <Briefcase size={24} />, title: 'Get Matched', desc: 'We will match you with roles that fit your skills, experience, and preferences.' },
  { icon: <HeartHandshake size={24} />, title: 'Start Working', desc: 'Begin your placement with full support from our dedicated team.' },
];

export default function Candidates() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-medium text-sm uppercase tracking-wide mb-2">For Candidates</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Find Your Perfect Role</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Join MediGlobal and access flexible healthcare opportunities across the UK.
          </p>
        </div>
      </div>

      {/* Looking for a job hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Looking for a <span className="text-teal-600">Job</span>?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you are an experienced healthcare professional or just starting your career, MediGlobal can help you find the perfect role. We work with leading NHS trusts and private healthcare providers across the United Kingdom.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
              <a
                href="https://docs.google.com/forms/d/1FehajWJxv6iGCSlBlpHIys1lQeLkTRsIVO5nGT57pIg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-teal-900/20 text-sm"
              >
                Register Now <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <img src="/images/split-candidates.jpg" alt="Healthcare professional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-2">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our registration process is straightforward with guaranteed assistance at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="text-xs text-teal-600 font-bold tracking-widest uppercase mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Register?</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Take the first step towards your next healthcare opportunity. Register with MediGlobal today.
          </p>
          <a
            href="https://docs.google.com/forms/d/1FehajWJxv6iGCSlBlpHIys1lQeLkTRsIVO5nGT57pIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 hover:scale-[1.03] transition-all duration-300 shadow-lg text-sm"
          >
            Register Now <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
