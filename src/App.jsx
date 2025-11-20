import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, User, Briefcase, FolderOpen, Mail, X, Minus, 
  Maximize2, Github, Linkedin, Globe, Cpu, Code, 
  ChevronRight, Wifi, Battery, Search, Command, LayoutGrid,
  ArrowLeft, Signal, Phone, Send, Delete, Calendar, Clock, CheckCircle, ChevronDown, Minimize2, Sparkles, MessageSquare, GraduationCap, BookOpen, Download, Menu
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- CONFIGURATION ---
// ⚠️ REPLACE THIS WITH YOUR ACTUAL GEMINI API KEY
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE"; 

// --- SYSTEM DATA ---
const SYSTEM_DATA = {
  profile: {
    name: "Anurag",
    role: "System Engineer @ TCS",
    email: "maurya1985anurag@gmail.com",
    phone: "+918707883130",
    location: "New Delhi, India",
    about: "Backend specialist transforming legacy systems into scalable microservices. Expert in Java Spring Boot, Azure Cloud, and Data Structures.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag&backgroundColor=b6e3f4&clothing=blazerAndShirt",
    social: {
      linkedin: "https://www.linkedin.com/in/anurag-91a137203/",
      github: "https://github.com/nigdifg" 
    }
  },
  experience: [
    {
      id: 1,
      company: "Tata Consultancy Services",
      role: "System Engineer - Backend",
      date: "Sept 2024 - Present",
      location: "New Delhi",
      type: "Full-time",
      points: [
        "Migrated legacy Talend ETL jobs to scalable microservices using ADF and Java Spring Boot, ensuring high performance and reliability.",
        "Designed RESTful APIs and AOP for logging and exception handling, reducing code duplication by 25%.",
        "Monitored and debugged Spring Boot applications with Azure AppInsights, Log Analytics, and Kubernetes dashboards, reducing incident resolution time by 20%.",
        "Integrated Redis lookup and Azure Cosmos DB (SQL API) to manage large datasets operations within backend services boosting application and responsiveness by 40% for real-time analytics.",
        "Collaborated with cross-functional teams to gather requirements and deliver backend solutions; performed SQL query optimization and data modeling.",
        "Built and optimized 10+ ADF pipelines, enabling reusable components, efficient data extraction, transformation, resolving critical production failures and loading across systems."
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      company: "Logitok",
      role: "Full Stack Developer",
      date: "June 2024 - Aug 2024",
      location: "Chennai",
      type: "Internship",
      points: [
        "Created dynamic dashboards, charts, graphs, Map and an admin portal.",
        "Implemented routing using React with params, useNavigation, and routes; managed backend with MongoDB and client-side data with IndexedDB."
      ],
      color: "bg-purple-500"
    },
    {
      id: 3,
      company: "Carikture",
      role: "Web Developer",
      date: "Apr 2022 - June 2022",
      location: "Ghaziabad",
      type: "Internship",
      points: [
        "Orchestrated hands-on experience in JavaScript, Tailwind CSS, and other web technologies including DOM manipulation and javascript object model.",
        "Developed a web application utilizing canvas and front-end structures, enhancing user interactivity and responsiveness."
      ],
      color: "bg-orange-500"
    }
  ],
  education: [
    {
        id: 4,
        company: "KIIT University",
        role: "B.Tech in Information Technology",
        date: "2020 - 2024",
        location: "Bhubaneswar",
        type: "Education",
        points: [
            "Graduated with 9.03 CGPA.",
            "Relevant Coursework: Data Structures, Database Management, Operating Systems, OOP."
        ],
        color: "bg-green-500"
    }
  ],
  projects: [
    {
      title: "Brain Busters",
      icon: "🧠",
      desc: "Interactive puzzle app assessing critical thinking.",
      tech: "React.js, Redux, Firebase, Material UI",
      points: [
          "Designed an interactive Puzzle assessing the user's decision-making and critical thinking abilities and Activity Dashboard to display performance metrics.",
          "Tracked time for clues and accuracy and Admin Panel for user performance."
      ],
      status: "Live"
    },
    {
      title: "My-Diary",
      icon: "📔",
      desc: "A MERN Full-Stack Poetry Blogging Application.",
      tech: "React.js, Javascript, MongoDB",
      points: [
          "Enabled users to post and read poetry, as well as leave comments.",
          "Provided users with the ability to authorization (JSON Web token), create, edit, and delete their own poetry, and comment on others' poetry."
      ],
      status: "GitHub"
    }
  ],
  skills: {
    languages: ["C/C++", "Java", "SQL", "Javascript"],
    frameworks: ["Spring Boot", "React.js"],
    tools: ["Azure Data Factory", "Linux", "Python", "GitHub", "Node.js", "Talend studio"]
  }
};

// --- COMPONENTS ---

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 md:h-8 bg-black/20 backdrop-blur-xl border-b border-white/5 text-white flex items-center justify-between px-4 md:px-4 text-xs select-none fixed top-0 w-full z-50 shadow-sm">
      <div className="hidden md:flex items-center gap-4">
        <span className="font-bold text-blue-400">Anurag's OS</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">Programmer</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">Developer</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">Learner</span>
      </div>

      <div className="md:hidden flex w-full items-center justify-between relative">
         <span className="font-semibold opacity-0">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
         <span className="absolute left-1/2 transform -translate-x-1/2 font-bold text-blue-400 text-sm tracking-wide">Anurag's OS</span>
         <div className="flex items-center gap-1 opacity-80">
            <Signal size={14} />
            <Wifi size={14} />
            <Battery size={14} />
         </div>
      </div>

      <div className="hidden md:flex items-center gap-3 md:gap-4">
        <div className="flex items-center gap-1 md:gap-2 opacity-80">
          <Wifi size={14} />
          <Battery size={14} />
        </div>
        <span className="hidden md:inline">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

const Window = ({ app, onClose, onMinimize, isFocused, onFocus, onMaximizeToggle }) => {
  const isMobile = window.innerWidth < 768; 
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    const newState = !isMaximized;
    setIsMaximized(newState);
    if (onMaximizeToggle) onMaximizeToggle(newState);
  };

  const windowVariants = {
    initial: { scale: isMobile ? 0.95 : 0.9, opacity: 0, y: isMobile ? 20 : 20, borderRadius: "2rem" },
    animate: (maximized) => ({ 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      borderRadius: maximized || isMobile ? "0rem" : "0.75rem",
      width: maximized ? "100vw" : (isMobile ? "100%" : "800px"),
      height: maximized ? "100vh" : (isMobile ? "100%" : "600px"),
      top: maximized ? 0 : (isMobile ? 0 : 80),
      left: maximized ? 0 : (isMobile ? 0 : 80),
    }),
    exit: { scale: isMobile ? 0.95 : 0.9, opacity: 0, y: isMobile ? 20 : 20, borderRadius: "2rem" }
  };

  return (
    <motion.div
      custom={isMaximized}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={windowVariants}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      drag={!isMobile && !isMaximized}
      dragMomentum={false}
      onPointerDown={onFocus}
      className={`
        fixed md:absolute 
        ${isMobile ? 'inset-0 z-40 bg-white text-slate-900' : 'bg-[#1c1c1c]/95 border border-white/10 shadow-2xl'}
        backdrop-blur-xl overflow-hidden flex flex-col
        ${isFocused && !isMobile ? 'z-40 ring-1 ring-white/20' : ''}
        ${!isMobile && !isFocused ? 'z-10 opacity-90' : ''}
        ${isMaximized ? 'z-50 !m-0 !fixed' : ''}
      `}
    >
      {/* Title Bar */}
      <div className={`flex items-center justify-between px-4 cursor-grab active:cursor-grabbing 
        ${isMobile ? 'bg-slate-100 pt-safe-top border-b border-slate-200 h-auto pb-2' : 'bg-white/5 border-b border-white/5 h-12'}`} 
        onDoubleClick={!isMobile ? toggleMaximize : undefined}
      >
        
        {/* Mobile Back Button - Increased Margin Top */}
        {isMobile && (
          <button onClick={onClose} className="p-2 -ml-2 text-blue-600 flex items-center gap-1 active:bg-slate-200 rounded-lg transition-colors mt-8"> 
            <ArrowLeft size={24} /> <span className="text-lg font-medium">Back</span>
          </button>
        )}

        {/* Desktop Controls */}
        {!isMobile && (
          <div className="flex items-center gap-2 group">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-black/50 hover:text-black">
                <X size={8} className="opacity-0 group-hover:opacity-100" />
            </button>
            <button onClick={onMinimize} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-black/50 hover:text-black">
                <Minus size={8} className="opacity-0 group-hover:opacity-100" />
            </button>
            <button onClick={toggleMaximize} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-black/50 hover:text-black">
                {isMaximized ? <Minimize2 size={8} className="opacity-0 group-hover:opacity-100" /> : <Maximize2 size={8} className="opacity-0 group-hover:opacity-100" />}
            </button>
          </div>
        )}

        {/* Window Title - Hidden on Mobile for cleaner look, or adjust spacing if needed */}
        {!isMobile && (
          <div className="text-sm font-medium text-gray-400 flex items-center gap-2 select-none">
             {app.icon} {app.title}
          </div>
        )}
        
        {/* Spacer */}
        <div className="w-10"></div>
      </div>

      <div className={`flex-1 overflow-y-auto custom-scrollbar p-0 relative ${isMobile ? 'bg-slate-50' : 'bg-[#0f0f0f]'}`}>
        {app.content}
      </div>
    </motion.div>
  );
};

