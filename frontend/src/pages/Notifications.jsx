import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Search, 
  Filter, 
  Bell, 
  Calendar,
  FileText,
  Award,
  AlertCircle,
  ChevronRight,
  Download
} from "lucide-react";
import { mockData } from "../utils/mock";

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Notifications", count: mockData.notifications.length },
    { id: "Notice", name: "Notices", count: mockData.notifications.filter(n => n.category === "Notice").length },
    { id: "Policy", name: "Policies", count: mockData.notifications.filter(n => n.category === "Policy").length },
    { id: "Opportunity", name: "Opportunities", count: mockData.notifications.filter(n => n.category === "Opportunity").length },
    { id: "Publication", name: "Publications", count: mockData.notifications.filter(n => n.category === "Publication").length }
  ];

  const filteredNotifications = mockData.notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || notification.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Notice": return <Bell className="w-5 h-5" />;
      case "Policy": return <FileText className="w-5 h-5" />;
      case "Opportunity": return <Award className="w-5 h-5" />;
      case "Publication": return <Calendar className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case "Notice": return "bg-blue-100 text-blue-800";
      case "Policy": return "bg-emerald-100 text-emerald-800";
      case "Opportunity": return "bg-yellow-100 text-yellow-800";
      case "Publication": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "high": return "border-l-red-500 bg-red-50";
      case "medium": return "border-l-yellow-500 bg-yellow-50";
      case "low": return "border-l-green-500 bg-green-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-600 text-white">
              Updates & Announcements
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notifications
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest announcements, policy updates, opportunities, 
              and important communications from the Association of Physicians of India.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notifications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNotifications.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`border-l-4 hover:shadow-lg transition-all duration-300 cursor-pointer ${getPriorityColor(notification.priority)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={getCategoryColor(notification.category)}>
                            {getCategoryIcon(notification.category)}
                            <span className="ml-2">{notification.category}</span>
                          </Badge>
                          
                          {notification.priority === "high" && (
                            <Badge className="bg-red-100 text-red-800">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              High Priority
                            </Badge>
                          )}
                          
                          <span className="text-sm text-gray-500">{formatDate(notification.date)}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {notification.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {notification.content}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredNotifications.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="default" size="sm" className="bg-blue-600">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-none shadow-lg">
            <CardContent className="p-8">
              <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Never Miss an Important Update
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our notification service and get important announcements, 
                policy updates, and opportunities delivered directly to your email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                API members automatically receive all notifications via email and member portal.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-blue-100">Notifications This Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-blue-100">Policy Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">15,000+</div>
              <div className="text-blue-100">Members Notified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">24hrs</div>
              <div className="text-blue-100">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;