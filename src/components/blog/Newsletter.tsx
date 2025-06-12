import { useState } from 'react';
import { Mail, Send, Bell, Check, Sparkles, Gift, Zap, Star } from 'lucide-react';

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
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-500/10 via-transparent to-primary-500/10 animate-gradient-x" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full blur-2xl animate-float" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Newsletter Content - Enhanced */}
            <div className="flex-1 text-white space-y-8">
              <div className="space-y-6">
                {/* Header with Icon */}
                <div className="flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-lg group-hover:shadow-accent-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Bell size={32} className="text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                    <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-accent-300 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-white to-accent-200 bg-clip-text text-transparent">
                      Join Our Newsletter
                    </h2>
                    <p className="text-accent-300 font-medium">Stay ahead with exclusive insights</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-200 leading-relaxed">
                  Get exclusive access to industry insights, certification updates, and expert tips delivered directly to your inbox. Join thousands of professionals who trust us for the latest regulatory news.
                </p>
              </div>

              {/* Enhanced Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "Instant Updates", desc: "Real-time regulatory changes" },
                  { icon: Gift, text: "Exclusive Content", desc: "Premium guides & templates" },
                  { icon: Star, text: "Expert Insights", desc: "Industry leader perspectives" },
                  { icon: Check, text: "Monthly Digest", desc: "Curated news summary" }
                ].map(({ icon: Icon, text, desc }) => (
                  <div key={text} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-500/30 transition-all duration-300 group">
                    <div className="p-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg group-hover:from-accent-400 group-hover:to-accent-500 transition-all duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-accent-200 transition-colors">{text}</div>
                      <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">10K+</div>
                  <div className="text-sm text-gray-400">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Weekly</div>
                  <div className="text-sm text-gray-400">Updates</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Subscription Form */}
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 shadow-2xl">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-lg animate-pulse-glow">
                      <Check size={32} />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-xl animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Welcome Aboard! 🎉</h3>
                  <p className="text-gray-200 mb-2">Thank you for subscribing to our newsletter!</p>
                  <p className="text-gray-300 text-sm">We've sent a confirmation email with exclusive welcome content.</p>
                  
                  {/* Success Animation */}
                  <div className="mt-6 flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-accent-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
                    <p className="text-gray-300 text-sm">Join our community of professionals</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                      <div className={`flex overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        error 
                          ? 'border-red-400 shadow-lg shadow-red-500/25' 
                          : 'border-white/20 group-hover:border-accent-500/50 focus-within:border-accent-500'
                      }`}>
                        <div className="bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center px-4 border-r border-white/20">
                          <Mail size={20} className="text-white group-hover:text-accent-200 transition-colors" />
                        </div>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="flex-1 min-w-0 px-4 py-4 bg-white/5 text-white placeholder-white/60 border-none focus:ring-0 focus:outline-none text-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 text-red-300 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className={`w-full group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                      disabled={isSubmitting}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {isSubmitting ? (
                        <span className="flex items-center justify-center space-x-3 relative z-10">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-3 relative z-10">
                          <span className="text-lg">Subscribe Now</span>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      )}
                    </button>

                    <div className="text-center">
                      <p className="text-white/70 text-xs leading-relaxed">
                        By subscribing, you agree to our{' '}
                        <a href="/privacy" className="text-accent-300 hover:text-accent-200 underline transition-colors">
                          Privacy Policy
                        </a>{' '}
                        and consent to receive updates. Unsubscribe anytime.
                      </p>
                    </div>
                  </form>

                  {/* Trust Badge */}
                  <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>100% Spam-Free • Secure & Private</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;