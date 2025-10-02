// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Badge } from "../components/ui/badge";
// import { Separator } from "../components/ui/separator";
// import { 
//   Check, 
//   Star, 
//   Users, 
//   BookOpen, 
//   Award, 
//   Network, 
//   Shield,
//   CreditCard,
//   Phone,
//   Mail,
//   User
// } from "lucide-react";
// import { mockData } from "../utils/mock";
// import { toast } from "../hooks/use-toast";

// const Membership = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     medicalRegistration: "",
//     specialization: "",
//     institution: ""
//   });
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     // Simulate payment processing
//     setTimeout(() => {
//       toast({
//         title: "Payment Successful!",
//         description: "Welcome to API! Your membership has been activated.",
//       });
//       setIsProcessing(false);
//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         medicalRegistration: "",
//         specialization: "",
//         institution: ""
//       });
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <Badge className="mb-4 bg-blue-600 text-white">
//               Membership
//             </Badge>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Join the Premier
//               <span className="block text-yellow-400">Medical Association</span>
//             </h1>
//             <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
//               Become part of India's most prestigious medical community and unlock exclusive benefits, 
//               networking opportunities, and professional growth resources.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Membership Plan */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
//             {/* Membership Card */}
//             <div className="lg:sticky lg:top-8">
//               <Card className="shadow-2xl border-2 border-emerald-200 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-2 rounded-bl-lg">
//                   <Star className="w-4 h-4 inline mr-1" />
//                   Premium
//                 </div>
//                 <CardHeader className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 pb-8">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 mx-auto">
//                     <Users className="w-8 h-8 text-emerald-600" />
//                   </div>
//                   <CardTitle className="text-2xl text-gray-900">API Membership</CardTitle>
//                   <div className="text-center mt-4">
//                     <span className="text-5xl font-bold text-emerald-600">₹1,000</span>
//                     <span className="text-gray-600">/year</span>
//                   </div>
//                   <p className="text-gray-600 mt-2">Full access to all API benefits and services</p>
//                 </CardHeader>
                
//                 <CardContent className="p-8">
//                   <div className="space-y-4 mb-8">
//                     <h4 className="font-semibold text-gray-900 mb-4">Membership Benefits:</h4>
//                     {mockData.membershipBenefits.map((benefit, index) => (
//                       <div key={index} className="flex items-start">
//                         <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
//                         <span className="text-gray-700">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <Separator className="my-6" />
                  
//                   <div className="grid grid-cols-2 gap-4 text-center">
//                     <div className="p-4 bg-blue-50 rounded-lg">
//                       <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                       <div className="font-semibold text-gray-900">200+</div>
//                       <div className="text-sm text-gray-600">CME Programs</div>
//                     </div>
//                     <div className="p-4 bg-emerald-50 rounded-lg">
//                       <Network className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
//                       <div className="font-semibold text-gray-900">15,000+</div>
//                       <div className="text-sm text-gray-600">Members</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Registration Form */}
//             <div>
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-gray-900">Join API Today</CardTitle>
//                   <p className="text-gray-600">Complete your membership registration below</p>
//                 </CardHeader>
                
//                 <CardContent className="p-8">
//                   <form onSubmit={handlePayment} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <Label htmlFor="fullName">Full Name *</Label>
//                         <div className="relative">
//                           <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                           <Input
//                             id="fullName"
//                             name="fullName"
//                             type="text"
//                             required
//                             value={formData.fullName}
//                             onChange={handleInputChange}
//                             className="pl-10"
//                             placeholder="Dr. John Doe"
//                           />
//                         </div>
//                       </div>
                      
//                       <div>
//                         <Label htmlFor="email">Email Address *</Label>
//                         <div className="relative">
//                           <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                           <Input
//                             id="email"
//                             name="email"
//                             type="email"
//                             required
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             className="pl-10"
//                             placeholder="doctor@example.com"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <Label htmlFor="phone">Phone Number *</Label>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                           <Input
//                             id="phone"
//                             name="phone"
//                             type="tel"
//                             required
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             className="pl-10"
//                             placeholder="+91 9876543210"
//                           />
//                         </div>
//                       </div>
                      
