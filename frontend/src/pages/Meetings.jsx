import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Download,
  ExternalLink,
  Video,
  Award,
  CheckCircle
} from "lucide-react";
import { mockData } from "../utils/mock";
import { toast } from "../hooks/use-toast";

const Meetings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleRegister = (meetingId) => {
    toast({
      title: "Registration Successful!",
      description: "You have been registered for the meeting. Confirmation details will be sent to your email.",
    });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600 text-white">
              CME & Meetings
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Development
              <span className="block text-yellow-400">& Learning Opportunities</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Join our comprehensive continuing medical education programs, conferences, 
              and networking events designed to advance your medical knowledge and practice.
            </p>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Meetings */}
            <TabsContent value="upcoming">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Upcoming Events & CME Programs</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                  Register for our upcoming conferences, workshops, and continuing medical education programs.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {mockData.upcomingMeetings.map((meeting) => (
                  <Card key={meeting.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          className={`${
                            meeting.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                            meeting.type === 'Workshop' ? 'bg-emerald-100 text-emerald-800' :
                            'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {meeting.type}
                        </Badge>
                        {meeting.registrationOpen && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Open
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-gray-900 leading-tight">
                        {meeting.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {meeting.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{formatDate(meeting.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{meeting.time}</span>
                        </div>
                        
                        <div className="flex items-start text-gray-700">
                          <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{meeting.venue}</span>
                        </div>
                      </div>

                      {/* CME Credits */}
                      {meeting.type !== 'Regional Meet' && (
                        <div className="flex items-center bg-yellow-50 p-3 rounded-lg">
                          <Award className="w-5 h-5 text-yellow-600 mr-2" />
                          <span className="text-sm font-medium text-yellow-800">
                            5 CME Credits Available
                          </span>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        {meeting.registrationOpen ? (
                          <Button 
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => handleRegister(meeting.id)}
                          >
                            <Users className="w-4 h-4 mr-2" />
                            Register Now
                          </Button>
                        ) : (
                          <Button variant="outline" className="flex-1" disabled>
                            Registration Closed
                          </Button>
                        )}
                        
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Meetings */}
            <TabsContent value="past">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Past Events Archive</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                  Browse our archive of previous conferences and events. Access presentations and materials from past programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mockData.pastMeetings.map((meeting) => (
                  <Card key={meeting.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-gray-100 text-gray-800">
                          {meeting.type}
                        </Badge>
                        <span className="text-sm text-gray-500">{formatDate(meeting.date)}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{meeting.title}</h3>
                      
                      <div className="flex items-center text-gray-700 mb-4">
                        <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{meeting.venue}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{meeting.highlights}</p>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Video className="w-4 h-4 mr-2" />
                          View Recordings
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Materials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CME Program Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CME Program Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our continuing medical education programs are designed to keep you at the forefront of medical knowledge and practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-yellow-600" />,
                title: "Accredited Credits",
                description: "Earn recognized CME credits for professional development and certification maintenance."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Expert Faculty",
                description: "Learn from India's leading medical professionals and international experts."
              },
              {
                icon: <Video className="w-8 h-8 text-emerald-600" />,
                title: "Online & Offline",
                description: "Flexible learning options with both physical and virtual attendance opportunities."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
                title: "Certification",
                description: "Receive official certificates of participation and completion for all programs."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated on Upcoming Events
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Never miss an important conference or CME opportunity. Join API today and get exclusive access 
            to all our educational programs and networking events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Users className="w-5 h-5 mr-2" />
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetings;