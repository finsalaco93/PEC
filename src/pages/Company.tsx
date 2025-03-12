
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import { Clock, CheckCircle, Users, Award, Target, Heart } from 'lucide-react';

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '500+', label: 'Completed Projects' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <CheckCircle className="text-electric-600" size={24} />,
      title: 'Quality',
      description: 'We deliver exceptional workmanship and use premium materials to ensure lasting results.',
    },
    {
      icon: <Clock className="text-electric-600" size={24} />,
      title: 'Reliability',
      description: 'We commit to timelines and budgets, ensuring projects are completed as promised.',
    },
    {
      icon: <Users className="text-electric-600" size={24} />,
      title: 'Teamwork',
      description: 'Our collaborative approach ensures seamless coordination and optimal outcomes.',
    },
    {
      icon: <Target className="text-electric-600" size={24} />,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver cutting-edge electrical solutions.',
    },
    {
      icon: <Award className="text-electric-600" size={24} />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from planning to execution.',
    },
    {
      icon: <Heart className="text-electric-600" size={24} />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical business practices.',
    },
  ];

  const timelines = [
    {
      year: '2005',
      title: 'VoltEdge Founded',
      description: 'Started as a small team of three licensed electricians focused on residential projects.',
    },
    {
      year: '2008',
      title: 'Commercial Expansion',
      description: 'Expanded services to include commercial electrical solutions and grew to a team of 15.',
    },
    {
      year: '2012',
      title: 'Regional Recognition',
      description: 'Received our first industry award for excellence in commercial electrical contracting.',
    },
    {
      year: '2015',
      title: 'Industrial Division Launch',
      description: 'Created a specialized division for industrial electrical systems and solutions.',
    },
    {
      year: '2018',
      title: 'Renewable Energy Integration',
      description: 'Began offering renewable energy solutions including solar installations for commercial clients.',
    },
    {
      year: '2023',
      title: 'Innovation Center',
      description: 'Opened a new headquarters with dedicated training and innovation facilities.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-dark-700 to-dark-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-800/30 to-dark-700/40 mix-blend-multiply"></div>
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-block bg-electric-600/90 backdrop-blur-md px-4 py-1 rounded-md mb-6 font-medium">
                About Our Company
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Powering Success Through Electrical Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Since 2005, VoltEdge has been a leading provider of commercial electrical solutions, driven by innovation and committed to excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-gray-50 shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-electric-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                eyebrow="Our Story"
                title="From Small Beginnings to Industry Leadership"
                description="VoltEdge has evolved from a modest electrical contracting company to a regional leader in commercial electrical solutions."
              />
              
              <p className="mb-6 text-gray-600">
                Founded in 2005 by three master electricians with a shared vision of excellence, VoltEdge began by serving local businesses with basic electrical needs. As our reputation for quality and reliability grew, so did our team and capabilities.
              </p>
              
              <p className="mb-6 text-gray-600">
                Today, we're proud to be one of the most trusted commercial electrical contractors in the region, with a team of over 50 dedicated professionals serving clients across multiple industries. Our growth is a testament to our unwavering commitment to quality workmanship, safety, and customer satisfaction.
              </p>
              
              <p className="text-gray-600">
                Throughout our journey, we've maintained our founding principles while embracing innovation and expanding our expertise to meet the evolving needs of our clients.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="VoltEdge team members" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-electric-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Est. 2005</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <SectionHeader 
              eyebrow="Our Purpose"
              title="Mission & Vision"
              description="Guided by a clear purpose and forward-thinking vision, we strive to lead the industry in electrical excellence."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-dark-700">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional electrical solutions that empower businesses to operate efficiently, safely, and sustainably while exceeding industry standards and client expectations.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-electric-600 text-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-100">
                  To be the most trusted and innovative electrical contractor, leading the industry in quality, safety, and sustainable electrical solutions while creating opportunities for our team members and positive impact in our communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <SectionHeader 
            eyebrow="Our Principles"
            title="Core Values"
            description="These core values guide our decisions and actions every day, ensuring we deliver the best possible service to our clients."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="p-3 bg-electric-50 rounded-full inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section bg-gray-50">
          <SectionHeader 
            eyebrow="Our Journey"
            title="Company Timeline"
            description="Explore key milestones in our journey from a small startup to an industry leader in commercial electrical services."
            centered
          />
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-electric-200"></div>
            
            <div className="space-y-12">
              {timelines.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between flex-col md:flex-row`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-1'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
                      <span className="text-electric-600 font-bold block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-electric-500 rounded-full w-6 h-6 border-4 border-white"></div>
                  </div>
                  
                  <div className="md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