//                       <div>
//                         <Label htmlFor="medicalRegistration">Medical Registration No. *</Label>
//                         <Input
//                           id="medicalRegistration"
//                           name="medicalRegistration"
//                           type="text"
//                           required
//                           value={formData.medicalRegistration}
//                           onChange={handleInputChange}
//                           placeholder="MCI12345678"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="specialization">Specialization *</Label>
//                       <Input
//                         id="specialization"
//                         name="specialization"
//                         type="text"
//                         required
//                         value={formData.specialization}
//                         onChange={handleInputChange}
//                         placeholder="e.g., Cardiology, Internal Medicine"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="institution">Current Institution *</Label>
//                       <Input
//                         id="institution"
//                         name="institution"
//                         type="text"
//                         required
//                         value={formData.institution}
//                         onChange={handleInputChange}
//                         placeholder="Hospital/Clinic Name"
//                       />
//                     </div>

//                     <Separator className="my-6" />

//                     {/* Payment Section */}
//                     <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
//                       <div className="flex items-center justify-between mb-4">
//                         <h4 className="text-lg font-semibold text-gray-900">Payment Summary</h4>
//                         <Badge className="bg-emerald-600 text-white">
//                           <Shield className="w-3 h-3 mr-1" />
//                           Secure
//                         </Badge>
//                       </div>
                      
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-gray-600">API Annual Membership</span>
//                         <span className="font-semibold">₹1,000</span>
//                       </div>
//                       <div className="flex justify-between items-center mb-4">
//                         <span className="text-gray-600">Processing Fee</span>
//                         <span className="font-semibold text-emerald-600">FREE</span>
//                       </div>
//                       <Separator />
//                       <div className="flex justify-between items-center mt-4">
//                         <span className="text-lg font-bold text-gray-900">Total</span>
//                         <span className="text-2xl font-bold text-emerald-600">₹1,000</span>
//                       </div>
//                     </div>

//                     <Button 
//                       type="submit" 
//                       className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
//                       disabled={isProcessing}
//                     >
//                       {isProcessing ? (
//                         <>Processing Payment...</>
//                       ) : (
//                         <>
//                           <CreditCard className="w-5 h-5 mr-2" />
//                           Pay ₹1,000 & Join API
//                         </>
//                       )}
//                     </Button>

//                     <p className="text-sm text-gray-500 text-center">
//                       By joining API, you agree to our terms of service and privacy policy. 
//                       This is a demo payment - no actual charges will be made.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Membership FAQ
//           </h2>
          
//           <div className="space-y-8">
//             <Card>
//               <CardContent className="p-6">
//                 <h4 className="font-semibold text-gray-900 mb-2">What's included in the membership?</h4>
//                 <p className="text-gray-600">
//                   Full access to CME programs, medical journals, networking events, research resources, 
//                   and exclusive member-only benefits including discounted conference rates.
//                 </p>
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardContent className="p-6">
//                 <h4 className="font-semibold text-gray-900 mb-2">How do I renew my membership?</h4>
//                 <p className="text-gray-600">
//                   Membership renewal notices are sent 30 days before expiry. You can renew online 
//                   through your member portal or contact our office directly.
//                 </p>
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardContent className="p-6">
//                 <h4 className="font-semibold text-gray-900 mb-2">Can I cancel my membership?</h4>
//                 <p className="text-gray-600">
//                   Yes, you can cancel anytime by contacting our member services. Please note that 
//                   membership fees are non-refundable for the current term.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Membership;



import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";
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
  User,
  MapPin,
  Building,
  AlertCircle,
  Loader2
} from "lucide-react";
import { mockData } from "../utils/mock";
import { toast } from "../hooks/use-toast";

