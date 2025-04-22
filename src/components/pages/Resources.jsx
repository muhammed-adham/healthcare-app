import React from 'react';
import { Link } from 'react-router';
import { FaBook, FaNewspaper, FaVideo, FaFileAlt } from 'react-icons/fa';
import Banner from '../common/Banner';
import useScrollTop from '../../hooks/useScrollTop';

const Resources = () => {
  const scrollToTop = useScrollTop();
  
  const articles = [
    {
      id: 1,
      title: 'Understanding Your Health Insurance',
      category: 'Insurance',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Preventive Care: Why It Matters',
      category: 'Preventive Care',
      date: 'March 10, 2024',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Managing Chronic Conditions',
      category: 'Chronic Care',
      date: 'March 5, 2024',
      readTime: '6 min read',
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'Health Education Videos',
      icon: <FaVideo className="text-4xl text-primary" />,
      description: 'Watch educational videos about various health topics',
    },
    {
      id: 2,
      title: 'Medical Forms',
      icon: <FaFileAlt className="text-4xl text-primary" />,
      description: 'Download and fill out necessary medical forms',
    },
    {
      id: 3,
      title: 'Health Library',
      icon: <FaBook className="text-4xl text-primary" />,
      description: 'Access our comprehensive health information database',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="Resources"
        subtitle="Access healthcare information and educational materials"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Articles Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Latest Articles</h2>
            <Link
              to="/resources/articles"
              onClick={scrollToTop}
              className="text-primary hover:text-primary-600 font-medium"
            >
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <FaNewspaper className="mr-2" />
                  {article.readTime}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Available Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources; 