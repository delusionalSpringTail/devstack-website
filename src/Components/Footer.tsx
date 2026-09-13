
import logo from '../assets/logo-text.png';

const Footer= () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-slate-500">
      <div className="lg:container mx-auto px-4 py-12">
        
      
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between gap-8 pb-12">
          
          {/* logo and social */}
          <div className="max-w-sm space-y-4">
            <div className="flex justify-center md:justify-start">
              <a href="#">
                <img src={logo} alt="DevStack" className="h-8 w-auto" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-sm font-semibold text-slate-700">
              <a href="#" className="hover:text-[#DE1B76]">GitHub</a>
              <span className="md:hidden text-slate-400">•</span>
              <a href="#" className="hover:text-[#DE1B76]">Twitter</a>
              <span className="md:hidden text-slate-400">•</span>
              <a href="#" className="hover:text-[#DE1B76]">LinkedIn</a>
            </div>
          </div>

          {/* all the links */}
          <div className="hidden md:flex space-x-16">
            
            {/* prodect */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                PRODUCT
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-slate-400">
                <a href="#" className="hover:text-slate-700">Home</a>
                <a href="#" className="hover:text-slate-700">Technologies</a>
                <a href="#" className="hover:text-slate-700">Projects</a>
              </div>
            </div>

            {/* company */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                COMPANY
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-slate-400">
                <a href="#" className="hover:text-slate-700">About</a>
                <a href="#" className="hover:text-slate-700">Contact</a>
                <a href="#" className="hover:text-slate-700">Careers</a>
              </div>
            </div>

            {/* legal */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                LEGAL
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-slate-400">
                <a href="#" className="hover:text-slate-700">Privacy Policy</a>
                <a href="#" className="hover:text-slate-700">Terms of Service</a>
              </div>
            </div>

          </div>

        </div>

        {/* copyright */}
        <div className="border-t border-gray-100 pt-6 flex flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;