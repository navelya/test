import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Workflow
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Streamline your operations with our powerful, intuitive tools designed for the modern workplace.
          </motion.p>
          
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#1F2937' }}>
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <motion.div 
              key="0"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>
                Lightning Fast
              </h3>
              <p style={{ color: '#666666' }}>
                Built for speed with cutting-edge technology that keeps you moving
              </p>
            </motion.div>
            
            <motion.div 
              key="1"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>
                Secure & Reliable
              </h3>
              <p style={{ color: '#666666' }}>
                Enterprise-grade security to keep your data safe and protected
              </p>
            </motion.div>
            
            <motion.div 
              key="2"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>
                Easy Integration
              </h3>
              <p style={{ color: '#666666' }}>
                Connect with all your favorite tools and services seamlessly
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: '#F9FAFB' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#1F2937' }}>
            Transform Your Workflow
          </h2>
          {submitted ? (
            <div className="text-center p-12 rounded-xl border-2" style={{ borderColor: '#10b981', backgroundColor: '#f0fdf4' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>Thank You!</h3>
              <p style={{ color: '#059669' }}>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div key="name">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                  Full Name *
                </label>
                
                <input
                  type="text"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, 'name': e.target.value})}
                />
                
              </div>
              
              <div key="email">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                  Email Address *
                </label>
                
                <input
                  type="email"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({...formData, 'email': e.target.value})}
                />
                
              </div>
              
              <div key="phone">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                  Phone Number
                </label>
                
                <input
                  type="phone"
                  required={false}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="+1 (555) 000-0000"
                  onChange={(e) => setFormData({...formData, 'phone': e.target.value})}
                />
                
              </div>
              
              <div key="message">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                  Message
                </label>
                
                <textarea
                  required={false}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  rows={4}
                  placeholder="Tell us more about your needs..."
                  onChange={(e) => setFormData({...formData, 'message': e.target.value})}
                />
                
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#6366F1',
                  color: '#ffffff'
                }}
              >
                Start Free Trial
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}

export default App
