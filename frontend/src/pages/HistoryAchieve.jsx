// import React from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
// import { Award, Calendar, Users, Trophy, CheckCircle } from "lucide-react";
// import { Link } from "react-router-dom";
// import { mockData } from "../utils/mock";

// const HistoryAchieve = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <Badge className="mb-4 bg-yellow-600 text-white">
//               Our Legacy
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               80 Years of
//               <span className="block text-yellow-400">Medical Excellence</span>
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Discover the remarkable journey of the Association of Physicians of India 
//               from its humble beginnings in 1944 to becoming the nation's premier medical association.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Timeline</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Key milestones that shaped API's journey to becoming India's leading medical association.
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-emerald-600 to-yellow-600"></div>

//             {/* Timeline Items */}
//             <div className="space-y-12">
//               {mockData.historyMilestones.map((milestone, index) => (
//                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                   <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//                     <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//                       <CardContent className="p-6">
//                         <Badge className="mb-3 bg-blue-600 text-white text-lg px-3 py-1">
//                           {milestone.year}
//                         </Badge>
//                         <h3 className="text-xl font-bold text-gray-900 mb-3">
//                           {milestone.title}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed">
//                           {milestone.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>
                  
//                   {/* Timeline Node */}
//                   <div className="flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-600 rounded-full shadow-lg relative z-10">
//                     <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
//                   </div>
                  
//                   <div className="w-5/12"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Achievements</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Recognizing our significant contributions to healthcare, medical education, and professional development.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Achievement Cards */}
//             <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <CardContent className="p-0">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
//                   <Award className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
//                 <p className="text-gray-600 font-medium">National Awards</p>
//                 <p className="text-sm text-gray-500 mt-2">Recognition for excellence in medical practice and education</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <CardContent className="p-0">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//                   <Users className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">15,000+</h3>
//                 <p className="text-gray-600 font-medium">Physicians Trained</p>
//                 <p className="text-sm text-gray-500 mt-2">Through our comprehensive CME and training programs</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <CardContent className="p-0">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
//                   <Trophy className="w-8 h-8 text-emerald-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
//                 <p className="text-gray-600 font-medium">Research Studies</p>
//                 <p className="text-sm text-gray-500 mt-2">Published in leading medical journals worldwide</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <CardContent className="p-0">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
//                   <Calendar className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">80+</h3>
//                 <p className="text-gray-600 font-medium">Annual Conferences</p>
//                 <p className="text-sm text-gray-500 mt-2">Bringing together medical professionals nationwide</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Key Contributions */}
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Contributions to Healthcare</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our impact extends beyond membership to meaningful contributions that have shaped Indian healthcare.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 title: "Medical Education Revolution",
//                 description: "Pioneered continuing medical education programs that became the standard across India, ensuring physicians stay current with latest medical advances.",
//                 achievements: ["First CME certification program", "200+ annual training sessions", "Digital learning platform launch"]
//               },
//               {
//                 title: "Healthcare Policy Advocacy",
//                 description: "Actively participated in shaping healthcare policies at national and state levels, advocating for both physician welfare and patient rights.",
//                 achievements: ["Healthcare reform contributions", "Policy advisory roles", "Government consultation programs"]
//               },
//               {
//                 title: "Research & Innovation",
//                 description: "Established research foundations and grants that have funded breakthrough medical research in critical areas of healthcare.",
//                 achievements: ["₹50 crore research funding", "100+ breakthrough studies", "International collaborations"]
//               },
//               {
//                 title: "Community Health Initiatives",
//                 description: "Led numerous public health campaigns and community outreach programs, improving healthcare access in underserved areas.",
//                 achievements: ["Rural health camps", "Vaccination drives", "Health awareness campaigns"]
//               }
//             ].map((contribution, index) => (
//               <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <CardContent className="p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{contribution.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{contribution.description}</p>
//                   <div className="space-y-2">
//                     {contribution.achievements.map((achievement, i) => (
//                       <div key={i} className="flex items-center">
//                         <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
//                         <span className="text-gray-700">{achievement}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recognition Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
//             <p className="text-lg text-gray-600">
//               Our dedication to excellence has been recognized by national and international organizations.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 rounded-xl p-8 border border-yellow-200">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Trophy className="w-10 h-10 text-white" />
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900 mb-2">National Excellence Award</h4>
//                 <p className="text-gray-600">Awarded by Ministry of Health & Family Welfare for outstanding contribution to medical education</p>
//               </div>
              
//               <div>
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award className="w-10 h-10 text-white" />
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Innovation Award</h4>
//                 <p className="text-gray-600">Recognition for pioneering digital health initiatives and telemedicine advancement</p>
//               </div>
              
