import { Users, Clock, Shield, Heart, Award, FileCheck, Stethoscope, Building2 } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: 'Healthcare Recruitment',
    desc: 'We specialise in recruiting all grades of healthcare professionals including registered nurses, care workers, support workers, and clinical staff for both NHS and private sector organisations.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Locum Staffing',
    desc: 'Our locum staffing service provides flexible temporary healthcare professionals to cover short-term needs, annual leave, sickness absence, and peak demand periods across the UK.',
  },
  {
    icon: <Users size={28} />,
    title: 'Permanent Staffing',
    desc: 'We help healthcare organisations find the right permanent staff for their teams. Our thorough recruitment process ensures a perfect match for both candidate and employer.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Workforce Solutions',
    desc: 'Tailored workforce planning and management solutions designed to help healthcare providers optimise staffing levels, reduce costs, and improve patient care outcomes.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Care Worker Placement',
    desc: 'Specialised placement of compassionate, skilled care workers for residential homes, nursing homes, domiciliary care, and supported living environments.',
  },
  {
    icon: <Shield size={28} />,
    title: 'NHS Staffing Support',
    desc: 'Dedicated NHS framework-compliant staffing services. We work with NHS trusts and organisations to provide reliable, vetted healthcare professionals.',
  },
  {
    icon: <Award size={28} />,
    title: 'Private Healthcare Staffing',
    desc: 'Premium staffing solutions for private hospitals, clinics, care homes, and specialist healthcare facilities across the United Kingdom.',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'Candidate Registration Support',
    desc: 'We guide candidates through the entire registration process, from initial application to compliance checks, training, and first placement.',
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-medium text-sm uppercase tracking-wide mb-2">What We Offer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Our Services</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Comprehensive healthcare staffing solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Healthcare Staff?</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your staffing requirements. We are available 24/7 to help you find the right healthcare professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 hover:scale-[1.03] transition-all duration-300 shadow-lg text-sm">
              Contact Us
            </Link>
            <Link to="/candidates" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 shadow-lg text-sm">
              Register as Candidate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
