import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small businesses just getting started with automation.',
      features: [
        'AI Customer Support (Basic)',
        'CRM Integration (1 platform)',
        'Basic SEO Optimization',
        '5,000 AI interactions/month',
        'Email Support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$249',
      description: 'Ideal for growing businesses looking to scale their operations.',
      features: [
        'Advanced AI Customer Support',
        'CRM Integration (3 platforms)',
        'Comprehensive SEO Strategy',
        '25,000 AI interactions/month',
        'Priority Support',
        'Performance Analytics',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations with complex needs.',
      features: [
        'Custom AI Solutions',
        'Unlimited CRM Integrations',
        'Enterprise SEO & Content Strategy',
        'Unlimited AI interactions',
        'Dedicated Account Manager',
        'Custom Reporting & Analytics',
        'API Access',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                plan.popular ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-xl text-gray-500">/month</span>}
                </div>
                <p className="mt-5 text-gray-600">{plan.description}</p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.popular
                        ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                        : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-indigo-900">Limited Time Offer</h3>
            <p className="mt-2 text-indigo-700">
              Sign up today and get 20% off your first 3 months on any plan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
