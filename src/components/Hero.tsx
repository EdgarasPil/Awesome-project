import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Automate. Optimize. Scale.
            </h1>
            <p className="mt-6 max-w-xl text-xl text-indigo-100">
              AI-powered customer support, CRM automation & SEO for business growth.
            </p>
            <div className="mt-10 flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
              >
                Get a Free Consultation
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 bg-opacity-60 hover:bg-opacity-70 transition-colors"
              >
                Start Automating Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm3.707 10.707l-5 5a.999.999 0 01-1.414 0 .999.999 0 010-1.414L11.586 10 7.293 5.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">AI Demo</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 bg-white bg-opacity-20 rounded"></div>
                <div className="h-2 bg-white bg-opacity-20 rounded w-5/6"></div>
                <div className="h-2 bg-white bg-opacity-20 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