// Backend API URL - Update this for production
// For Create React App, use REACT_APP_ prefix
// For Vite, use VITE_ prefix
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialization: "",
    registrationNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: ""
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    
    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Medical registration number is required";
    }
    
    if (!formData.specialization.trim()) {
      newErrors.specialization = "Specialization is required";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment
  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);

    try {
      // Step 1: Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Failed to load Razorpay. Please try again.");
      }

      // Step 2: Register member and create order
      const registerResponse = await fetch(`${API_BASE_URL}/membership/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const registerData = await registerResponse.json();

      if (!registerData.success) {
        throw new Error(registerData.message || "Registration failed");
      }

      const { orderId, amount, currency, razorpayKeyId } = registerData.data;

      // Step 3: Open Razorpay Checkout
      const options = {
        key: razorpayKeyId,
        amount: amount * 100, // Amount in paise
        currency: currency,
        name: "Association of Physicians of India",
        description: "Annual Membership Fee",
        image: "/logo.png", // Add your logo here
        order_id: orderId,
        handler: async function (response) {
          // Step 4: Verify payment automatically
          try {
            const verifyResponse = await fetch(
              `${API_BASE_URL}/webhooks/payment-callback`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              // Payment successful!
              toast({
                title: "🎉 Welcome to API!",
                description: `Your membership (ID: ${verifyData.data}) has been activated successfully!`,
              });

              // Reset form
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                specialization: "",
                registrationNumber: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                notes: ""
              });

              // Optional: Redirect to success page or dashboard
              // window.location.href = `/membership-success?id=${verifyData.data}`;
            } else {
              throw new Error(verifyData.message || "Payment verification failed");
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            toast({
              title: "Payment Verification Failed",
              description: verifyError.message || "Please contact support with your payment details",
              variant: "destructive"
            });
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
          city: formData.city,
          specialization: formData.specialization,
        },
        theme: {
          color: "#059669", // emerald-600
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            toast({
              title: "Payment Cancelled",
              description: "You have cancelled the payment process",
            });
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      
      razorpay.on("payment.failed", function (response) {
        setIsProcessing(false);
        toast({
          title: "Payment Failed",
          description: response.error.description || "Payment was unsuccessful",
          variant: "destructive"
        });
      });

      razorpay.open();

    } catch (error) {
      console.error("Payment error:", error);
      setIsProcessing(false);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
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
                    <span className="text-5xl font-bold text-emerald-600">₹5,000</span>
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
                    {/* Personal Information */}
                    <div>
                      <Label htmlFor="fullName" className="text-base font-semibold mb-3 block">
                        Personal Information
                      </Label>
                      <div className="space-y-4">
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
                              className={`pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                              placeholder="Dr. John Doe"
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="doctor@example.com"
                              />
                            </div>
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.email}
                              </p>
                            )}
                          </div>

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
                                className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="9876543210"
                              />
                            </div>
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Professional Information */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Professional Information
                      </Label>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="registrationNumber">Medical Registration No. *</Label>
                            <Input
                              id="registrationNumber"
                              name="registrationNumber"
                              type="text"
                              required
                              value={formData.registrationNumber}
                              onChange={handleInputChange}
                              className={errors.registrationNumber ? 'border-red-500' : ''}
                              placeholder="MCI12345678"
                            />
                            {errors.registrationNumber && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.registrationNumber}
                              </p>
                            )}
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
                              className={errors.specialization ? 'border-red-500' : ''}
                              placeholder="e.g., Cardiology"
                            />
                            {errors.specialization && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.specialization}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Address Information */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Address Information
                      </Label>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address">Address *</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <Textarea
                              id="address"
                              name="address"
                              required
                              value={formData.address}
                              onChange={handleInputChange}
                              className={`pl-10 ${errors.address ? 'border-red-500' : ''}`}
                              placeholder="Street address, apartment, suite, etc."
                              rows={2}
                            />
                          </div>
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.address}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              name="city"
                              type="text"
                              required
                              value={formData.city}
                              onChange={handleInputChange}
                              className={errors.city ? 'border-red-500' : ''}
                              placeholder="Mumbai"
                            />
                            {errors.city && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.city}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="state">State *</Label>
                            <Input
                              id="state"
                              name="state"
                              type="text"
                              required
                              value={formData.state}
                              onChange={handleInputChange}
                              className={errors.state ? 'border-red-500' : ''}
                              placeholder="Maharashtra"
                            />
                            {errors.state && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.state}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="pincode">Pincode *</Label>
                            <Input
                              id="pincode"
                              name="pincode"
                              type="text"
                              required
                              value={formData.pincode}
                              onChange={handleInputChange}
                              className={errors.pincode ? 'border-red-500' : ''}
                              placeholder="400001"
                              maxLength={6}
                            />
                            {errors.pincode && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.pincode}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Any additional information or requirements..."
                            rows={3}
                          />
                        </div>
                      </div>
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
                        <span className="font-semibold">₹5,000</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Processing Fee</span>
                        <span className="font-semibold text-emerald-600">FREE</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-emerald-600">₹5,000</span>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Pay ₹5,000 & Join API
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By joining API, you agree to our terms of service and privacy policy. 
                      <br />
                      Secure payment powered by Razorpay.
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
                <h4 className="font-semibold text-gray-900 mb-2">Is my payment secure?</h4>
                <p className="text-gray-600">
                  Yes! All payments are processed through Razorpay, India's leading payment gateway, 
                  using industry-standard encryption and security protocols.
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