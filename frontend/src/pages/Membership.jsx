import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  Check, 
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Network, 
  Shield,
  CreditCard,
  Phone,
  Mail,
  User
} from "lucide-react";
import { mockData } from "../utils/mock";
import { toast } from "../hooks/use-toast";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    medicalRegistration: "",
    specialization: "",
    institution: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Welcome to API! Your membership has been activated.",
      });
      setIsProcessing(false);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        medicalRegistration: "",
        specialization: "",
        institution: ""
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600 text-white">
              Membership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Premier
              <span className="block text-yellow-400">Medical Association</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Become part of India's most prestigious medical community and unlock exclusive benefits, 
              networking opportunities, and professional growth resources.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plan */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Membership Card */}
            <div className="lg:sticky lg:top-8">
              <Card className="shadow-2xl border-2 border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-2 rounded-bl-lg">
                  <Star className="w-4 h-4 inline mr-1" />
                  Premium
                </div>
                <CardHeader className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 mx-auto">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">API Membership</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold text-emerald-600">₹1,000</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <p className="text-gray-600 mt-2">Full access to all API benefits and services</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Membership Benefits:</h4>
                    {mockData.membershipBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">200+</div>
                      <div className="text-sm text-gray-600">CME Programs</div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <Network className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">15,000+</div>
                      <div className="text-sm text-gray-600">Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Join API Today</CardTitle>
                  <p className="text-gray-600">Complete your membership registration below</p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Dr. John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="doctor@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="medicalRegistration">Medical Registration No. *</Label>
                        <Input
                          id="medicalRegistration"
                          name="medicalRegistration"
                          type="text"
                          required
                          value={formData.medicalRegistration}
                          onChange={handleInputChange}
                          placeholder="MCI12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialization">Specialization *</Label>
                      <Input
                        id="specialization"
                        name="specialization"
                        type="text"
                        required
                        value={formData.specialization}
                        onChange={handleInputChange}
                        placeholder="e.g., Cardiology, Internal Medicine"
                      />
                    </div>

                    <div>
                      <Label htmlFor="institution">Current Institution *</Label>
                      <Input
                        id="institution"
                        name="institution"
                        type="text"
                        required
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="Hospital/Clinic Name"
                      />
                    </div>

                    <Separator className="my-6" />

                    {/* Payment Section */}
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">Payment Summary</h4>
                        <Badge className="bg-emerald-600 text-white">
                          <Shield className="w-3 h-3 mr-1" />
                          Secure
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">API Annual Membership</span>
                        <span className="font-semibold">₹1,000</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Processing Fee</span>
                        <span className="font-semibold text-emerald-600">FREE</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-emerald-600">₹1,000</span>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>Processing Payment...</>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Pay ₹1,000 & Join API
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By joining API, you agree to our terms of service and privacy policy. 
                      This is a demo payment - no actual charges will be made.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Membership FAQ
          </h2>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What's included in the membership?</h4>
                <p className="text-gray-600">
                  Full access to CME programs, medical journals, networking events, research resources, 
                  and exclusive member-only benefits including discounted conference rates.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">How do I renew my membership?</h4>
                <p className="text-gray-600">
                  Membership renewal notices are sent 30 days before expiry. You can renew online 
                  through your member portal or contact our office directly.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Can I cancel my membership?</h4>
                <p className="text-gray-600">
                  Yes, you can cancel anytime by contacting our member services. Please note that 
                  membership fees are non-refundable for the current term.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;