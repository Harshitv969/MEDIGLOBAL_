import { Check } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  const values = [
    'Place the right candidate in the right role',
    'Provide tailor-made workforce solutions',
    'Deliver 24-hour on-call service, 365 days a year',
    'Support both NHS and private healthcare providers',
    'Ensure rigorous screening and compliance',
    'Maintain ongoing support throughout the process',
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-medium text-sm uppercase tracking-wide mb-2">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">About MediGlobal</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A leading healthcare staffing agency dedicated to the recruitment of all healthcare professionals.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Your Trusted Healthcare Staffing Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MediGlobal is a leading healthcare staffing agency dedicated to the recruitment of all healthcare professionals. Our mission is to place the right candidate in the right employment for their skills, experience and requirements in the shortest time possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide tailor-made workforce solutions to our clients and an amazing service to our candidates. We have a team of expert consultants providing staffing solutions for the NHS and private healthcare providers on a 24-hour on-call service for 365 days a year.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide bespoke recruitment solutions to both clients who contact us to fill their vacancies and locum and permanent staff that work for us. We are delighted that our dedicated team has received nothing but positive feedback from clients and candidates.
              </p>
              <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-teal-900/20 text-sm">
                Get in Touch
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <img src="/images/service-1.jpg" alt="Healthcare team meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <img src="/images/split-clients.jpg" alt="Healthcare professionals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-2">Our Approach</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Committed to Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At MediGlobal, we take pride in our extensive network of skilled and compassionate healthcare professionals. Whether you require temporary support during busy periods, short-term assistance, or coverage for unexpected situations, we have a pool of qualified caregivers ready to step in and provide the highest standard of care.
              </p>
              <ul className="space-y-3 mb-6">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
              <p className="text-teal-200 text-sm mt-1">On-Call Support</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">99+</p>
              <p className="text-teal-200 text-sm mt-1">Healthcare Partners</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">365</p>
              <p className="text-teal-200 text-sm mt-1">Days a Year</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-teal-200 text-sm mt-1">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
