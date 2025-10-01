// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { 
//   Users, 
//   Calendar, 
//   Award, 
//   Clock, 
//   MapPin, 
//   Star,
//   ArrowRight,
//   HeartHandshake,
//   GraduationCap,
//   Shield
// } from "lucide-react";
// import { mockData } from "../utils/mock";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white">
//               Established 1944 • 80+ Years of Excellence
//             </Badge>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Advancing Physician
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
//                 Excellence Since 1944
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//               Empowering healthcare professionals through continuous education, networking, 
//               and advancing the highest standards of medical practice across India.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                 <Link to="/membership">
//                   Join API <ArrowRight className="ml-2 w-5 h-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
//                 <Link to="/about">
//                   Learn More
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {mockData.highlights.map((highlight, index) => (
//               <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="p-0">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-3xl font-bold text-blue-800 mb-2">{highlight.value}</h3>
//                   <p className="text-gray-600">{highlight.label}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section className="py-16 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Quick Access
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
//                   <HeartHandshake className="w-8 h-8 text-emerald-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Membership</h3>
//                 <p className="text-gray-600 mb-6">
//                   Join our prestigious community of physicians and access exclusive benefits, resources, and networking opportunities.
//                 </p>
//                 <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
//                   <Link to="/membership">
//                     Join Now - ₹1,000/year
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
//                   <GraduationCap className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">CME Programs</h3>
//                 <p className="text-gray-600 mb-6">
//                   Access our continuing medical education programs, conferences, and workshops designed for professional growth.
//                 </p>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link to="/meetings">
//                     View Programs
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
//                   <Shield className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Latest Updates</h3>
//                 <p className="text-gray-600 mb-6">
//                   Stay informed with the latest announcements, policy updates, and important notifications from API.
//                 </p>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link to="/notifications">
//                     View Notifications
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//      <section className="py-16 bg-blue-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Core Members
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mockData.testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg relative overflow-hidden group text-center" // Added text-center
//             >
//               {/* Optional: Add an animated background effect on hover */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//               <CardContent className="p-6 relative z-10 flex flex-col items-center"> {/* Added flex-col items-center */}
//                 {/* Larger Circular Image, centered */}
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0 mb-4 transform group-hover:scale-110 transition-transform duration-300"> {/* Increased size, border, added hover effect */}
//                   <img
//                     src={testimonial.imageUrl}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <h4 className="font-semibold text-lg">{testimonial.name}</h4> {/* Slightly larger text */}
//                 <p className="text-blue-200 text-sm mb-6">{testimonial.designation}</p> {/* Moved designation here, added margin-bottom */}

//                 <p className="text-blue-100 italic">"{testimonial.quote}"</p> {/* Moved quote to the bottom */}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Advance Your Medical Career?
//           </h2>
//           <p className="text-xl mb-8 text-emerald-100">
//             Join thousands of physicians who trust API for professional development, networking, and excellence in healthcare.
//           </p>
//           <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
//             <Link to="/membership">
//               Become a Member Today <ArrowRight className="ml-2 w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

//******************************************************************************************************* */


// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Users,
//   Calendar,
//   Award,
//   Clock,
//   MapPin,
//   Star,
//   ArrowRight,
//   HeartHandshake,
//   GraduationCap,
//   Shield,
//   Info, // Added for About
//   Newspaper, // Added for Featured News
//   HelpCircle, // Added for FAQs
//   Mail, // Added for Contact
//   Gift, // Added for Membership Benefits (could also use UserPlus, etc.)
//   Megaphone, // Added for Upcoming Events (could also use CalendarDays)
// } from "lucide-react";
// import { mockData } from "../utils/mock";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white">
//               Established 1944 • 80+ Years of Excellence
//             </Badge>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Advancing Physician
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
//                 Excellence Since 1944
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//               Empowering healthcare professionals through continuous education, networking,
//               and advancing the highest standards of medical practice across India.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                 <Link to="/membership" aria-label="Join API Now">
//                   Join API <ArrowRight className="ml-2 w-5 h-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
//                 <Link to="/about" aria-label="Learn More About Our Association">
//                   Learn More
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {mockData.highlights.map((highlight, index) => (
//               <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="p-0">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-3xl font-bold text-blue-800 mb-2">{highlight.value}</h3>
//                   <p className="text-gray-600">{highlight.label}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section className="py-16 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Quick Access
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
//                   <HeartHandshake className="w-8 h-8 text-emerald-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Membership</h3>
//                 <p className="text-gray-600 mb-6">
//                   Join our prestigious community of physicians and access exclusive benefits, resources, and networking opportunities.
//                 </p>
//                 <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
//                   <Link to="/membership" aria-label="Join API Membership">
//                     Join Now - ₹1,000/year
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
//                   <GraduationCap className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">CME Programs</h3>
//                 <p className="text-gray-600 mb-6">
//                   Access our continuing medical education programs, conferences, and workshops designed for professional growth.
//                 </p>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link to="/meetings" aria-label="View CME Programs and Meetings">
//                     View Programs
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
//                   <Shield className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Latest Updates</h3>
//                 <p className="text-gray-600 mb-6">
//                   Stay informed with the latest announcements, policy updates, and important notifications from API.
//                 </p>
//                 <Button asChild variant="outline" className="w-full">
//                   <Link to="/notifications" aria-label="View Latest Notifications">
//                     View Notifications
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* About, Events, News, Membership Benefits, FAQs, Contact Summaries */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Explore API
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {/* About Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
//                   <Info className="w-7 h-7 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">About Us</h3>
//                 <p className="text-gray-600 mb-6">
//                   Discover our association’s mission, leadership, and unwavering commitment to advancing medical excellence across India.
//                 </p>
//                 <Button asChild variant="link" className="text-blue-600 hover:text-blue-800" aria-label="Learn More About Our Organization">
//                   <Link to="/about">
//                     Learn More <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Upcoming Events Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-full mb-4">
//                   <Megaphone className="w-7 h-7 text-emerald-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Upcoming Events</h3>
//                 <p className="text-gray-600 mb-6">
//                   Stay updated on our national conferences, regional meetings, and essential webinars. Don't miss out on vital learning and networking.
//                 </p>
//                 <Button asChild variant="link" className="text-emerald-600 hover:text-emerald-800" aria-label="See All Upcoming Events">
//                   <Link to="/meetings">
//                     See Events <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Featured News Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-50 rounded-full mb-4">
//                   <Newspaper className="w-7 h-7 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Featured News</h3>
//                 <p className="text-gray-600 mb-6">
//                   Catch up on the latest breakthroughs, policy changes, and association highlights impacting the medical community.
//                 </p>
//                 <Button asChild variant="link" className="text-yellow-600 hover:text-yellow-800" aria-label="Read Our Latest News">
//                   <Link to="/news">
//                     Read News <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Membership Benefits Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-50 rounded-full mb-4">
//                   <Gift className="w-7 h-7 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Member Benefits</h3>
//                 <p className="text-gray-600 mb-6">
//                   Unlock a world of advantages including exclusive publications, discounted CMEs, and a powerful professional network.
//                 </p>
//                 <Button asChild variant="link" className="text-purple-600 hover:text-purple-800" aria-label="View All Membership Benefits">
//                   <Link to="/membership">
//                     View Benefits <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* FAQs Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <HelpCircle className="w-7 h-7 text-orange-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">FAQs</h3>
//                 <p className="text-gray-600 mb-6">
//                   Have questions about membership, events, or general inquiries? Find quick answers to commonly asked questions here.
//                 </p>
//                 <Button asChild variant="link" className="text-orange-600 hover:text-orange-800" aria-label="Read Frequently Asked Questions">
//                   <Link to="/faq">
//                     Read FAQs <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Contact Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-full mb-4">
//                   <Mail className="w-7 h-7 text-red-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Contact Us</h3>
//                 <p className="text-gray-600 mb-6">
//                   Reach out to us for support, inquiries, or any feedback. Our team is here to assist you.
//                 </p>
//                 <Button asChild variant="link" className="text-red-600 hover:text-red-800" aria-label="Contact Our Support Team">
//                   <Link to="/contact">
//                     Contact Us <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//      <section className="py-16 bg-blue-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Core Members
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mockData.testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg relative overflow-hidden group text-center"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//               <CardContent className="p-6 relative z-10 flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0 mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                   <img
//                     src={testimonial.imageUrl}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <h4 className="font-semibold text-lg">{testimonial.name}</h4>
//                 <p className="text-blue-200 text-sm mb-6">{testimonial.designation}</p>

//                 <p className="text-blue-100 italic">"{testimonial.quote}"</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Advance Your Medical Career?
//           </h2>
//           <p className="text-xl mb-8 text-emerald-100">
//             Join thousands of physicians who trust API for professional development, networking, and excellence in healthcare.
//           </p>
//           <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
//             <Link to="/membership" aria-label="Become a Member of API Today">
//               Become a Member Today <ArrowRight className="ml-2 w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import {
//   Users,
//   Calendar,
//   Award,
//   Clock,
//   MapPin,
//   Star,
//   ArrowRight,
//   HeartHandshake,
//   GraduationCap,
//   Shield,
//   Info,
//   Newspaper,
//   HelpCircle,
//   Mail,
//   Gift,
//   Megaphone,
// } from "lucide-react";
// import { mockData } from "../utils/mock";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <Badge className="mb-6 bg-[#FB7E00] hover:bg-[#FE5F00] text-white">
//               Established 1944 • 80+ Years of Excellence
//             </Badge>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Advancing Physician
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAE9DB] to-[#FB7E00]">
//                 Excellence Since 1944
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
//               Empowering healthcare professionals through continuous education, networking,
//               and advancing the highest standards of medical practice across India.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="bg-[#FB7E00] hover:bg-[#FE5F00] text-white">
//                 <Link to="/membership" aria-label="Join API Now">
//                   Join API <ArrowRight className="ml-2 w-5 h-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
//                 <Link to="/about" aria-label="Learn More About Our Association">
//                   Learn More
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Grid */}
//       <section className="py-16 bg-[#FAE9DB]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {mockData.highlights.map((highlight, index) => (
//               <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="p-0">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-800 mb-2">{highlight.value}</h3>
//                   <p className="text-gray-600">{highlight.label}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Quick Access
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
//                   <HeartHandshake className="w-8 h-8 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Membership</h3>
//                 <p className="text-gray-600 mb-6">
//                   Join our prestigious community of physicians and access exclusive benefits, resources, and networking opportunities.
//                 </p>
//                 <Button asChild className="w-full bg-[#FB7E00] hover:bg-[#FE5F00]">
//                   <Link to="/membership" aria-label="Join API Membership">
//                     Join Now - ₹1,000/year
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
//                   <GraduationCap className="w-8 h-8 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">CME Programs</h3>
//                 <p className="text-gray-600 mb-6">
//                   Access our continuing medical education programs, conferences, and workshops designed for professional growth.
//                 </p>
//                 <Button asChild variant="outline" className="w-full border-[#FB7E00] text-[#FB7E00] hover:bg-[#FAE9DB]">
//                   <Link to="/meetings" aria-label="View CME Programs and Meetings">
//                     View Programs
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
//                   <Shield className="w-8 h-8 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Latest Updates</h3>
//                 <p className="text-gray-600 mb-6">
//                   Stay informed with the latest announcements, policy updates, and important notifications from API.
//                 </p>
//                 <Button asChild variant="outline" className="w-full border-[#FB7E00] text-[#FB7E00] hover:bg-[#FAE9DB]">
//                   <Link to="/notifications" aria-label="View Latest Notifications">
//                     View Notifications
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* About, Events, News, Membership Benefits, FAQs, Contact Summaries */}
//       <section className="py-16 bg-[#FAE9DB]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Explore API
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {/* About Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <Info className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">About Us</h3>
//                 <p className="text-gray-600 mb-6">
//                   Discover our association’s mission, leadership, and unwavering commitment to advancing medical excellence across India.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="Learn More About Our Organization">
//                   <Link to="/about">
//                     Learn More <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Upcoming Events Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <Megaphone className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Upcoming Events</h3>
//                 <p className="text-gray-600 mb-6">
//                   Stay updated on our national conferences, regional meetings, and essential webinars. Don't miss out on vital learning and networking.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="See All Upcoming Events">
//                   <Link to="/meetings">
//                     See Events <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Featured News Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <Newspaper className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Featured News</h3>
//                 <p className="text-gray-600 mb-6">
//                   Catch up on the latest breakthroughs, policy changes, and association highlights impacting the medical community.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="Read Our Latest News">
//                   <Link to="/news">
//                     Read News <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Membership Benefits Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <Gift className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Member Benefits</h3>
//                 <p className="text-gray-600 mb-6">
//                   Unlock a world of advantages including exclusive publications, discounted CMEs, and a powerful professional network.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="View All Membership Benefits">
//                   <Link to="/membership">
//                     View Benefits <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* FAQs Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <HelpCircle className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">FAQs</h3>
//                 <p className="text-gray-600 mb-6">
//                   Have questions about membership, events, or general inquiries? Find quick answers to commonly asked questions here.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="Read Frequently Asked Questions">
//                   <Link to="/faq">
//                     Read FAQs <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Contact Section Summary */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6 flex flex-col items-center text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-full mb-4">
//                   <Mail className="w-7 h-7 text-[#FB7E00]" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">Contact Us</h3>
//                 <p className="text-gray-600 mb-6">
//                   Reach out to us for support, inquiries, or any feedback. Our team is here to assist you.
//                 </p>
//                 <Button asChild variant="link" className="text-[#FB7E00] hover:text-[#FE5F00]" aria-label="Contact Our Support Team">
//                   <Link to="/contact">
//                     Contact Us <ArrowRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//      <section className="py-16 bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Core Members
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mockData.testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg relative overflow-hidden group text-center"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//               <CardContent className="p-6 relative z-10 flex flex-col items-center">
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0 mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                   <img
//                     src={testimonial.imageUrl}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <h4 className="font-semibold text-lg">{testimonial.name}</h4>
//                 <p className="text-purple-200 text-sm mb-6">{testimonial.designation}</p>

//                 <p className="text-purple-100 italic">"{testimonial.quote}"</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-[#FB7E00] to-[#FE5F00] text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Advance Your Medical Career?
//           </h2>
//           <p className="text-xl mb-8 text-orange-100">
//             Join thousands of physicians who trust API for professional development, networking, and excellence in healthcare.
//           </p>
//           <Button asChild size="lg" className="bg-white text-[#FE5F00] hover:bg-orange-50">
//             <Link to="/membership" aria-label="Become a Member of API Today">
//               Become a Member Today <ArrowRight className="ml-2 w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Calendar,
  Award,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Shield,
  Info,
  Newspaper,
  HelpCircle,
  Mail,
  Gift,
  Megaphone,
} from "lucide-react";
import { mockData } from "../utils/mock";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FF6F00] to-[#006747] text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-[#FF6F00] hover:bg-[#FF9933] text-white text-base py-1 px-3 rounded-full">
              Established 1944 • 80+ Years of Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advancing Physician
              <span className="block text-[#FF9933]">
                Excellence Since 1944
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#F8F9FA] max-w-3xl mx-auto">
              Empowering healthcare professionals through continuous education, networking,
              and advancing the highest standards of medical practice across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FF6F00] hover:bg-[#FF9933] text-white rounded-lg px-8 py-3">
                <Link to="/membership" aria-label="Join API Now">
                  Join API <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#006747] bg-white text-[#006747] hover:bg-[#006747] hover:text-white rounded-lg px-8 py-3">
                <Link to="/about" aria-label="Learn More About Our Association">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-[#FFF6E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {mockData.highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${index % 2 === 0 ? 'bg-orange-100' : 'bg-green-100'} rounded-full mb-4`}>
                    {React.cloneElement(highlight.icon, { className: `w-8 h-8 ${index % 2 === 0 ? 'text-[#FF6F00]' : 'text-[#006747]'}` })}
                  </div>
                  <h3 className="text-3xl font-bold text-[#333333] mb-2">{highlight.value}</h3>
                  <p className="text-[#666666]">{highlight.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#FFF6E5]">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <HeartHandshake className="w-8 h-8 text-[#FF6F00]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Membership</h3>
                <p className="text-[#666666] mb-6">
                  Join our prestigious community of physicians and access exclusive benefits, resources, and networking opportunities.
                </p>
                <Button asChild className="w-full bg-[#FF6F00] hover:bg-[#FF9933] text-white rounded-lg py-3">
                  <Link to="/membership" aria-label="Join API Membership">
                    Join Now - ₹1,000/year
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#FFF6E5]">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <GraduationCap className="w-8 h-8 text-[#006747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">CME Programs</h3>
                <p className="text-[#666666] mb-6">
                  Access our continuing medical education programs, conferences, and workshops designed for professional growth.
                </p>
                <Button asChild variant="link" className="w-full text-[#FF6F00] hover:text-[#FF9933] rounded-lg py-3">
                  <Link to="/meetings" aria-label="View CME Programs and Meetings">
                    View Programs <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#FFF6E5]">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-[#FF6F00]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Latest Updates</h3>
                <p className="text-[#666666] mb-6">
                  Stay informed with the latest announcements, policy updates, and important notifications from API.
                </p>
                <Button asChild variant="link" className="w-full text-[#FF6F00] hover:text-[#FF9933] rounded-lg py-3">
                  <Link to="/notifications" aria-label="View Latest Notifications">
                    View Notifications <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About, Events, News Summaries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">
            Explore API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* About Section Summary */}
            <Card className="rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[#FFF6E5]">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                  <Info className="w-7 h-7 text-[#006747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">About Us</h3>
                <p className="text-[#666666] mb-6">
                  Discover our association’s mission, leadership, and unwavering commitment to advancing medical excellence across India.
                </p>
                <Button asChild variant="link" className="text-[#FF6F00] hover:text-[#FF9933]" aria-label="Learn More About Our Organization">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events Section Summary */}
            <Card className="rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[#FFF6E5]">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
                  <Megaphone className="w-7 h-7 text-[#FF6F00]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">Upcoming Events</h3>
                <p className="text-[#666666] mb-6">
                  Stay updated on our national conferences, regional meetings, and essential webinars. Don't miss out on vital learning and networking.
                </p>
                <Button asChild variant="link" className="text-[#FF6F00] hover:text-[#FF9933]" aria-label="See All Upcoming Events">
                  <Link to="/meetings">
                    See Events <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Featured News Section Summary */}
            <Card className="rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[#FFF6E5]">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                  <Newspaper className="w-7 h-7 text-[#006747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">Featured News</h3>
                <p className="text-[#666666] mb-6">
                  Catch up on the latest breakthroughs, policy changes, and association highlights impacting the medical community.
                </p>
                <Button asChild variant="link" className="text-[#FF6F00] hover:text-[#FF9933]" aria-label="Read Our Latest News">
                  <Link to="/news">
                    Read News <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section className="py-16 bg-[#006747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Core Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#004d33] text-white rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="p-6 relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                <p className="text-[#F1F1F1] text-sm mb-6">{testimonial.designation}</p>

                <p className="text-[#F1F1F1] italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6F00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Advance Your Medical Career?
          </h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of physicians who trust API for professional development, networking, and excellence in healthcare.
          </p>
          <Button asChild size="lg" className="bg-white text-[#FF6F00] hover:bg-orange-50 rounded-lg px-8 py-3">
            <Link to="/membership" aria-label="Become a Member of API Today">
              Become a Member Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
