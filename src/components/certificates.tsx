import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Python for Data Science",
      issuer: "IBM ",
      date: "05/04/2023",
      description: "Comprehensive course on Python programming for data science, covering libraries like Pandas, NumPy, and Matplotlib.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
      credentialUrl: "https://www.credly.com/badges/af677d87-10c8-42db-a953-da802fec90c9/linked_in_profile"
    },
    {
      title: "Business Analysis Basics",
      issuer: "Simplilearn",
      date: "02/03/2025",
      description: "Fundamentals of business analysis, including requirements gathering, stakeholder management, and process modeling.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800",
      credentialUrl: "https://www.linkedin.com/posts/edwin-joel-a80800234_businessanalysis-certification-learning-activity-7292528481773441024-__er?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADp-5gABMahUyO6eJa4rF7rgnJxy2grt2Ok"
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Deloitte - Forage",
      date: "29/03/2025",
      description: "Simulated experience in data analytics projects, focusing on real-world business problems and solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_szFpk9dtFc7zuERi4_1743228872286_completion_certificate.pdf"
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Tata Group - Forage",
      date: "05/03/2025",
      description: "Hands-on experience in data visualization techniques to transform complex data into actionable business insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_mY6rup92tfifz6zN6_1741186912008_completion_certificate.pdf"
    },
    {
      title: "AWS APAC - Solutions Architecture Job Simulation",
      issuer: "Amazon Web Services - Forage",
      date: "22/02/2025",
      description: "Simulated experience in AWS solutions architecture, focusing on cloud-based solutions and best practices.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_KF85WBHe7rhBda5Gi_1740233211129_completion_certificate.pdf"
    },
    {
      title: "Linux for Devops Engineers and Developers",
      issuer: "Udemy",
      date: "16/03/2025",
        description: "Master Linux fundamentals, command line, and system administration for DevOps and development environments.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      credentialUrl: "https://www.udemy.com/certificate/UC-b595a1a4-1b68-4fdc-9bfa-59804df62861/"
    },
    {
      title: "The Git & Github Bootcamp: Master Git In 2025",
      issuer: "Udemy",
      date: "27/11/2024",
      description: "Comprehensive course on Git and GitHub, covering version control, collaboration, and best practices for developers.",
      image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header-1536x864.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-7f47ee12-c433-4c3d-b7ef-b17fe66e07db/"
    },
    {
      title: " Facial Recognition with YOLOv7 : Best Deep Learning Project ",
      issuer: "Udemy",
      date: "16/01/2025",
      description: "Hands-on project using YOLOv7 for facial recognition, leveraging deep learning techniques for real-time applications.",
      image: "https://img-c.udemycdn.com/course/750x422/5759006_ef72_3.jpg",
      credentialUrl: "https://www.udemy.com/certificate/UC-385cc36c-88ac-4e71-9995-af10b1598cbf/"
    },
    {
      title: "TCS MasterCraft DataPlus",
      issuer: "Tcs ion",
      date: "12/07/2025",
      description: "TCS MasterCraft DataPlus is a comprehensive data management tool that enables efficient data integration, transformation, and analysis for business intelligence.",
      image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-776503,resizemode-75,msid-99386822/tech/information-tech/tcs-ion-wins-oxford-admissions-test-mandate.jpg",
      credentialUrl: "https://g05.tcsion.com"
    }
  ];

  return (
    <div className="py-20 bg-[#0f172a]" id="certificates">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <h2 className="code-font text-2xl text-purple-400">{'</certificates>'}</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-purple-400 to-transparent" />
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Professional certifications and achievements that validate my expertise in data science, machine learning, and analytics.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-[#151C2C] rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-400/30 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151C2C] via-transparent to-transparent" />
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4 p-2 bg-purple-500/20 backdrop-blur-sm rounded-lg">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={14} />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                <div className="pt-4">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                  >
                    <span className="text-sm font-medium">View Certificate</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Certifications" },
            { number: "7", label: "Specializations" },
            { number: "3+", label: "Years Learning" },
            { number: "100%", label: "Completion Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;