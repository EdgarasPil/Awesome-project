import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "GBGH's AI customer support has transformed our business. We've seen a 40% increase in customer satisfaction and a 30% reduction in support costs.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stars: 5
    },
    {
      content: "The CRM automation tools have helped us nurture leads more effectively. Our conversion rate has improved by 25% since implementing GBGH.",
      author: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stars: 5
    },
    {
      content: "Our SEO rankings skyrocketed after just 3 months with GBGH. Their AI-driven approach to content optimization is truly revolutionary.",
      author: "Emily Rodriguez",
      position: "Digital Strategist, Elevate Media",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stars: 4
    }
  ];

  const clientLogos = [
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    "https://images.unsplash.com/photo-1614680376739-8360d55bc8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Social Proof & Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about GBGH.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={i < testimonial.stars ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Trusted by innovative companies</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img className="h-12 object-contain" src={logo} alt={`Client logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-indigo-100 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-indigo-800 mb-2">100,000+</div>
          <p className="text-indigo-600">Leads processed through our platform</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
