import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="py-8 relative border-t border-[var(--card-border)] bg-[var(--bg-color)]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-[var(--text-muted)] text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Sabauddin. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg shadow-[var(--accent-color)]/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
}