// --- APP CONTENTS ---

const ResumeApp = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [expandedExp, setExpandedExp] = useState(null);
    const [expandedProj, setExpandedProj] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleExp = (id) => setExpandedExp(expandedExp === id ? null : id);
    const toggleProj = (idx) => setExpandedProj(expandedProj === idx ? null : idx);

    const MenuButton = ({ id, label, icon: Icon }) => (
      <button 
        onClick={() => {
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }}
        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all 
        ${activeSection === id 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'text-gray-500 md:text-gray-400 hover:bg-gray-100 md:hover:bg-white/5 hover:text-blue-600 md:hover:text-white'
        }`}
      >
        <Icon size={18} />
        <span className="font-medium">{label}</span>
        {activeSection === id && <ChevronRight size={16} className="ml-auto" />}
      </button>
    );

    return (
      <div className="flex flex-col md:flex-row h-full bg-white text-slate-800 overflow-hidden relative">
        
        {/* Mobile Header / Menu Toggle - Added margin top for spacing */}
        <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between z-20 sticky top-0 shadow-sm">
            <div className="flex items-center gap-3">
                <img src={SYSTEM_DATA.profile.avatar} className="w-10 h-10 rounded-full border border-slate-200" />
                <div>
                    <h3 className="font-bold text-slate-900 text-sm">{SYSTEM_DATA.profile.name}</h3>
                    <p className="text-xs text-blue-600">{SYSTEM_DATA.profile.role}</p>
                </div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-100 rounded-lg text-slate-600">
                {isMobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`
            md:w-72 bg-white md:bg-[#181818] border-r border-white/5 p-6 flex flex-col gap-6 md:h-full z-10
            fixed md:static inset-0 top-[73px] md:top-0 transition-transform duration-300
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          
          {/* Desktop Profile Card */}
          <div className="hidden md:block text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="relative inline-block">
              <img src={SYSTEM_DATA.profile.avatar} className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-xl mb-3 mx-auto" />
              <span className="absolute bottom-3 right-0 w-5 h-5 bg-green-500 border-2 border-[#181818] rounded-full"></span>
            </div>
            <h2 className="text-lg font-bold text-white">{SYSTEM_DATA.profile.name}</h2>
            <p className="text-xs text-blue-400 font-medium mb-4">{SYSTEM_DATA.profile.role}</p>
            <div className="flex justify-center gap-3">
               <a href={SYSTEM_DATA.profile.social.linkedin} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white text-gray-400 transition-colors"><Linkedin size={16}/></a>
               <a href={`mailto:${SYSTEM_DATA.profile.email}`} className="p-2 bg-white/5 rounded-lg hover:bg-red-500 hover:text-white text-gray-400 transition-colors"><Mail size={16}/></a>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="space-y-1 flex-1 overflow-y-auto">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">Sections</div>
            <MenuButton id="profile" label="Profile Overview" icon={User} />
            <MenuButton id="education" label="Education" icon={GraduationCap} />
            <MenuButton id="experience" label="Experience" icon={Briefcase} />
            <MenuButton id="projects" label="Projects" icon={FolderOpen} />
            <MenuButton id="skills" label="Skills" icon={Cpu} />
          </div>
  
          <div className="pt-4 border-t border-slate-100 md:border-white/10 mt-auto">
            <button onClick={() => window.print()} className="w-full py-3 md:py-2.5 bg-blue-600 md:bg-white/5 hover:bg-blue-700 md:hover:bg-white/10 text-white md:text-gray-300 text-sm md:text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md md:shadow-none">
               <Download size={16}/> Download Resume
            </button>
          </div>
        </div>
  
        {/* Right Content Area */}
        <div className="flex-1 bg-slate-50 p-6 md:p-12 overflow-y-auto h-full w-full pb-24 md:pb-12" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
          <div className="max-w-3xl mx-auto pb-20 md:pb-0">
            
            {/* PROFILE OVERVIEW */}
            {activeSection === 'profile' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Profile Overview</h1>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
                   <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">{SYSTEM_DATA.profile.about}</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-slate-600 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <Mail className="text-blue-500" size={20} />
                        <div className="overflow-hidden">
                          <div className="text-xs text-slate-400 uppercase font-bold">Email</div>
                          <div className="text-sm font-medium truncate">{SYSTEM_DATA.profile.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <Phone className="text-green-500" size={20} />
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Phone</div>
                          <div className="text-sm font-medium">{SYSTEM_DATA.profile.phone}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <Globe className="text-purple-500" size={20} />
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Location</div>
                          <div className="text-sm font-medium">{SYSTEM_DATA.profile.location}</div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* EDUCATION */}
            {activeSection === 'education' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Education</h1>
                    <div className="space-y-6">
                        {SYSTEM_DATA.education.map((edu) => (
                            <div key={edu.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-green-500">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900">{edu.role}</h3>
                                        <div className="text-green-600 font-medium">{edu.company}</div>
                                    </div>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-2 md:mt-0 inline-block">{edu.date}</span>
                                </div>
                                <div className="text-sm text-slate-500 mb-4 flex items-center gap-2"><Globe size={14}/> {edu.location}</div>
                                <ul className="space-y-2">
                                    {edu.points.map((pt, i) => (
                                        <li key={i} className="text-slate-600 text-sm flex gap-2">
                                            <span className="text-green-500 mt-1.5 shrink-0">•</span> 
                                            <span className="leading-relaxed">{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
  
            {/* EXPERIENCE */}
            {activeSection === 'experience' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Experience</h1>
                <div className="space-y-4">
                  {SYSTEM_DATA.experience.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => toggleExp(item.id)}
                        className={`bg-white border border-slate-200 rounded-xl overflow-hidden transition-all cursor-pointer group ${expandedExp === item.id ? 'ring-2 ring-blue-500/20 shadow-md' : 'hover:shadow-sm'}`}
                    >
                        <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg ${item.color} bg-opacity-10 flex items-center justify-center text-2xl shrink-0`}>
                                    <Briefcase size={24} className={item.color.replace('bg-', 'text-')} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{item.role}</h4>
                                    <div className="text-sm text-slate-500 font-medium">{item.company}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto mt-2 md:mt-0">
                                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">{item.date}</span>
                                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${expandedExp === item.id ? 'rotate-180 text-blue-500' : ''}`} />
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {expandedExp === item.id && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-slate-100 bg-slate-50/50"
                                >
                                    <div className="p-6 pt-4">
                                        <h5 className="text-xs font-bold text-slate-400 uppercase mb-3">Key Achievements</h5>
                                        <ul className="space-y-3">
                                            {item.points.map((pt, i) => (
                                                <li key={i} className="text-sm text-slate-700 flex items-start gap-3">
                                                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                                    <span className="leading-relaxed">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
  
            {/* PROJECTS */}
            {activeSection === 'projects' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Projects</h1>
                <div className="grid grid-cols-1 gap-6">
                    {SYSTEM_DATA.projects.map((proj, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => toggleProj(idx)}
                            className={`bg-white border border-slate-200 rounded-xl p-6 transition-all cursor-pointer relative group ${expandedProj === idx ? 'ring-2 ring-purple-500/20 shadow-md' : 'hover:shadow-sm'}`}
                        >
                             <div className="flex justify-between items-start mb-4">
                                 <div className="flex items-center gap-4">
                                     <div className="text-4xl bg-slate-50 p-2 rounded-lg shrink-0">{proj.icon}</div>
                                     <div>
                                         <h4 className="font-bold text-slate-900 text-lg">{proj.title}</h4>
                                         <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md mt-1 inline-block">{proj.tech}</span>
                                     </div>
                                 </div>
                                 <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${expandedProj === idx ? 'rotate-180 text-purple-500' : ''}`} />
                             </div>
                             
                             <p className="text-slate-600 mb-4">{proj.desc}</p>
                             
                             <AnimatePresence>
                                {expandedProj === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="pt-4 border-t border-slate-100"
                                    >
                                        <h5 className="text-xs font-bold text-slate-400 uppercase mb-3">Features & Tech</h5>
                                        <ul className="space-y-2">
                                            {proj.points.map((pt, i) => (
                                                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                                                    <span className="leading-relaxed">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
              </motion.div>
            )}
  
            {/* SKILLS */}
            {activeSection === 'skills' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Technical Skills</h1>
                <div className="grid gap-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-blue-600 mb-4 uppercase flex items-center gap-2"><Code size={18}/> Languages</h4>
                        <div className="flex flex-wrap gap-3">
                            {SYSTEM_DATA.skills.languages.map(s => (
                                <span key={s} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-purple-600 mb-4 uppercase flex items-center gap-2"><Cpu size={18}/> Frameworks</h4>
                        <div className="flex flex-wrap gap-3">
                            {SYSTEM_DATA.skills.frameworks.map(s => (
                                <span key={s} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-purple-300 transition-colors">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-orange-600 mb-4 uppercase flex items-center gap-2"><Terminal size={18}/> Tools</h4>
                        <div className="flex flex-wrap gap-3">
                            {SYSTEM_DATA.skills.tools.map(s => (
                                <span key={s} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-orange-300 transition-colors">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
              </motion.div>
            )}
  
          </div>
        </div>
      </div>
    );
  };

// --- GEMINI AI ASSISTANT APP ---
const GeminiApp = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am the Gemini AI Assistant for AnuragOS. Ask me anything about Anurag’s skills, experience, or projects!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // System Prompt for Gemini
  const SYSTEM_PROMPT = `
    You are an AI assistant for Anurag's portfolio website. 
    Here is Anurag's data: ${JSON.stringify(SYSTEM_DATA)}.
    Answer questions about Anurag in the first person (as if you are his digital representative) or third person.
    Be professional, concise, and helpful.
    If asked about contact info, provide his email: ${SYSTEM_DATA.profile.email}.
    If asked about skills, list them from the data.
    If asked something not in the data, say you don't have that info but they can contact Anurag directly.
  `;

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      // Initialize Gemini
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Construct prompt history
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood. I will answer questions about Anurag based on this data." }] },
          // Add previous 4 messages for context
          ...messages.slice(-4).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        ],
      });

      const result = await chat.sendMessage(userMsg);
      const response = result.response.text();

      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I encountered an error connecting to Gemini. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  return (
    <div className="h-full bg-[#0d0d0d] text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-[#1a1a1a] flex items-center gap-3">
        <Sparkles className="text-blue-400" size={20} />
        <div>
          <h3 className="font-bold text-sm">Gemini Assistant</h3>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-[#2a2a2a] text-gray-200 rounded-tl-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#2a2a2a] p-3 rounded-2xl rounded-tl-none flex gap-1">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#1a1a1a] border-t border-white/10">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Anurag's experience..."
            className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="text-[10px] text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
          Powered by <Sparkles size={8} /> Gemini Pro
        </div>
      </div>
    </div>
  );
};

// --- CALENDAR & MEETING SCHEDULER APP ---
const CalendarApp = () => {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingStep, setBookingStep] = useState('select'); // select, form, success
  
  const timeSlots = ["10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "05:30 PM"];

  const handleBook = (e) => {
      e.preventDefault();
      setBookingStep('success');
      setTimeout(() => {
          setBookingStep('select');
          setSelectedSlot(null);
      }, 3000);
  };

  return (
    <div className="h-full bg-[#f5f5f7] text-slate-800 flex flex-col md:flex-row">
      {/* Left: Calendar UI */}
      <div className="w-full md:w-1/2 p-6 border-r border-gray-200 bg-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="text-red-500" /> Schedule a Meeting
        </h2>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex justify-between mb-4 font-bold text-lg">
                <span>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-gray-400 font-medium">
                {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                    <button 
                        key={day} 
                        onClick={() => setDate(new Date(2025, 10, day))}
                        className={`p-2 rounded-full hover:bg-blue-50 transition-colors ${day === date.getDate() ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md' : ''}`}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>

        <div className="mt-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Available Slots</h3>
            <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(slot => (
                    <button 
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-3 rounded-lg text-sm border transition-all ${selectedSlot === slot ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Right: Booking Form */}
      <div className="w-full md:w-1/2 p-8 bg-gray-50 flex flex-col justify-center">
         <AnimatePresence mode='wait'>
            {bookingStep === 'select' && (
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                 >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold">Select a Time</h3>
                        <p className="text-gray-500 mt-2">Choose a date and time slot from the calendar to proceed.</p>
                    </div>
                    {selectedSlot && (
                        <button 
                            onClick={() => setBookingStep('form')}
                            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Continue with {selectedSlot}
                        </button>
                    )}
                 </motion.div>
            )}

            {bookingStep === 'form' && (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    <button onClick={() => setBookingStep('select')} className="text-sm text-gray-500 mb-4 flex items-center gap-1 hover:text-black"><ArrowLeft size={14}/> Back</button>
                    <h3 className="text-xl font-bold mb-6">Confirm Details</h3>
                    <form onSubmit={handleBook} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                            <input required type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                            <input required type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Reason</label>
                            <textarea className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none h-24 resize-none" placeholder="Discussing a project opportunity..." />
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-3 text-sm text-blue-800">
                            <Calendar size={16} /> 
                            <span>{date.toLocaleDateString()} at {selectedSlot}</span>
                        </div>
                        <button type="submit" className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                            Confirm Booking
                        </button>
                    </form>
                </motion.div>
            )}

            {bookingStep === 'success' && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Meeting Scheduled!</h3>
                    <p className="text-gray-500 mb-8">A confirmation email has been sent to you.</p>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm inline-block text-left">
                        <div className="text-xs text-gray-400 uppercase font-bold mb-1">WHEN</div>
                        <div className="font-medium">{date.toLocaleDateString()} • {selectedSlot}</div>
                    </div>
                </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
};

const TerminalApp = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to AnuragOS Mobile Terminal' },
    { type: 'output', content: 'Type "help" to see commands.' }
  ]);
  const bottomRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];

      if (cmd === 'help') {
        newHistory.push({ type: 'output', content: 'Commands: about, skills, contact, clear' });
      } else if (cmd === 'about') {
        newHistory.push({ type: 'output', content: SYSTEM_DATA.profile.about });
      } else if (cmd === 'contact') {
        newHistory.push({ type: 'output', content: `Email: ${SYSTEM_DATA.profile.email}` });
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else {
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [history]);

  return (
    <div className="p-4 font-mono text-sm md:text-sm h-full bg-[#0c0c0c] text-green-400 overflow-y-auto pb-20">
      {history.map((line, i) => (
        <div key={i} className={`mb-2 break-words ${line.type === 'input' ? 'text-white' : line.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
          {line.type === 'input' ? '> ' : ''}{line.content}
        </div>
      ))}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-blue-400">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent outline-none flex-1 text-white p-0 m-0 border-none focus:ring-0"
          autoFocus
          placeholder="Type command..."
        />
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

const ProjectsApp = () => (
  <div className="h-full bg-[#0f0f0f] p-4 md:p-6 overflow-y-auto pb-20">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-white">My Projects</h2>
      <div className="flex gap-2">
        <button className="p-2 bg-white/5 rounded hover:bg-white/10"><LayoutGrid size={18} className="text-white" /></button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SYSTEM_DATA.projects.map((proj, i) => (
        <div key={i} className="p-5 bg-[#1a1a1a] border border-white/5 rounded-2xl active:scale-95 transition-transform duration-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl shadow-inner border border-white/5">
              {proj.icon}
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 text-xs font-bold text-green-400 border border-green-500/20">{proj.status}</div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">{proj.desc}</p>
          <div className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-2 rounded-lg inline-block border border-blue-500/20">
            {proj.tech}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- PHONE DIALER APP ---
const PhoneApp = () => {
  const [number, setNumber] = useState(SYSTEM_DATA.profile.phone);

  const handleNumClick = (num) => {
    setNumber(prev => prev + num);
  };

  const handleCall = () => {
    window.open(`tel:${number}`);
  };

  return (
    <div className="h-full bg-gray-900 text-white flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-gray-600">
             <img src={SYSTEM_DATA.profile.avatar} className="w-full h-full object-cover" />
        </div>
        <div className="text-3xl font-light tracking-widest mb-2 text-center">{number}</div>
        <div className="text-sm text-blue-400">Calling Mobile...</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key) => (
          <button 
            key={key}
            onClick={() => handleNumClick(key)}
            className="w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-2xl font-medium transition-colors"
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-6 items-center">
         <button onClick={() => setNumber(prev => prev.slice(0, -1))} className="p-4 text-gray-400 hover:text-white">
            <Delete size={24} />
         </button>
         <button 
           onClick={handleCall}
           className="w-20 h-20 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-95"
         >
           <Phone size={32} fill="currentColor" />
         </button>
         <div className="w-12"></div>
      </div>
    </div>
  );
};

// --- MAIL COMPOSE APP ---
const MailApp = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const mailtoLink = `mailto:${SYSTEM_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
  };

  return (
    <div className="h-full bg-[#121212] text-white flex flex-col">
      <div className="p-4 bg-[#1e1e1e] border-b border-white/10 flex items-center justify-between">
        <div className="font-bold text-lg">New Message</div>
        <button 
          onClick={handleSend}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
        >
          Send <Send size={14} />
        </button>
      </div>

      <div className="p-2 space-y-1">
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <span className="text-gray-400 w-16 text-sm">To:</span>
          <span className="text-gray-200 bg-white/10 px-2 py-1 rounded text-sm">{SYSTEM_DATA.profile.email}</span>
        </div>
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <span className="text-gray-400 w-16 text-sm">Cc/Bcc:</span>
          <input type="text" className="bg-transparent outline-none flex-1 text-sm text-white" />
        </div>
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <span className="text-gray-400 w-16 text-sm">Subject:</span>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-transparent outline-none flex-1 text-sm font-medium text-white"
            placeholder="Opportunity for Anurag"
          />
        </div>
      </div>

      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-transparent p-6 outline-none text-base resize-none text-gray-300 placeholder-gray-600"
        placeholder="Write your message here..."
      />
    </div>
  );
};

// --- MAIN OS APP ---

const App = () => {
  const [openApps, setOpenApps] = useState([]); // Empty array: no apps open by default
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [activeAppId, setActiveAppId] = useState(null);
  const [isAnyAppMaximized, setIsAnyAppMaximized] = useState(false); 

  // Apps Configuration
  const APPS = [
    // Content Apps
    { id: 'resume', title: 'Resume', icon: <Briefcase className="text-white" />, color: 'bg-blue-500', content: <ResumeApp /> },
    { id: 'projects', title: 'Projects', icon: <FolderOpen className="text-white" />, color: 'bg-orange-500', content: <ProjectsApp /> },
    { id: 'terminal', title: 'Terminal', icon: <Terminal className="text-white" />, color: 'bg-gray-800', content: <TerminalApp /> },
    { id: 'calendar', title: 'Meeting', icon: <Calendar className="text-white" />, color: 'bg-red-500', content: <CalendarApp /> },
    { id: 'gemini', title: 'Assistant', icon: <Sparkles className="text-white" />, color: 'bg-purple-600', content: <GeminiApp /> },
    
    // Action/Interactive Apps
    { id: 'mail', title: 'Mail', icon: <Mail className="text-white" />, color: 'bg-blue-400', content: <MailApp /> },
    { id: 'phone', title: 'Phone', icon: <Phone className="text-white" />, color: 'bg-green-500', content: <PhoneApp /> },
    
    // Link Apps
    { id: 'linkedin', title: 'LinkedIn', icon: <Linkedin className="text-white" />, color: 'bg-[#0077b5]', action: 'link', url: SYSTEM_DATA.profile.social.linkedin },
    { id: 'github', title: 'GitHub', icon: <Github className="text-white" />, color: 'bg-[#24292e]', action: 'link', url: SYSTEM_DATA.profile.social.github },
  ];

  const handleAppClick = (app) => {
    // Handle Link only
    if (app.action === 'link') {
      window.open(app.url, '_blank');
      return;
    }

    // Handle Window Apps
    if (minimizedApps.includes(app.id)) {
      setMinimizedApps(minimizedApps.filter(id => id !== app.id));
      setActiveAppId(app.id);
      return;
    }

    if (!openApps.includes(app.id)) {
      setOpenApps([...openApps, app.id]);
    }
    setActiveAppId(app.id);
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    setMinimizedApps(minimizedApps.filter(id => id !== appId));
    if (activeAppId === appId) {
        setActiveAppId(null);
        setIsAnyAppMaximized(false); // Reset maximize state if active app closes
    }
  };

  const minimizeApp = (appId) => {
      setMinimizedApps([...minimizedApps, appId]);
      setActiveAppId(null);
      setIsAnyAppMaximized(false); // Minimized apps aren't full screen
  }
  
  // Effect to check if resume app is open and maximized in mobile view to hide dock
  useEffect(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile && openApps.length > 0) {
          setIsAnyAppMaximized(true);
      } else if (isMobile && openApps.length === 0) {
           setIsAnyAppMaximized(false);
      }
  }, [openApps]);

  return (
    <div className="h-[100dvh] w-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center overflow-hidden font-sans selection:bg-blue-500/30 relative">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <TopBar />

      {/* DESKTOP / MOBILE APP GRID - Removed Call, kept Meeting as requested */}
      <div className="pt-20 px-4 md:px-6 grid grid-cols-4 md:flex md:flex-col gap-x-4 gap-y-8 md:gap-6 w-full md:w-fit mx-auto md:mx-0 place-items-center md:place-items-start">
        {APPS.filter(app => !['mail', 'phone', 'linkedin', 'github', 'gemini'].includes(app.id)).map(app => (
          <div 
            key={app.id} 
            onClick={() => handleAppClick(app)}
            className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform duration-150"
          >
            <div className={`w-16 h-16 md:w-14 md:h-14 rounded-2xl md:rounded-xl ${app.color} md:bg-white/10 md:backdrop-blur-sm md:border border-white/10 flex items-center justify-center shadow-xl`}>
              {React.cloneElement(app.icon, { size: 32 })}
            </div>
            <span className="text-xs text-white font-medium drop-shadow-md md:bg-black/40 md:px-2 md:py-0.5 md:rounded-full">{app.title}</span>
          </div>
        ))}
      </div>

      {/* WINDOW MANAGER */}
      <AnimatePresence>
        {openApps.map(appId => {
          const app = APPS.find(a => a.id === appId);
          if (minimizedApps.includes(appId)) return null;
          
          return (
            <Window 
              key={appId} 
              app={app} 
              isFocused={activeAppId === appId}
              onFocus={() => setActiveAppId(appId)}
              onClose={() => closeApp(appId)}
              onMinimize={() => minimizeApp(appId)}
              onMaximizeToggle={(isMax) => setIsAnyAppMaximized(isMax)}
            />
          );
        })}
      </AnimatePresence>

      {/* MOBILE BOTTOM DOCK (iOS Style) - Hides if maximized */}
      <div className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${isAnyAppMaximized ? 'translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 flex justify-between items-center shadow-2xl">
          {/* Phone */}
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'phone'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
               <Phone size={24} className="text-white" fill="currentColor" />
             </div>
          </div>
          {/* Mail */}
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'mail'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center shadow-lg">
               <Mail size={24} className="text-white" />
             </div>
          </div>
           {/* Gemini (Assistant) */}
           <div onClick={() => handleAppClick(APPS.find(a => a.id === 'gemini'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
               <Sparkles size={24} className="text-white" />
             </div>
          </div>
          {/* LinkedIn */}
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'linkedin'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-[#0077b5] flex items-center justify-center shadow-lg">
               <Linkedin size={24} className="text-white" fill="currentColor" />
             </div>
          </div>
          {/* Github */}
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'github'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-[#24292e] flex items-center justify-center shadow-lg">
               <Github size={24} className="text-white" />
             </div>
          </div>
        </div>
      </div>

      {/* DESKTOP DOCK (Mac Style) - Hides if maximized */}
      <div className={`hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isAnyAppMaximized ? 'translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-end gap-3 px-4 py-3 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          {APPS.filter(a => !['mail', 'phone', 'calendar', 'gemini'].includes(a.id)).map(app => (
            <div key={app.id} className="relative group">
               <button 
                onClick={() => handleAppClick(app)}
                className={`p-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-2 ${activeAppId === app.id && !minimizedApps.includes(app.id) ? 'bg-white/20 ring-1 ring-white/30' : 'hover:bg-white/10'}`}
              >
                {React.cloneElement(app.icon, { size: 24 })}
              </button>
              {(openApps.includes(app.id) || minimizedApps.includes(app.id)) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
            </div>
          ))}
          <div className="w-px h-8 bg-white/10 mx-1"></div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'gemini'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer relative">
             <Sparkles size={24} className="text-purple-400" />
             {(openApps.includes('gemini') || minimizedApps.includes('gemini')) && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
          </div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'calendar'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer relative">
            <Calendar size={24} className="text-red-500" />
            {(openApps.includes('calendar') || minimizedApps.includes('calendar')) && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
          </div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'mail'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer relative">
            <Mail size={24} className="text-blue-400" />
             {(openApps.includes('mail') || minimizedApps.includes('mail')) && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
          </div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'phone'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer relative">
             <Phone size={24} className="text-green-400" />
             {(openApps.includes('phone') || minimizedApps.includes('phone')) && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;