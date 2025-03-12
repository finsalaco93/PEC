import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';

const jobListings = [
  {
    id: 1,
    title: "Senior Electrical Engineer",
    location: "Chicago, IL",
    type: "Full-time",
    description: "We're seeking an experienced Senior Electrical Engineer to lead the design and implementation of complex electrical systems for commercial and industrial projects.",
    responsibilities: [
      "Design and develop electrical systems for commercial and industrial projects",
      "Create detailed electrical drawings and specifications",
      "Perform electrical load calculations and equipment sizing",
      "Conduct field surveys and inspections to evaluate existing conditions",
      "Collaborate with project teams to ensure coordinated designs",
      "Review and approve shop drawings and submittals"
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering",
      "Professional Engineer (PE) license",
      "7+ years of experience in electrical design for commercial/industrial projects",
      "Proficiency in AutoCAD and Revit",
      "Experience with building codes and standards",
      "Strong communication and leadership skills"
    ]
  },
  {
    id: 2,
    title: "Project Manager",
    location: "Denver, CO",
    type: "Full-time",
    description: "Join our team as a Project Manager overseeing commercial electrical projects from inception to completion, ensuring quality, timeliness, and client satisfaction.",
    responsibilities: [
      "Manage multiple electrical projects simultaneously",
      "Develop and maintain project schedules and budgets",
      "Coordinate with clients, contractors, and internal teams",
      "Oversee quality control and ensure compliance with codes and standards",
      "Identify and mitigate project risks",
      "Prepare and present project status reports"
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering, Construction Management, or related field",
      "5+ years of experience in electrical project management",
      "Strong understanding of electrical systems and construction processes",
      "Excellent leadership and client relationship skills",
      "Proficiency in project management software",
      "PMP certification preferred"
    ]
  },
  {
    id: 3,
    title: "Electrician",
    location: "Austin, TX",
    type: "Full-time",
    description: "We're looking for skilled Electricians to join our team in installing, maintaining, and troubleshooting electrical systems for commercial and industrial facilities.",
    responsibilities: [
      "Install, maintain, and repair electrical systems and equipment",
      "Read and interpret electrical plans and schematics",
      "Troubleshoot and diagnose electrical problems",
      "Ensure all work complies with relevant codes and safety standards",
      "Collaborate with other trades and team members",
      "Complete accurate documentation of work performed"
    ],
    requirements: [
      "Journeyman or Master Electrician license",
      "3+ years of commercial/industrial electrical experience",
      "Knowledge of NEC and local electrical codes",
      "Experience with power distribution, lighting, and control systems",
      "Strong problem-solving skills",
      "Valid driver's license and clean driving record"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-dark-600 text-white">
          <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Discover rewarding career opportunities at VoltEdge and be part of a team dedicated to excellence in electrical solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Why Work With Us"
              eyebrow="Build Your Career at VoltEdge"
              description="Join a team that values innovation, professional growth, and a positive work environment."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Professional Growth",
                  description: "We invest in our team members' development through ongoing training, certifications, and advancement opportunities.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                {
                  title: "Innovative Projects",
                  description: "Work on diverse and challenging electrical projects using cutting-edge technologies and methodologies.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                },
                {
                  title: "Competitive Benefits",
                  description: "Enjoy comprehensive benefits including health insurance, retirement plans, paid time off, and performance bonuses.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "Collaborative Environment",
                  description: "Be part of a supportive team that values collaboration, knowledge sharing, and diverse perspectives.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                },
                {
                  title: "Work-Life Balance",
                  description: "We promote a healthy balance between professional responsibilities and personal life, with flexible scheduling options.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "Community Involvement",
                  description: "Participate in community service initiatives and industry events that make a positive impact beyond our projects.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-electric-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title="Current Openings"
              eyebrow="Explore Available Positions"
              description="Find your next career opportunity with VoltEdge. We're looking for talented individuals to join our growing team."
            />
            
            <div className="mt-12 lg:flex">
              {/* Job Listings */}
              <motion.div 
                className="lg:w-1/2 lg:pr-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {jobListings.map((job) => (
                  <motion.div 
                    key={job.id} 
                    className={`mb-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${selectedJob?.id === job.id ? 'border-l-4 border-electric-500' : ''}`}
                    variants={item}
                    onClick={() => setSelectedJob(job)}
                  >
                    <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-electric-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1 text-electric-500" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <button className="text-electric-600 font-medium hover:text-electric-700 transition-colors flex items-center">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Job Details */}
              <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                {selectedJob ? (
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">{selectedJob.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-electric-500" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1 text-electric-500" />
                        {selectedJob.type}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3">Job Description</h4>
                      <p className="text-gray-700">{selectedJob.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((item, index) => (
                          <li key={index} className="flex">
                            <Check size={18} className="mr-2 text-electric-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((item, index) => (
                          <li key={index} className="flex">
                            <Check size={18} className="mr-2 text-electric-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-electric-600 hover:bg-electric-700 text-white py-3 rounded-md font-medium transition-colors">
                      Apply Now
                    </button>
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="text-gray-400 mb-6">
                      <Briefcase size={64} className="mx-auto opacity-50" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Job Details</h3>
                    <p className="text-gray-600">Select a position from the list to view detailed information.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Our Hiring Process"
              eyebrow="What to Expect When You Apply"
              description="We've designed a transparent and efficient hiring process to find the best talent for our team."
            />
            
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-electric-200"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {[
                    { 
                      phase: "01", 
                      title: "Application Review", 
                      description: "Our HR team carefully reviews your application and resume to assess your qualifications and experience." 
                    },
                    { 
                      phase: "02", 
                      title: "Initial Phone Interview", 
                      description: "A brief phone conversation to discuss your background, career goals, and answer any questions you might have." 
                    },
                    { 
                      phase: "03", 
                      title: "Technical Assessment", 
                      description: "Depending on the role, you may complete a technical assessment or project to demonstrate your skills." 
                    },
                    { 
                      phase: "04", 
                      title: "In-Person Interview", 
                      description: "Meet with our team to discuss your experience in detail and get to know your potential colleagues." 
                    },
                    { 
                      phase: "05", 
                      title: "Offer & Onboarding", 
                      description: "Successful candidates receive a job offer followed by a comprehensive onboarding program." 
                    }
                  ].map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="z-10 mb-8 md:mb-0 flex-1 md:p-6">
                        <div className={`bg-gray-50 p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="inline-block px-3 py-1 bg-electric-100 text-electric-600 rounded-full text-sm font-medium mb-3">
                            Step {step.phase}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="z-10 w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center border-4 border-white"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-electric-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              If you don't see a position that matches your skills but are interested in joining VoltEdge, send us your resume. We're always looking for talented individuals.
            </p>
            <a 
              href="mailto:careers@voltedge.com" 
              className="inline-block bg-white text-electric-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Contact Our HR Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
