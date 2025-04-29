import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteType {
  text: string;
  author: string;
}

const quotes: QuoteType[] = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Quality is not an act, it's a habit.",
    author: "Aristotle"
  },
  {
    text: "Excellence is not a skill, it's an attitude.",
    author: "Ralph Marston"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  }
];

const DailyQuote: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    // Get today's date as string to use as seed
    const today = new Date().toDateString();
    
    // Simple hash function to generate consistent index for each day
    const hash = Array.from(today).reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Use hash to select quote
    const index = Math.abs(hash) % quotes.length;
    setQuote(quotes[index]);
  }, []);

  if (!quote) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 relative overflow-hidden"
    >
      <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />
      <div className="relative z-10">
        <p className="text-xl md:text-2xl text-gray-800 mb-4 italic">
          "{quote.text}"
        </p>
        <p className="text-right text-primary font-semibold">
          - {quote.author}
        </p>
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full" />
    </motion.div>
  );
};

export default DailyQuote;