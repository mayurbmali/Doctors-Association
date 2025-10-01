import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Users, Mail, Phone, Award, MapPin } from "lucide-react";
import { mockData } from "../utils/mock";

const Leadership = () => {
  const [activeTab, setActiveTab] = useState("advisory");

  const committees = [
    { id: "advisory", name: "Advisory Committee", data: mockData.leadership.advisory },
    { id: "executive", name: "Executive Committee", data: mockData.leadership.executive },
    { id: "steering", name: "Steering Committee", data: mockData.leadership.steering },
    { id: "districts", name: "District Representatives", data: mockData.leadership.districts }
  ];

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
              Leadership & Committees
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the distinguished leaders and committee members who drive API's mission 
              of excellence in medical practice and education across India.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership structure ensures effective governance, strategic planning, and 
              representation across all regions and specialties.
            </p>
          </div>

          {/* Committee Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {committees.map((committee) => (
                <TabsTrigger 
                  key={committee.id} 
                  value={committee.id}
                  className="text-sm font-medium"
                >
                  {committee.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {committees.map((committee) => (
              <TabsContent key={committee.id} value={committee.id}>
                <Card className="mb-8">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-blue-600" />
                      {committee.name}
                    </CardTitle>
                    <p className="text-gray-600 mt-2">
                      {committee.id === "advisory" && "Strategic guidance and policy direction for the organization."}
                      {committee.id === "executive" && "Day-to-day operations and implementation of organizational decisions."}
                      {committee.id === "steering" && "Program oversight and quality assurance for all API initiatives."}
                      {committee.id === "districts" && "Regional representation ensuring nationwide coverage and local engagement."}
                    </p>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.data.map((member, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        {/* Avatar */}
                        <div className="text-center mb-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                            {member.name.charAt(0)}
                          </div>
                          <Badge 
                            className={`text-xs ${
                              committee.id === "advisory" ? "bg-purple-100 text-purple-800" :
                              committee.id === "executive" ? "bg-blue-100 text-blue-800" :
                              committee.id === "steering" ? "bg-emerald-100 text-emerald-800" :
                              "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {committee.name}
                          </Badge>
                        </div>

                        {/* Member Info */}
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-semibold mb-2">{member.designation}</p>
                          <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <Award className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                            <div className="font-semibold text-gray-900 text-sm">20+</div>
                            <div className="text-xs text-gray-600">Years Exp.</div>
                          </div>
                          <div className="text-center p-3 bg-emerald-50 rounded-lg">
                            <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                            <div className="font-semibold text-gray-900 text-sm">500+</div>
                            <div className="text-xs text-gray-600">Patients</div>
                          </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Committee Responsibilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Committee Responsibilities</h2>
            <p className="text-lg text-gray-600">
              Each committee plays a crucial role in API's governance and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advisory Committee",
                icon: <Award className="w-8 h-8 text-purple-600" />,
                color: "purple",
                responsibilities: [
                  "Strategic planning and vision setting",
                  "Policy development and review",
                  "Partnership and collaboration oversight",
                  "Long-term organizational sustainability"
                ]
              },
              {
                title: "Executive Committee",
                icon: <Users className="w-8 h-8 text-blue-600" />,
                color: "blue",
                responsibilities: [
                  "Day-to-day operational management",
                  "Budget planning and financial oversight",
                  "Program implementation and monitoring",
                  "Staff management and coordination"
                ]
              },
              {
                title: "Steering Committee",
                icon: <MapPin className="w-8 h-8 text-emerald-600" />,
                color: "emerald",
                responsibilities: [
                  "Quality assurance for all programs",
                  "CME content development and review",
                  "Research initiative oversight",
                  "Standards and guidelines development"
                ]
              },
              {
                title: "District Representatives",
                icon: <Phone className="w-8 h-8 text-yellow-600" />,
                color: "yellow",
                responsibilities: [
                  "Regional member engagement",
                  "Local chapter coordination",
                  "Community outreach programs",
                  "Feedback collection and communication"
                ]
              }
            ].map((committee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${committee.color}-100 rounded-lg mr-4`}>
                      {committee.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{committee.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {committee.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`w-2 h-2 bg-${committee.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect with Our Leadership
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions or suggestions? Our leadership team is always available to hear from our members 
            and the medical community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-5 h-5 mr-2" />
              Contact Leadership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <Users className="w-5 h-5 mr-2" />
              Join a Committee
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;