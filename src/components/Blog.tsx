import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface Post {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const Blog: React.FC = () => {
  const posts: Post[] = [
    {
      title: '10 Ways AI Can Transform Your Customer Support',
      excerpt: 'Discover how artificial intelligence is revolutionizing customer service and how you can implement it in your business.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      date: 'Jun 15, 2023',
      author: 'Alex Morgan',
      category: 'AI Support',
    },
    {
      title: 'The Ultimate Guide to CRM Automation',
      excerpt: 'Learn how to set up automated workflows in your CRM to nurture leads and close more deals without manual intervention.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      date: 'May 22, 2023',
      author: 'Jessica Chen',
      category: 'CRM',
    },
    {
      title: 'SEO in 2023: How AI is Changing the Game',
      excerpt: 'Explore the latest SEO trends and how artificial intelligence is helping businesses achieve better search rankings.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      date: 'Apr 10, 2023',
      author: 'Michael Roberts',
      category: 'SEO',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            SEO Blog & Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in AI, automation, and SEO to keep your business ahead of the curve.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {post.category}
                  </span>
                </div>
                <a href="#" className="block">
                  <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                </a>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Free AI Strategy Guide
              </h3>
              <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                Download our exclusive guide on implementing AI automation in your business and start seeing results in 30 days.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="sm:flex">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
                >
                  Download Free Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
