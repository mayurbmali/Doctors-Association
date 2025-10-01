import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Mail, Linkedin, Award, GraduationCap } from "lucide-react";
import { mockData } from "../utils/mock";

const Trustees = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-600 text-white">
              Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Board of Trustees
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the distinguished medical professionals who guide API's strategic direction 
              and ensure our commitment to excellence in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {mockData.trustees.map((trustee) => (
              <Card key={trustee.id} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-emerald-600 mb-2">
                      {trustee.designation}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{trustee.name}</h3>
                    <p className="text-emerald-600 font-semibold text-lg">{trustee.designation}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {trustee.bio}
                  </p>
                  
                  {/* Stats/Highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">30+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <Award className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Awards</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Trustees */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-none shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Message from the Board
              </h2>
              <blockquote className="text-lg italic text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                "As trustees of the Association of Physicians of India, we are committed to upholding 
                the highest standards of medical excellence and professional integrity. Our collective 
                experience spanning decades of medical practice guides us in making decisions that 
                benefit not only our members but the entire healthcare ecosystem in India. We are 
                proud to lead an organization that has been at the forefront of medical advancement 
                for over 80 years."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-lg">The Board of Trustees</p>
                <p className="text-emerald-600">Association of Physicians of India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Distinguished Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of an organization led by India's most respected medical professionals.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Become a Member Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Trustees;