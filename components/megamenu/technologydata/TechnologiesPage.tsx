import React, { useEffect } from 'react';

const TechnologiesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const techStack = [
    { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", ".NET Core", "Go"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"] },
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"] },
    { category: "AI & Data", items: ["TensorFlow", "PyTorch", "Spark", "Hadoop", "Tableau"] }
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
       <div className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Technology Stack</h1>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               We leverage the latest and most robust technologies to build future-proof solutions for our clients.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {techStack.map((stack, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                   <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">{stack.category}</h3>
                   <div className="flex flex-wrap gap-3">
                      {stack.items.map((tech, tIdx) => (
                         <span key={tIdx} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors">
                            {tech}
                         </span>
                      ))}
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default TechnologiesPage;