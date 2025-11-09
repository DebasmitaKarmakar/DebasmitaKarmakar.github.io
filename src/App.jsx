import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, ChevronDown, Terminal, Brain, Shield, Cpu, Code2, Palette, BookOpen, User, Briefcase, Phone, FileText, Award, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showBlogList, setShowBlogList] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Smart India Hackathon - Logistics Drone",
      description: "Cost-effective logistics drone carrying 30kg payloads over difficult terrains for defense and emergency supply missions",
      tech: ["Robotics", "Drone Design", "Python", "Embedded Systems"],
      category: "Featured",
      github: "https://github.com/DebasmitaKarmakar",
      year: "2024"
    },
    {
      title: "AI-Based Drone Image Analysis",
      description: "Research project on object detection and DeepFace implementation for forensic and surveillance applications",
      tech: ["Python", "YOLO", "DeepFace", "OpenCV", "Linux"],
      category: "AI/ML Research",
      github: "https://github.com/DebasmitaKarmakar",
      year: "2024-2025"
    },
    {
      title: "Hexacopter Drone Development",
      description: "Team project developing surveillance drone for data collection focused on army personnel and defense applications",
      tech: ["Drone Tech", "Surveillance Systems", "Data Collection"],
      category: "Defense Tech",
      github: "https://github.com/DebasmitaKarmakar",
      year: "2024-2025"
    },
    {
      title: "Quantum Computing Experiments",
      description: "Research and programming work using Qiskit during IBM Fall Fest and QBronze160 workshop",
      tech: ["Qiskit", "Quantum Computing", "Python"],
      category: "Quantum",
      github: "https://github.com/DebasmitaKarmakar",
      year: "2024"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "AI in Forensics: Where Intelligence Meets Evidence",
      excerpt: "Exploring how artificial intelligence is revolutionizing digital forensics and cybersecurity investigations...",
      date: "November 2024",
      content: `# AI in Forensics: Where Intelligence Meets Evidence

The intersection of artificial intelligence and digital forensics represents one of the most exciting frontiers in cybersecurity today. As a digital forensics student working on AI-based drone image analysis, I've witnessed firsthand how these technologies complement each other.

## The Challenge

Traditional forensic analysis is time-consuming and requires manual examination of vast amounts of data. With the exponential growth of digital evidence, investigators need automated tools that can process information quickly while maintaining accuracy.

## AI-Powered Solutions

My research under Dr. Suman Deb at NIT Agartala focuses on implementing YOLO for object detection and DeepFace for facial recognition in surveillance scenarios. These tools can:

- Process thousands of images in minutes
- Identify patterns invisible to human analysts
- Maintain chain of custody through automated logging
- Reduce investigator workload by 70%

## Real-World Applications

During my internship, we tested these algorithms on drone-captured footage for:
- Crime scene analysis
- Missing person searches
- Border surveillance
- Post-incident reconstruction

The results have been promising, with detection accuracy exceeding 90% in controlled environments.

## The Future

As we continue to refine these models, the goal is to create a comprehensive forensic toolkit that can assist law enforcement and defense personnel in real-time decision making. The combination of AI, drones, and forensic science is not just enhancing investigations—it's saving lives.`
    },
    {
      id: 2,
      title: "Building a Logistics Drone for the Indian Army",
      excerpt: "Our Smart India Hackathon journey creating a cost-effective drone for defense operations in difficult terrains...",
      date: "October 2024",
      content: `# Building a Logistics Drone for the Indian Army

Participating in the Smart India Hackathon 2024 was a transformative experience. Our challenge: design a logistics drone capable of carrying 30kg payloads to remote military outposts across difficult terrain.

## The Problem Statement

Indian Army personnel stationed in border regions often face supply chain challenges due to:
- Inaccessible terrain (mountains, dense forests)
- Extreme weather conditions
- Security risks in ground transportation
- Time-critical medical supply needs

## Our Solution

We designed a hexacopter with:
- 30kg payload capacity
- 50km range on a single charge
- GPS-based autonomous navigation
- Weatherproof construction
- Emergency medical kit integration

## Technical Challenges

The most significant hurdles were:

**Battery Life**: We optimized motor efficiency and implemented solar charging capabilities to extend operational time.

**Stability**: High-altitude winds required advanced stabilization algorithms and redundant motor systems.

**Security**: Encrypted communication protocols prevent signal hijacking in sensitive zones.

## Impact

If implemented, this system could:
- Reduce supply delivery time from days to hours
- Eliminate risks to personnel in hostile territories
- Provide emergency medical supplies in under 30 minutes
- Save costs compared to helicopter deployments

## Lessons Learned

This project taught me the importance of user-centric design. Regular consultations with defense personnel helped us understand practical requirements that textbooks never mention.

The journey from concept to prototype in 36 hours was intense, but it reinforced my passion for building technology that serves national security.`
    },
    {
      id: 3,
      title: "Quantum Computing: A Peek into My Experiments",
      excerpt: "My experience with IBM Qiskit Fall Fest and exploring the fundamentals of quantum programming...",
      date: "September 2024",
      content: `# Quantum Computing: A Peek into My Experiments

Quantum computing seemed like science fiction until I participated in the IBM Qiskit Fall Fest organized by NIT Agartala. What started as curiosity has become a passionate research interest.

## What is Quantum Computing?

Unlike classical computers that use bits (0 or 1), quantum computers use qubits that can exist in superposition—being both 0 and 1 simultaneously. This property, along with entanglement, enables exponential computational power for specific problems.

## My First Quantum Circuit

Using Qiskit, I created my first quantum circuit:

\`\`\`python
from qiskit import QuantumCircuit, execute, Aer

qc = QuantumCircuit(2)
qc.h(0)  # Hadamard gate creates superposition
qc.cx(0, 1)  # CNOT gate creates entanglement
qc.measure_all()

simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()
\`\`\`

This simple circuit demonstrates quantum entanglement—the foundation of quantum advantage.

## Applications in Cybersecurity

My current research explores how quantum computing impacts cybersecurity:

**Threats**: Quantum computers could break RSA and ECC encryption that protects most digital communications today.

**Solutions**: Post-quantum cryptography and quantum key distribution (QKD) offer quantum-resistant security.

**Quantum Random Number Generation**: True randomness for cryptographic keys, impossible with classical computers.

## QBronze160 Workshop

The QPoland workshop introduced advanced concepts like:
- Grover's algorithm for database search
- Shor's algorithm for factorization
- Quantum error correction
- Variational quantum eigensolvers

## Ongoing Project

I'm currently working on a college project exploring quantum machine learning applications for pattern recognition in forensic data. The goal is to determine if quantum algorithms can accelerate the analysis of encrypted digital evidence.

## The Road Ahead

Quantum computing is still in its infancy, but its potential to revolutionize cybersecurity, AI, and scientific research is undeniable. As both a computer science student and a researcher, I'm excited to be learning this technology before it becomes mainstream.

The future of computing is quantum, and I'm preparing to be part of that future.`
    }
  ];

  const skills = [
    { name: "Python", level: 85, icon: <Code2 size={18} />, category: "Programming" },
    { name: "C/C++", level: 75, icon: <Terminal size={18} />, category: "Programming" },
    { name: "YOLO", level: 80, icon: <Brain size={18} />, category: "AI/ML" },
    { name: "DeepFace", level: 75, icon: <Brain size={18} />, category: "AI/ML" },
    { name: "Qiskit", level: 70, icon: <Cpu size={18} />, category: "Quantum" },
    { name: "Linux", level: 80, icon: <Terminal size={18} />, category: "OS" },
    { name: "OpenCV", level: 75, icon: <Brain size={18} />, category: "AI/ML" },
    { name: "Cybersecurity", level: 85, icon: <Shield size={18} />, category: "Security" }
  ];

  const timeline = [
    {
      year: "2024-2029",
      title: "BTech MTech Computer Science",
      org: "National Forensic Sciences University - Tripura Campus",
      desc: "Specialization in Cybersecurity",
      icon: <Award size={20} />
    },
    {
      year: "2024-2025",
      title: "Research Intern",
      org: "NIT Agartala",
      desc: "AI-based drone image analysis under Dr. Suman Deb",
      icon: <Briefcase size={20} />
    },
    {
      year: "2024",
      title: "Smart India Hackathon",
      org: "Robotics and Drone",
      desc: "Cost-effective logistics drone for defense",
      icon: <Award size={20} />
    },
    {
      year: "2024",
      title: "IBM Qiskit Fall Fest",
      org: "NIT Agartala",
      desc: "Quantum Computing research and programming",
      icon: <Award size={20} />
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }
    
    // In production, integrate with EmailJS or similar service
    const mailtoLink = `mailto:dbsmita06@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    setShowBlogList(false);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-red-900/30 z-50 shadow-lg shadow-red-900/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            &lt;Debasmita Karmakar /&gt;
          </div>
          
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'projects', 'blog', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all ${
                  activeSection === item 
                    ? 'text-red-400 font-semibold' 
                    : 'text-gray-400 hover:text-red-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-red-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 border-t border-red-900/30">
            {['home', 'about', 'projects', 'blog', 'resume', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 capitalize text-gray-400 hover:text-red-400 hover:bg-gray-700/50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-red-900/20 border border-red-700/50 rounded-full text-red-400 text-sm">
              Digital Forensics & Cybersecurity Student
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                Debasmita Karmakar
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              AI/ML | Quantum Computing | Research Enthusiast
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              Studying at National Forensic Sciences University, specializing in cybersecurity. 
              Currently working on Quantum Computing, object detection, and Face Identification using Linux.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400">
                🎨 Painter (Visaraad)
              </span>
              <span className="px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full text-red-400">
                📚 Amateur Writer
              </span>
              <span className="px-4 py-2 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-400">
                🏊 Swimming Enthusiast
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-red-900/50"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="px-6 py-3 border border-gray-600 hover:border-red-500 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Read Blog
              </button>
              <a
                href="#resume"
                onClick={() => scrollToSection('resume')}
                className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/DebasmitaKarmakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/debasmitakarmakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dbsmita06@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-red-900/50 to-blue-900/50 rounded-3xl border border-red-700/30 overflow-hidden shadow-2xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Debasmita Karmakar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a second-year student at the National Forensic Sciences University, Tripura Campus, 
                pursuing Computer Science and Engineering with a specialization in cybersecurity. 
                My passion lies at the intersection of artificial intelligence, digital forensics, 
                and quantum computing.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently, I'm working as a Research Intern under Dr. Suman Deb at NIT Agartala, 
                focusing on AI-based drone image analysis using Python and Linux. My work involves 
                implementing YOLO for object detection and DeepFace in OpenCV for forensic and 
                surveillance applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond technology, I'm a certified painter (Visaraad from Bangiya Sangeet Parisaad), 
                an amateur writer, and a swimming enthusiast. I believe creativity and technical 
                expertise go hand in hand in solving complex problems.
              </p>

              <div className="flex items-start gap-3 bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold">Based in Agartala, Tripura, India</p>
                  <p className="text-gray-400 text-sm">Open to research collaborations and internship opportunities</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-red-400 mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-red-400">{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-500">({skill.category})</span>
                        </div>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.about ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300">English (Fluent)</span>
                  <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300">Bengali (Fluent)</span>
                  <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300">Hindi (Fluent)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Journey & Achievements
            </h3>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 pb-8 border-l-2 border-red-900/50 last:border-l-0 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/20 border border-gray-700 rounded-lg p-6 hover:border-red-700/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-red-400 mt-1">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm px-3 py-1 bg-red-900/30 border border-red-700/50 rounded-full text-red-400">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-1">{item.title}</h4>
                        <p className="text-blue-400 mb-2">{item.org}</p>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Projects & Research</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From defense technology to quantum computing, exploring innovative solutions at the frontier of computer science
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-gray-800/50 to-blue-900/20 border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:scale-102 group ${idx === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-red-900/30 border border-red-700/50 rounded-full text-red-400 text-xs">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{project.year}</span>
                    <Shield size={24} className="text-gray-600 group-hover:text-red-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/DebasmitaKarmakar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              <Github size={20} />
              <span>View All Projects on GitHub →</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-lg"
            >
              <Palette size={20} />
              <span>View My Paintings & Art Gallery →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen py-20 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.blog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Technical Writing</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Sharing insights from my research and projects in AI, forensics, and quantum computing
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => openBlog(blog)}
                className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-red-400" />
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-red-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-blue-400 text-sm group-hover:text-red-400 transition-colors">
                  Read more →
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowBlogList(true)}
              className="px-6 py-3 border border-gray-600 hover:border-red-500 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <BookOpen size={18} />
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-6 flex items-start justify-center">
          <div className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-blue-900/30 border border-red-700/30 rounded-xl shadow-2xl my-8">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl font-bold text-red-400">{selectedBlog.title}</h2>
              <button
                onClick={closeBlog}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6 text-gray-400">
                <Calendar size={16} />
                <span className="text-sm">{selectedBlog.date}</span>
              </div>
              <div className="prose prose-invert prose-red max-w-none">
                {selectedBlog.content.split('\n').map((line, idx) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={idx} className="text-3xl font-bold mb-6 text-red-400">{line.slice(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-blue-400">{line.slice(3)}</h2>;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={idx} className="font-bold text-gray-200 mt-4">{line.slice(2, -2)}</p>;
                  } else if (line.startsWith('- ')) {
                    return <li key={idx} className="text-gray-300 ml-6 mb-2">{line.slice(2)}</li>;
                  } else if (line.trim() === '') {
                    return <br key={idx} />;
                  } else if (line.startsWith('```')) {
                    return null;
                  } else {
                    return <p key={idx} className="text-gray-300 mb-4 leading-relaxed">{line}</p>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog List Modal */}
      {showBlogList && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-6 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900 to-blue-900/30 border border-red-700/30 rounded-xl shadow-2xl">
            <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl font-bold text-red-400">All Blog Posts</h2>
              <button
                onClick={() => setShowBlogList(false)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {blogs.map((blog) => (
                <button
                  key={blog.id}
                  onClick={() => openBlog(blog)}
                  className="w-full text-left p-4 bg-gray-800/50 border border-gray-700 hover:border-red-500 rounded-lg transition-all hover:scale-102"
                >
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-400">{blog.date}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section id="resume" className="min-h-screen py-20 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible.resume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
          </h2>

          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 border border-gray-700 rounded-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Debasmita Karmakar</h3>
              <p className="text-blue-400 mb-4">Computer Science & Engineering Student | Cybersecurity Specialist</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Mail size={16} /> dbsmita06@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> +91 9436357001
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Agartala, Tripura
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <User size={20} /> Profile
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  A student at Computer Science and Engineering, studying in National Forensic Sciences University, 
                  specialization in cybersecurity. Enthusiastic about research work, currently working on Quantum Computing, 
                  object detection and Face Identification using Linux. Always eager to learn, innovate, and contribute to 
                  technology-driven solutions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Briefcase size={20} /> Experience & Activities
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-red-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">Research Intern (Ongoing)</h5>
                    <p className="text-sm text-blue-400 mb-2">NIT Agartala | 2024-2025</p>
                    <p className="text-gray-400 text-sm">
                      Working under Dr. Suman Deb on AI-based drone image analysis using Python and Linux, 
                      focusing on object detection and DeepFace in OpenCV for forensic and surveillance applications.
                    </p>
                  </div>

                  <div className="border-l-2 border-red-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">Smart India Hackathon</h5>
                    <p className="text-sm text-blue-400 mb-2">Robotics and Drone | 2024</p>
                    <p className="text-gray-400 text-sm">
                      Developed cost-effective logistics drone to carry 30kg payloads over difficult terrains 
                      for defense and emergency supply missions.
                    </p>
                  </div>

                  <div className="border-l-2 border-red-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">IBM Qiskit Fall Fest</h5>
                    <p className="text-sm text-blue-400 mb-2">NIT Agartala | 2024</p>
                    <p className="text-gray-400 text-sm">
                      Participated in online sessions on Quantum Computing and working on college research project.
                    </p>
                  </div>

                  <div className="border-l-2 border-red-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">College Project - Hexacopter Drone</h5>
                    <p className="text-sm text-blue-400 mb-2">Team Project | 2024-2025</p>
                    <p className="text-gray-400 text-sm">
                      Developing surveillance drone for data collection and research, specifically for army personnel 
                      and defense applications.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Award size={20} /> Education
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">BTech MTech Computer Science and Engineering</h5>
                    <p className="text-sm text-blue-400 mb-2">National Forensic Sciences University - Tripura Campus | 2024-2029</p>
                    <p className="text-gray-400 text-sm">Specialization: Cybersecurity</p>
                  </div>

                  <div className="border-l-2 border-blue-900/50 pl-4">
                    <h5 className="font-semibold text-gray-200">Secondary Education (10th & 12th)</h5>
                    <p className="text-sm text-blue-400 mb-2">Shishu Bihar H.S. School | 2009-2024</p>
                    <p className="text-gray-400 text-sm">CBSE Board</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Code2 size={20} /> Technical Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Programming Languages</p>
                    <p className="text-gray-400 text-sm">C (Intermediate), C++ (Intermediate), Python (Intermediate)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Operating Systems</p>
                    <p className="text-gray-400 text-sm">Windows, Linux (Ubuntu), SBC</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">AI/ML Tools</p>
                    <p className="text-gray-400 text-sm">YOLO (Object Detection), DeepFace, OpenCV</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Quantum Computing</p>
                    <p className="text-gray-400 text-sm">Qiskit, Quantum Programming</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Award size={20} /> Workshops & Training
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>AI for Good Governance Workshop - Directorate of IT, Govt. of Tripura (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Quantum Computing and Programming Workshop, QBronze160 - QPoland (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Data Recovery and Cyber Security Training - NFSU Tripura Campus (2025)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Palette size={20} /> Hobbies & Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400 text-sm">
                    Painting (Visaraad Certified)
                  </span>
                  <span className="px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full text-red-400 text-sm">
                    Reading
                  </span>
                  <span className="px-4 py-2 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-400 text-sm">
                    Amateur Writing
                  </span>
                  <span className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400 text-sm">
                    Swimming
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              download="DebasmitaCV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-red-900/50"
            >
              <Download size={20} />
              Download Full CV (PDF)
            </a>
            <p className="text-gray-500 text-sm mt-4">Add DebasmitaCV.pdf to your public folder for download</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's connect and collaborate on exciting projects. Open to research opportunities, internships, and technical discussions.
          </p>

          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 border border-gray-700 rounded-xl p-8 mb-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none text-gray-100 placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none text-gray-100 placeholder-gray-500"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none text-gray-100 resize-none placeholder-gray-500"
              />
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-red-900/50"
              >
                Send Message
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400 text-center">
                  Please fill in all fields.
                </div>
              )}
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-400 text-lg">Or reach out directly</p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:dbsmita06@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-red-500 rounded-lg transition-all hover:scale-105"
              >
                <Mail size={20} className="text-red-400" />
                <span>dbsmita06@gmail.com</span>
              </a>
              <a
                href="https://github.com/DebasmitaKarmakar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-all hover:scale-105"
              >
                <Github size={20} className="text-blue-400" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/debasmitakarmakar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition-all hover:scale-105"
              >
                <Linkedin size={20} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/30 py-8 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2025 Debasmita Karmakar</p>
              <p className="text-sm text-gray-500">Crafted with React & Tailwind CSS</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/DebasmitaKarmakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/debasmitakarmakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dbsmita06@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;