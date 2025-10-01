// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "../ui/button";
// import { Menu, X, Stethoscope, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Vision", href: "/vision-mission" },
//     { name: "History", href: "/history-achieve" },
//     { name: "Trustees", href: "/trustees" },
//     { name: "Leadership", href: "/leadership" },
//     { name: "Membership", href: "/membership" },
//     { name: "Meetings", href: "/meetings" },
//     { name: "Updates", href: "/notifications" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`sticky top-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
//         : 'bg-white shadow-lg'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center space-x-4 group transition-all duration-300 hover:scale-105"
//           >
//             <div className="relative">
//               <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
//                 <Stethoscope className="w-7 h-7 text-white" />
//               </div>
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
//                 API
//               </h1>
//               <p className="text-xs font-medium text-gray-600 -mt-1">
//                 Since 1944
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group ${
//                   isActive(item.href)
//                     ? "text-blue-700 bg-blue-50 shadow-inner"
//                     : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
//                 }`}
//               >
//                 {item.name}
//                 <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-300 ${
//                   isActive(item.href) 
//                     ? "w-8 opacity-100" 
//                     : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
//                 }`}></span>
//               </Link>
//             ))}
//           </div>

//           {/* Join API Button */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Button 
//               asChild 
//               className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
//             >
//               <Link to="/membership" className="flex items-center space-x-2">
//                 <span>Join API</span>
//                 <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//               </Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="relative p-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300"
//             >
//               <div className="relative w-6 h-6">
//                 <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
//                 <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="px-2 pt-2 pb-6 space-y-2 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl mx-2 mb-4 shadow-inner">
//             {navigation.map((item, index) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
//                   isActive(item.href)
//                     ? "text-blue-700 bg-white shadow-lg"
//                     : "text-gray-700 hover:text-blue-700 hover:bg-white/70"
//                 }`}
//                 style={{ 
//                   animationDelay: `${index * 50}ms`,
//                   animation: isOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
//                 }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 <div className="flex items-center justify-between">
//                   {item.name}
//                   <ChevronDown className="w-4 h-4 transform -rotate-90" />
//                 </div>
//               </Link>
//             ))}
//             <div className="px-2 pt-4">
//               <Button 
//                 asChild 
//                 className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <Link 
//                   to="/membership" 
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center justify-center space-x-2"
//                 >
//                   <span>Join API Today</span>
//                   <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInFromLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Stethoscope, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision-mission" },
    { name: "History", href: "/history-achieve" },
    { name: "Trustees", href: "/trustees" },
    { name: "Leadership", href: "/leadership" },
    { name: "Membership", href: "/membership" },
    { name: "Meetings", href: "/meetings" },
    { name: "Updates", href: "/notifications" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-4 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-[#006747] rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF9933] rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-[#006747]">
                API
              </h1>
              <p className="text-xs font-medium text-gray-600 -mt-1">
                Since 1944
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                  isActive(item.href)
                    ? "text-[#FF6F00] bg-[#FFF6E5]"
                    : "text-[#333333] hover:text-[#FF6F00] hover:bg-[#FFF6E5]"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#FF6F00] transition-all duration-300 ${
                  isActive(item.href) 
                    ? "w-8 opacity-100" 
                    : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Join API Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild 
              className="bg-[#FF6F00] hover:bg-[#FF9933] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              <Link to="/membership" className="flex items-center space-x-2">
                <span>Join API</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-700 hover:text-[#FF6F00] hover:bg-[#FFF6E5] rounded-xl transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white rounded-2xl mx-2 mb-4 shadow-lg border border-gray-100">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                  isActive(item.href)
                    ? "text-[#FF6F00] bg-[#FFF6E5] shadow-md"
                    : "text-[#333333] hover:text-[#FF6F00] hover:bg-[#FFF6E5]"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <ChevronDown className="w-4 h-4 transform -rotate-90" />
                </div>
              </Link>
            ))}
            <div className="px-2 pt-4">
              <Button 
                asChild 
                className="w-full bg-[#FF6F00] hover:bg-[#FF9933] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link 
                  to="/membership" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Join API Today</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;