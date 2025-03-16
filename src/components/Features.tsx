import React from 'react';
import { MessageSquare, Users, BarChart3, Calendar, Bot, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'AI Customer Support',
      description: 'Smart bots handling customer queries 24/7, reducing response time and increasing satisfaction.',
      icon: Bot,
      color: 'bg-blue-500',
    },
    {
      name: 'CRM Integration',
      description: 'Seamlessly automate follow-ups and lead management to ensure no opportunity slips through the cracks.',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      name: 'SEO Optimization',
      description: 'AI-driven keyword strategy and content optimization to boost your search engine rankings.',
      icon: BarChart3,
      color: 'bg-purple-500',
    },
    {
      name: 'Smart Scheduling',
      description: 'Automated appointment booking and meeting scheduling to streamline your business operations.',
      icon: Calendar,
      color: 'bg-yellow-500',
    },
    {
      name: 'Instant Messaging',
      description: 'Real-time communication channels with AI-powered response suggestions for faster engagement.',
      icon: MessageSquare,
      color: 'bg-red-500',
    },
    {
      name: 'Performance Analytics',
      description: 'Comprehensive dashboards and reports to track your business growth and identify opportunities.',
      icon: Zap,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features & Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to automate, optimize, and scale your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${feature.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#demo"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
