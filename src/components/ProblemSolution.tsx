import React from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why GBGH?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We solve the most common business growth challenges with AI-powered automation
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Pain Points</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Slow customer response times leading to lost sales</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Manual lead follow-up causing missed opportunities</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Low SEO rankings and poor online visibility</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Inefficient data analysis and decision making</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 AI-powered customer support that never sleeps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Automated CRM workflows that nurture every lead</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Data-driven SEO strategies that boost rankings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AI analytics that turn data into actionable insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