//               <div>
//                 <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CheckCircle className="w-10 h-10 text-white" />
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Certification</h4>
//                 <p className="text-gray-600">ISO 9001:2015 certification for excellence in organizational management and member services</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Be Part of Our Continuing Legacy
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Join thousands of physicians who have contributed to 80 years of medical excellence. 
//             Help us shape the next chapter of Indian healthcare.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
//               <Link to="/membership">
//                 Join Our Legacy
//               </Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
//               <Link to="/about">
//                 Learn More About API
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HistoryAchieve;



import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Users, Trophy, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mock";

const HistoryAchieve = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-600 text-white">
              Our Legacy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              80 Years of
              <span className="block text-yellow-400">Medical Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the remarkable journey of the Association of Physicians of India 
              from its humble beginnings in 1944 to becoming the nation's premier medical association.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced Styling */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Historical Timeline</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Key milestones that shaped API's journey to becoming India's leading medical association.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-blue-600 via-emerald-600 to-yellow-600 opacity-80 rounded-full shadow-lg"></div>

            {/* Timeline Items with Perfect Zigzag */}
<div className="space-y-0">
  {mockData.historyMilestones.map((milestone, index) => (
    <div key={index} className="relative flex items-center justify-between">
      
      {/* Left Card */}
      <div className="w-5/12 pr-12 relative">
        {index % 2 === 0 && (
          <>
            {/* Node slightly toward center line */}
            <div className="absolute top-1/2 right-[-4rem] transform -translate-y-1/2 z-20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full opacity-30 animate-pulse scale-125"></div>
            </div>

            {/* Card */}
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 bg-white border-0 overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 opacity-50 rounded-full -translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>
                <Badge className="mb-4 bg-blue-600 text-white text-xl px-4 py-2 font-bold shadow-lg">
                  {milestone.year}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Right Card */}
      <div className="w-5/12 pl-12 relative">
        {index % 2 === 1 && (
          <>
            {/* Node slightly toward center line */}
            <div className="absolute top-1/2 left-[-4rem] transform -translate-y-1/2 z-20">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-yellow-600 rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-emerald-600 to-yellow-600 rounded-full opacity-30 animate-pulse scale-125"></div>
            </div>

            {/* Card */}
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 bg-white border-0 overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-100 opacity-50 rounded-full -translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>
                <Badge className="mb-4 bg-emerald-600 text-white text-xl px-4 py-2 font-bold shadow-lg">
                  {milestone.year}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

    </div>
  ))}
</div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing our significant contributions to healthcare, medical education, and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Achievement Cards */}
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600 font-medium">National Awards</p>
                <p className="text-sm text-gray-500 mt-2">Recognition for excellence in medical practice and education</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">15,000+</h3>
                <p className="text-gray-600 font-medium">Physicians Trained</p>
                <p className="text-sm text-gray-500 mt-2">Through our comprehensive CME and training programs</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Research Studies</p>
                <p className="text-sm text-gray-500 mt-2">Published in leading medical journals worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">80+</h3>
                <p className="text-gray-600 font-medium">Annual Conferences</p>
                <p className="text-sm text-gray-500 mt-2">Bringing together medical professionals nationwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Contributions to Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our impact extends beyond membership to meaningful contributions that have shaped Indian healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Medical Education Revolution",
                description: "Pioneered continuing medical education programs that became the standard across India, ensuring physicians stay current with latest medical advances.",
                achievements: ["First CME certification program", "200+ annual training sessions", "Digital learning platform launch"]
              },
              {
                title: "Healthcare Policy Advocacy",
                description: "Actively participated in shaping healthcare policies at national and state levels, advocating for both physician welfare and patient rights.",
                achievements: ["Healthcare reform contributions", "Policy advisory roles", "Government consultation programs"]
              },
              {
                title: "Research & Innovation",
                description: "Established research foundations and grants that have funded breakthrough medical research in critical areas of healthcare.",
                achievements: ["₹50 crore research funding", "100+ breakthrough studies", "International collaborations"]
              },
              {
                title: "Community Health Initiatives",
                description: "Led numerous public health campaigns and community outreach programs, improving healthcare access in underserved areas.",
                achievements: ["Rural health camps", "Vaccination drives", "Health awareness campaigns"]
              }
            ].map((contribution, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{contribution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{contribution.description}</p>
                  <div className="space-y-2">
                    {contribution.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-600">
              Our dedication to excellence has been recognized by national and international organizations.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">National Excellence Award</h4>
                <p className="text-gray-600">Awarded by Ministry of Health & Family Welfare for outstanding contribution to medical education</p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Innovation Award</h4>
                <p className="text-gray-600">Recognition for pioneering digital health initiatives and telemedicine advancement</p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Certification</h4>
                <p className="text-gray-600">ISO 9001:2015 certification for excellence in organizational management and member services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be Part of Our Continuing Legacy
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of physicians who have contributed to 80 years of medical excellence. 
            Help us shape the next chapter of Indian healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link to="/membership">
                Join Our Legacy
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <Link to="/about">
                Learn More About API
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryAchieve;