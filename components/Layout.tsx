import React, { useState, useCallback } from 'react';
import Starfield from './Starfield';
import Modal from './Modal';
import SeoArticleModalContent from './SeoArticleModalContent';

interface LayoutProps {
  children: React.ReactNode;
}

const modalContents: { [key: string]: React.ReactNode } = {
  'Guide': (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">How to Use the AI Proposal Generator</h2>
      <p className="mb-4 text-gray-300">Follow these simple steps to create a professional proposal draft in seconds:</p>
      <ol className="list-decimal list-inside space-y-3 text-gray-300">
        <li>
          <strong className="text-white">Fill in the Project Goal:</strong> This is the most important input. Be as detailed as possible about what you want to achieve.
        </li>
        <li>
          <strong className="text-white">Complete the Other Fields:</strong> Define your target audience, list the key deliverables, and provide an estimated budget and timeline.
        </li>
        <li>
          <strong className="text-white">Generate the Draft:</strong> Click the "Generate Proposal Draft" button. The Gemini AI will process your inputs.
        </li>
        <li>
          <strong className="text-white">Review and Copy:</strong> The generated proposal will appear below. Read through it, then use the "Copy" button.
        </li>
      </ol>
    </div>
  ),
  'About': (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-purple-400">About Us</h2>
      <p className="text-gray-300 leading-relaxed">
        Welcome to the <strong>AI Project Proposal Generator</strong>, a cutting-edge tool brought to you by <strong>doodax.com</strong>. 
        Our mission is to empower freelancers, project managers, and entrepreneurs by simplifying the documentation process. 
        By leveraging the advanced capabilities of the Google Gemini API, we transform your initial ideas into structured, professional documents in seconds.
      </p>
      <p className="text-gray-300 mt-4">
        We believe that great ideas shouldn't be held back by paperwork.
      </p>
    </div>
  ),
  'Contact': (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
      <p className="text-gray-300 mb-4">We value your feedback and inquiries. Whether you have a suggestion for a new feature or need support, we are here to help.</p>
      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
        <p className="mb-2"><strong>Website:</strong> <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a></p>
        <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></p>
      </div>
    </div>
  ),
  'Privacy Policy': (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-400">Privacy Policy</h2>
      <p className="text-xs text-gray-400 mb-4">Last Updated: October 2023</p>
      <p className="text-gray-300 mb-4">At <strong>doodax.com</strong>, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by the AI Project Proposal Generator and how it is used.</p>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">Data Processing</h3>
      <p className="text-gray-300 mb-2">We do not store the specific project details you enter into the form on our servers. The data is transmitted securely to the Google Gemini API solely for the purpose of generating the text response and is not retained by us.</p>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">Log Files</h3>
      <p className="text-gray-300">Like many other Web sites, we make use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information.</p>
    </div>
  ),
  'Terms of Service': (
     <div>
      <h2 className="text-2xl font-bold mb-4 text-red-400">Terms of Service</h2>
      <p className="text-gray-300 mb-4">By accessing this website, accessible from build.doodax.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">Disclaimer</h3>
      <p className="text-gray-300 mb-2">The materials on doodax.com's Website are provided "as is". doodax.com makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, doodax.com does not make any representations concerning the accuracy or likely results of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site.</p>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">Limitations</h3>
      <p className="text-gray-300">In no event shall doodax.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on doodax.com's Website.</p>
    </div>
  ),
  'DMCA': (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-orange-400">DMCA Notice</h2>
      <p className="text-gray-300 mb-4">We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property infringement of any person.</p>
      <p className="text-gray-300">If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a>.</p>
    </div>
  ),
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);

  // Footer links organized for cleaner UI
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'DMCA'];
  const infoLinks = ['Guide', 'About', 'Contact'];

  const openModal = useCallback((modalKey: string) => {
    setActiveModal(modalKey);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-[#090A0F] text-gray-100 overflow-x-hidden">
      <Starfield />
      
      {/* Nebula Overlay for richer background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),rgba(15,23,42,0.4),rgba(0,0,0,0.8))]"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="px-6 py-4 backdrop-blur-md bg-black/10 sticky top-0 z-50 border-b border-white/5">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black">AI</div>
                <h1 className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                  Proposal Generator
                </h1>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
              {infoLinks.map(key => (
                 <button key={key} onClick={() => openModal(key)} className="text-gray-300 hover:text-white hover:underline decoration-yellow-400 underline-offset-4 transition-all duration-300">
                   {key}
                 </button>
              ))}
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
          {children}

          {/* SEO Article Section - Dropdown Style */}
          <section className="w-full max-w-4xl mx-auto mt-20 mb-10">
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-700 ease-in-out relative">
               
               {/* Header for the article box */}
               <div 
                 onClick={() => setIsArticleExpanded(!isArticleExpanded)}
                 className="p-6 border-b border-white/5 flex justify-between items-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
               >
                 <h2 className="text-lg font-semibold text-yellow-500">Ultimate Proposal Guide</h2>
                 <span className="text-xs uppercase tracking-wider text-gray-400 font-bold border border-gray-600 px-2 py-1 rounded">
                   {isArticleExpanded ? 'Close' : 'Read Article'}
                 </span>
               </div>

               {/* Collapsible Content */}
               <div className={`relative transition-all duration-1000 ease-in-out ${isArticleExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-24 opacity-80 overflow-hidden'}`}>
                  <div className="p-8 md:p-12">
                    <SeoArticleModalContent />
                  </div>
                  
                  {/* Gradient Fade Overlay when collapsed */}
                  {!isArticleExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 pointer-events-none flex items-end justify-center pb-4">
                        <p className="text-yellow-400 font-medium text-sm animate-pulse">Click to read full guide...</p>
                    </div>
                  )}
               </div>
            </div>
            
            {/* Separate centered button for better UX */}
            <div className="flex justify-center -mt-5 relative z-20">
                 <button 
                  onClick={() => setIsArticleExpanded(!isArticleExpanded)}
                  className="bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-yellow-500/30 px-6 py-2 rounded-full shadow-lg text-sm font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  {isArticleExpanded ? (
                    <>Show Less <span className="transform rotate-180">▼</span></>
                  ) : (
                    <>Read Full SEO Guide <span className="transform rotate-0">▼</span></>
                  )}
                </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-black/40 backdrop-blur-md border-t border-white/5 pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg text-gray-200">AI Proposal Generator</h3>
                        <p className="text-sm text-gray-500 mt-2 max-w-xs">Draft better business documents faster with the power of Google Gemini AI.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        {legalLinks.map(key => (
                            <button key={key} onClick={() => openModal(key)} className="hover:text-yellow-400 transition-colors">
                                {key}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p>
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-500 hover:text-yellow-300 transition-colors">HSINI MOHAMED</a>
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
                        <span className="text-gray-700">|</span>
                        <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
      </div>
      
      {activeModal && (
        <Modal isOpen={!!activeModal} onClose={closeModal}>
          {modalContents[activeModal]}
        </Modal>
      )}
    </div>
  );
};

export default Layout;