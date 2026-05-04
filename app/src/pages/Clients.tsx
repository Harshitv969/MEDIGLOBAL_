import { Check, ArrowRight, Users, Search, Globe, FileCheck } from 'lucide-react';
import { Link } from 'react-router';

const solutions = [
  'Tailored staffing solutions for your organisation',
  'Responsive recruitment support 24/7',
  'Rigorous screening and compliance checks',
  'Temporary and permanent staffing options',
  'Dedicated account management',
  'Fast turnaround on staffing requests',
];

const services = [
  { icon: <Users size={24} />, title: 'Staffing Solutions', desc: 'Reliable and fast-growing staffing solutions for care homes, hospitals, and healthcare providers of all sizes.' },
  { icon: <Search size={24} />, title: 'Permanent Recruitment', desc: 'Comprehensive search and selection process to find the perfect long-term candidates for your team.' },
  { icon: <Globe size={24} />, title: 'International Recruitment', desc: 'Access to a global pool of healthcare professionals ready to relocate and join your organisation.' },
  { icon: <FileCheck size={24} />, title: 'Compliance Management', desc: 'Streamlined compliance process with full transparency. We handle all checks so you don\'t have to.' },
];

export default function Clients() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-medium text-sm uppercase tracking-wide mb-2">For Clients</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Healthcare Staffing Solutions</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Reliable healthcare professionals for your organisation, available 24/7.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <img src="/images/split-clients.jpg" alt="Healthcare team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Finding the right staff for your organisation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MediGlobal provides tailored workforce solutions to healthcare organisations across the UK. We understand the challenges of staffing in the healthcare sector and are committed to delivering reliable, fully vetted professionals when you need them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need temporary cover, permanent staff, or a complete workforce solution, our team of expert consultants is here to help. We work with care homes, hospitals, NHS trusts, and private healthcare providers.
              </p>
              <div className="space-y-3 mb-8">
                {solutions.map((s) => (
                  <div key={s} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-2">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-teal-600 rounded-xl p-8 text-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-teal-600 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-teal-100 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Speak to Our Team</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Let us discuss your staffing requirements and find the right solution for your organisation.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 hover:scale-[1.03] transition-all duration-300 shadow-lg text-sm">
            Contact Us <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
