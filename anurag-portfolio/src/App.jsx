import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, User, Briefcase, FolderOpen, Mail, X, Minus, 
  Maximize2, Github, Linkedin, Globe, Cpu, Code, 
  ChevronRight, Wifi, Battery, Search, Command, LayoutGrid,
  ArrowLeft, Signal, Phone, Send, Delete, Calendar, Clock, CheckCircle
} from 'lucide-react';

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
      github: "https://github.com/anurag" // Add your actual github username if you have one
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
      description: "Migrated legacy Talend ETL jobs to scalable microservices using ADF and Spring Boot. Optimized backend with Redis lookup & Azure Cosmos DB.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      company: "Logitok",
      role: "Full Stack Developer",
      date: "June 2024 - Aug 2024",
      location: "Chennai",
      type: "Internship",
      description: "Built dynamic admin dashboards and managed MongoDB backend with client-side caching.",
      color: "bg-purple-500"
    },
    {
      id: 3,
      company: "Carikture",
      role: "Web Developer",
      date: "Apr 2022 - June 2022",
      location: "Ghaziabad",
      type: "Internship",
      description: "Developed interactive web apps using HTML5 Canvas and heavy DOM manipulation.",
      color: "bg-orange-500"
    },
    {
        id: 4,
        company: "KIIT University",
        role: "B.Tech in IT",
        date: "2020 - 2024",
        location: "Bhubaneswar",
        type: "Education",
        description: "Graduated with 9.03 CGPA. Coursework in DSA, OS, DBMS, OOP.",
        color: "bg-green-500"
    }
  ],
  projects: [
    {
      title: "Brain Busters",
      icon: "🧠",
      desc: "Interactive puzzle app assessing critical thinking.",
      tech: "React + Firebase",
      status: "Live"
    },
    {
      title: "My-Diary",
      icon: "📔",
      desc: "Secure poetry blogging platform with JWT auth.",
      tech: "MERN Stack",
      status: "GitHub"
    }
  ],
  skills: {
    languages: ["Java", "C/C++", "SQL", "JavaScript"],
    frameworks: ["Spring Boot", "React.js", "Node.js"],
    tools: ["Azure ADF", "Linux", "Git", "Talend"]
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
        <span className="font-bold text-blue-400"> AnuragOS</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">File</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">Edit</span>
        <span className="opacity-70 hover:opacity-100 cursor-pointer">View</span>
      </div>

      <div className="md:hidden flex items-center gap-2">
         <span className="font-semibold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>

      <div className="md:hidden"></div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="flex items-center gap-1 md:gap-2 opacity-80">
          <Signal size={14} className="md:hidden" />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
        <span className="hidden md:inline">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

const Window = ({ app, onClose, isFocused, onFocus }) => {
  const isMobile = window.innerWidth < 768; 

  return (
    <motion.div
      initial={{ scale: isMobile ? 0.8 : 0.9, opacity: 0, y: isMobile ? 100 : 20, borderRadius: "2rem" }}
      animate={{ scale: 1, opacity: 1, y: 0, borderRadius: isMobile ? "0rem" : "0.75rem" }}
      exit={{ scale: isMobile ? 0.8 : 0.9, opacity: 0, y: isMobile ? 100 : 20, borderRadius: "2rem" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      drag={!isMobile}
      dragMomentum={false}
      onPointerDown={onFocus}
      className={`
        fixed md:absolute 
        ${isMobile ? 'inset-0 z-50 bg-black' : 'top-20 left-20 w-[800px] h-[600px] rounded-xl border border-white/10 shadow-2xl bg-[#1c1c1c]/95'}
        backdrop-blur-xl overflow-hidden flex flex-col
        ${isFocused && !isMobile ? 'z-40 ring-1 ring-white/20' : ''}
        ${!isMobile && !isFocused ? 'z-10 opacity-90' : ''}
      `}
    >
      <div className={`h-12 md:h-10 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing ${isMobile ? 'bg-[#121212] pt-safe-top' : 'bg-white/5 border-b border-white/5'}`}>
        {isMobile && (
          <button onClick={onClose} className="p-2 -ml-2 text-blue-400 flex items-center gap-1">
            <ArrowLeft size={20} /> <span className="text-base">Back</span>
          </button>
        )}

        {!isMobile && (
          <div className="flex items-center gap-2">
            <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer flex items-center justify-center group"><X size={8} className="opacity-0 group-hover:opacity-100 text-black" /></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
          </div>
        )}

        <div className="text-base md:text-sm font-medium text-gray-200 md:text-gray-400 flex items-center gap-2">
          {!isMobile && app.icon} {app.title}
        </div>
        
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-0 bg-[#0f0f0f] relative">
        {app.content}
      </div>

      {isMobile && (
        <div className="absolute bottom-0 left-0 w-full h-6 bg-transparent flex justify-center items-end pb-2 pointer-events-none">
          <div className="w-32 h-1 bg-white/20 rounded-full"></div>
        </div>
      )}
    </motion.div>
  );
};

// --- APP CONTENTS ---

const ResumeApp = () => (
  <div className="flex flex-col md:flex-row h-full bg-white text-slate-800">
    {/* Sidebar */}
    <div className="w-full md:w-64 bg-[#f8f9fa] md:bg-[#181818] border-b md:border-r border-gray-200 md:border-white/5 p-6 md:p-4 flex flex-col gap-4 md:text-white">
      <div className="flex md:block items-center gap-4">
        <img src={SYSTEM_DATA.profile.avatar} className="w-16 h-16 md:w-24 md:h-24 rounded-full md:mx-auto border-2 border-blue-500/50" />
        <div className="text-left md:text-center">
          <h2 className="text-xl font-bold text-slate-900 md:text-white">{SYSTEM_DATA.profile.name}</h2>
          <p className="text-xs text-blue-600 md:text-blue-400">{SYSTEM_DATA.profile.role}</p>
        </div>
      </div>
      
      <div className="hidden md:block mt-4 space-y-2 text-sm text-gray-400">
        <div className="p-2 bg-white/10 rounded flex items-center gap-2 text-white">
          <User size={16} /> Profile
        </div>
        <div className="p-2 hover:bg-white/5 rounded flex items-center gap-2">
          <Briefcase size={16} /> Experience
        </div>
      </div>

      <div className="md:mt-auto md:pt-4 md:border-t border-white/5">
        <button onClick={() => window.print()} className="w-full py-3 md:py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg">
           Download Resume PDF
        </button>
      </div>
    </div>

    {/* Main Document Area */}
    <div className="flex-1 p-6 md:p-12 overflow-y-auto pb-20 md:pb-0">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold uppercase text-slate-900 hidden md:block">{SYSTEM_DATA.profile.name}</h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">{SYSTEM_DATA.profile.about}</p>
        </div>

        {/* CAREER TIMELINE GRAPH */}
        <section>
          <h3 className="text-xs font-bold uppercase text-slate-400 mb-6 tracking-wider flex items-center gap-2">
             <Briefcase size={14} /> Career Timeline
          </h3>
          <div className="relative pl-4 space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

            {SYSTEM_DATA.experience.map((item) => (
              <div key={item.id} className="relative pl-8 group">
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white ${item.color} shadow-md z-10 group-hover:scale-110 transition-transform`}></div>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                   <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-800">{item.role}</h4>
                      <span className="text-xs font-mono text-slate-500 bg-white px-2 py-1 rounded border">{item.date}</span>
                   </div>
                   <div className="text-sm text-blue-600 font-medium mb-2">{item.company} • {item.location}</div>
                   <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
             {[...SYSTEM_DATA.skills.languages, ...SYSTEM_DATA.skills.frameworks].map(s => (
               <span key={s} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">{s}</span>
             ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

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
        
        {/* Simple Custom Calendar Mockup */}
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
  const [openApps, setOpenApps] = useState([]);
  const [activeAppId, setActiveAppId] = useState(null);

  // Apps Configuration
  const APPS = [
    // Content Apps
    { id: 'resume', title: 'Resume', icon: <Briefcase className="text-white" />, color: 'bg-blue-500', content: <ResumeApp /> },
    { id: 'projects', title: 'Projects', icon: <FolderOpen className="text-white" />, color: 'bg-orange-500', content: <ProjectsApp /> },
    { id: 'terminal', title: 'Terminal', icon: <Terminal className="text-white" />, color: 'bg-gray-800', content: <TerminalApp /> },
    { id: 'calendar', title: 'Meeting', icon: <Calendar className="text-white" />, color: 'bg-red-500', content: <CalendarApp /> },
    
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
    if (!openApps.includes(app.id)) {
      setOpenApps([...openApps, app.id]);
    }
    setActiveAppId(app.id);
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    if (activeAppId === appId) setActiveAppId(null);
  };

  return (
    <div className="h-[100dvh] w-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center overflow-hidden font-sans selection:bg-blue-500/30 relative">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <TopBar />

      {/* DESKTOP / MOBILE APP GRID */}
      <div className="pt-20 px-4 md:px-6 grid grid-cols-4 md:flex md:flex-col gap-x-4 gap-y-8 md:gap-6 w-full md:w-fit mx-auto md:mx-0 place-items-center md:place-items-start">
        {APPS.filter(app => !['mail', 'phone', 'linkedin', 'github'].includes(app.id)).map(app => (
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
          return (
            <Window 
              key={appId} 
              app={app} 
              isFocused={activeAppId === appId}
              onFocus={() => setActiveAppId(appId)}
              onClose={() => closeApp(appId)}
            />
          );
        })}
      </AnimatePresence>

      {/* MOBILE BOTTOM DOCK (iOS Style) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
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
           {/* Calendar (Meeting) */}
           <div onClick={() => handleAppClick(APPS.find(a => a.id === 'calendar'))} className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
             <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
               <Calendar size={24} className="text-white" />
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

      {/* DESKTOP DOCK (Mac Style) - Hidden on Mobile */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-end gap-3 px-4 py-3 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          {APPS.filter(a => !['mail', 'phone', 'calendar'].includes(a.id)).map(app => (
            <div key={app.id} className="relative group">
               <button 
                onClick={() => handleAppClick(app)}
                className={`p-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-2 ${activeAppId === app.id ? 'bg-white/20 ring-1 ring-white/30' : 'hover:bg-white/10'}`}
              >
                {React.cloneElement(app.icon, { size: 24 })}
              </button>
              {openApps.includes(app.id) && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
            </div>
          ))}
          <div className="w-px h-8 bg-white/10 mx-1"></div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'calendar'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer">
            <Calendar size={24} className="text-red-500" />
          </div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'mail'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer">
            <Mail size={24} className="text-blue-400" />
          </div>
          <div onClick={() => handleAppClick(APPS.find(a => a.id === 'phone'))} className="p-3 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer">
             <Phone size={24} className="text-green-400" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;