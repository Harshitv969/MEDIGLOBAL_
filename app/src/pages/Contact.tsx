import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '0203 916 6660',
    href: 'tel:02039166660',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'info@mediglobal.info',
    href: 'mailto:info@mediglobal.info',
  },
  {
    icon: <MessageCircle size={22} />,
    label: 'WhatsApp',
    value: '+44 7405 040 652',
    href: 'https://wa.me/447405040652',
  },
  {
    icon: <Clock size={22} />,
    label: 'Availability',
    value: '24/7, 365 Days a Year',
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-medium text-sm uppercase tracking-wide mb-2">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We are here to help. Reach out to our team for any enquiries.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are a healthcare professional seeking your next opportunity or an organisation looking for exceptional staff, our team is ready to assist you. We are available around the clock to answer your questions.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-medium hover:text-teal-700 transition-colors" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-teal-50/50 rounded-xl border border-teal-100 shadow-sm">
                <h3 className="text-lg font-bold text-teal-900 mb-2">Register Now</h3>
                <p className="text-sm text-teal-700 mb-4">
                  Ready to take the next step? Register with us to access healthcare opportunities or request staffing support.
                </p>
                <a
                  href="https://docs.google.com/forms/d/1FehajWJxv6iGCSlBlpHIys1lQeLkTRsIVO5nGT57pIg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-teal-900/20 text-sm"
                >
                  Register Online
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="0bd3c842-8b67-41dd-892f-dac1b6309e6d"
                />
                <input type="hidden" name="subject" value="New MediGlobal Contact Form" />
                <input type="hidden" name="from_name" value="MediGlobal Website" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-gray-50/50 focus:bg-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-gray-50/50 focus:bg-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-gray-50/50 focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-gray-50/50 focus:bg-white"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                  <select
                    name="userType"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-gray-50/50 focus:bg-white appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Healthcare Professional (Candidate)">Healthcare Professional (Candidate)</option>
                    <option value="Healthcare Organisation (Client)">Healthcare Organisation (Client)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-shadow bg-gray-50/50 focus:bg-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-teal-900/20 text-sm mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}