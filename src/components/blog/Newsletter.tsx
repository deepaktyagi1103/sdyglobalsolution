import { useState } from 'react';
import { Mail, Send, Bell, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-36 bg-white transform -skew-y-6 translate-y-12"></div>
        <div className="absolute -left-10 bottom-0 w-64 h-64 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Newsletter Content */}
            <div className="flex-1 text-white">
              <div className="flex items-center mb-4">
                <Bell size={24} className="mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Subscribe to Our Newsletter
                </h2>
              </div>
              
              <p className="text-white/80 mb-4">
                Stay informed with the latest updates in certification requirements, industry news, and expert insights delivered straight to your inbox.
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                <div className="flex items-center">
                  <Check size={16} className="mr-1 text-accent" />
                  <span>Exclusive tips</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="mr-1 text-accent" />
                  <span>Regulatory updates</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="mr-1 text-accent" />
                  <span>Monthly digest</span>
                </div>
              </div>
            </div>
            
            {/* Subscription Form */}
            <div className="w-full md:w-auto">
              {isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-3">
                    <Check size={24} />
                  </div>
                  <p className="text-white font-medium mb-1">Thank you for subscribing!</p>
                  <p className="text-white/70 text-sm">We've sent a confirmation to your email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className={`flex overflow-hidden rounded-lg ${error ? 'border-2 border-red-400' : ''}`}>
                    <div className="bg-white/20 flex items-center justify-center px-3">
                      <Mail size={20} className="text-white" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 min-w-0 px-4 py-3 bg-white/5 text-white placeholder-white/60 border-none focus:ring-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className={`inline-flex items-center px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors duration-300 disabled:opacity-70`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Subscribe
                          <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </div>
                  {error && <p className="mt-2 text-red-300 text-sm">{error}</p>}
                  <p className="mt-3 text-white/60 text-xs">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;