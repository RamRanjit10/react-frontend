import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const fullName = "Ram Ranjit Ram Prasad"
  const greeting = "Hello, I'm "

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (currentIndex < greeting.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + greeting[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 100)
        return () => clearTimeout(timer)
      } else if (currentIndex < greeting.length + fullName.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + fullName[currentIndex - greeting.length])
          setCurrentIndex(prev => prev + 1)
        }, 150)
        return () => clearTimeout(timer)
      } else {
        // Finished typing, start blinking cursor
        setTimeout(() => setIsTyping(false), 1000)
      }
    }
  }, [currentIndex, isTyping])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const skillsData = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react', level: 90 },
        { name: 'Vue.js', icon: 'https://skillicons.dev/icons?i=vue', level: 85 },
        { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts', level: 88 },
        { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind', level: 92 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', level: 87 },
        { name: 'Python', icon: 'https://skillicons.dev/icons?i=python', level: 82 },
        { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express', level: 85 },
        { name: 'Django', icon: 'https://skillicons.dev/icons?i=django', level: 78 }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', level: 83 },
        { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql', level: 80 },
        { name: 'Redis', icon: 'https://skillicons.dev/icons?i=redis', level: 75 },
        { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase', level: 85 }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: 'https://skillicons.dev/icons?i=git', level: 90 },
        { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker', level: 78 },
        { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws', level: 75 },
        { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma', level: 82 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ram Ranjit
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-300 ${
                      activeSection === item.id
                        ? 'bg-blue-600/30 text-blue-300'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className={`inline-block w-2 h-16 md:h-24 bg-blue-400 ml-2 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Full Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              UI/UX Designer | Creative Problem Solver | Tech Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 glass-button-primary rounded-full font-semibold hover:scale-105 transition-all duration-300">
                View My Work
              </button>
              <button className="px-8 py-4 glass-button-secondary rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer with a love for creating beautiful and functional web experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Ram Ranjit Ram Prasad, a dedicated full-stack developer with expertise in modern web technologies. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="glass-card-small">
                  <span className="text-blue-300">5+ Years Experience</span>
                </div>
                <div className="glass-card-small">
                  <span className="text-cyan-300">50+ Projects</span>
                </div>
                <div className="glass-card-small">
                  <span className="text-blue-300">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 glass-card-large flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Your Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="glass-card hover:scale-105 transition-all duration-300">
                <div className="w-full h-48 glass-card-image rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold">Project {project}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Amazing Project {project}</h3>
                <p className="text-gray-400 mb-4">
                  A beautiful and functional web application built with modern technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="glass-tag">React</span>
                  <span className="glass-tag">Node.js</span>
                  <span className="glass-tag">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 px-4 py-2 glass-button-primary rounded-lg">
                    Live Demo
                  </button>
                  <button className="flex-1 px-4 py-2 glass-button-secondary rounded-lg">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-blue-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category) => (
              <div key={category.name} className="glass-card">
                <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-10 h-10 rounded-lg bg-white/10 p-1 hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-xs font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 glass-progress-bg rounded-full overflow-hidden">
                          <div 
                            className="h-full glass-progress-fill rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's work together on your next project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="glass-icon">
                    <span className="text-blue-400">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">ram.ranjit@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="glass-icon">
                    <span className="text-cyan-400">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="glass-icon">
                    <span className="text-blue-400">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="glass-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="glass-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="glass-input"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 glass-button-primary rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass-footer border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Ram Ranjit Ram Prasad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App