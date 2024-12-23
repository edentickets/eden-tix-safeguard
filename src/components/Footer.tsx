import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="text-2xl font-bold tracking-wider">
              EDEN
            </Link>
            
            <div className="flex items-center gap-8 text-sm">
              <Link 
                to="/terms" 
                className="text-white/60 hover:text-white transition-colors"
              >
                TERMS OF SERVICE
              </Link>
              <Link 
                to="/privacy" 
                className="text-white/60 hover:text-white transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <Link 
                to="/faq" 
                className="text-white/60 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>

            <Link 
              to="/create-event"
              className="px-6 py-2.5 rounded-full bg-[#403E43] hover:bg-[#4A4A4A] transition-colors"
            >
              Create Your Own Event
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};