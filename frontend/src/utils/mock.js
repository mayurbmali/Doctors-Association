import React from "react";
import { Users, Calendar, Award, Clock } from "lucide-react";

export const mockData = {
  // Home page highlights
  highlights: [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      value: "80+",
      label: "Years of Excellence"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      value: "15,000+",
      label: "Active Members"
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-600" />,
      value: "200+",
      label: "CME Programs Annually"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      value: "50+",
      label: "Awards & Recognition"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Dr. Rajesh Sharma",
      designation: "Senior Cardiologist, AIIMS Delhi",
      quote: "API has been instrumental in my professional growth. The networking opportunities and CME programs are exceptional."
    },
    {
      name: "Dr. Priya Mehta",
      designation: "Pediatrician, Mumbai",
      quote: "Being an API member has connected me with leading physicians across India. The knowledge sharing is invaluable."
    },
    {
      name: "Dr. Amit Patel",
      designation: "Neurologist, Ahmedabad",
      quote: "The quality of educational content and research publications from API sets the gold standard in medical practice."
    },{
      name: "Dr. Amit Patel",
      designation: "Neurologist, Ahmedabad",
      quote: "The quality of educational content and research publications from API sets the gold standard in medical practice."
    },{
      name: "Dr. Amit Patel",
      designation: "Neurologist, Ahmedabad",
      quote: "The quality of educational content and research publications from API sets the gold standard in medical practice."
    },{
      name: "Dr. Amit Patel",
      designation: "Neurologist, Ahmedabad",
      quote: "The quality of educational content and research publications from API sets the gold standard in medical practice."
    }
  ],

  // Trustees
  trustees: [
    {
      id: 1,
      name: "Dr. Arun Kumar",
      designation: "President",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Leading cardiologist with 30+ years of experience. Former President of Indian Medical Association."
    },
    {
      id: 2,
      name: "Dr. Sunita Reddy",
      designation: "Vice President",
      image: "https://images.unsplash.com/photo-1594824078170-14d394d79af4?w=300&h=300&fit=crop&crop=face",
      bio: "Renowned gynecologist and healthcare administrator. Pioneer in women's health initiatives."
    },
    {
      id: 3,
      name: "Dr. Vikram Singh",
      designation: "Secretary General",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      bio: "Orthopedic surgeon and medical researcher. Published 100+ research papers in international journals."
    },
    {
      id: 4,
      name: "Dr. Kavita Nair",
      designation: "Treasurer",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      bio: "Dermatologist and healthcare policy expert. Advisor to Ministry of Health and Family Welfare."
    }
  ],

  // Leadership & Committees
  leadership: {
    advisory: [
      {
        name: "Dr. R.K. Sinha",
        designation: "Chairman, Advisory Board",
        specialization: "Internal Medicine"
      },
      {
        name: "Dr. Meera Agarwal",
        designation: "Senior Advisor",
        specialization: "Pulmonology"
      }
    ],
    executive: [
      {
        name: "Dr. Suresh Gupta",
        designation: "Executive Director",
        specialization: "Surgery"
      },
      {
        name: "Dr. Anjali Desai",
        designation: "Executive Member",
        specialization: "Oncology"
      }
    ],
    steering: [
      {
        name: "Dr. Mahesh Jain",
        designation: "Steering Committee Head",
        specialization: "Radiology"
      },
      {
        name: "Dr. Ritu Sharma",
        designation: "Member",
        specialization: "Anesthesiology"
      }
    ],
    districts: [
      {
        name: "Dr. Prakash Modi",
        designation: "Delhi Representative",
        specialization: "Emergency Medicine"
      },
      {
        name: "Dr. Arjun Nair",
        designation: "Mumbai Representative",
        specialization: "Psychiatry"
      }
    ]
  },

  // Meetings
  upcomingMeetings: [
    {
      id: 1,
      title: "Annual Conference 2024",
      date: "2024-03-15",
      time: "09:00 AM",
      venue: "India Habitat Centre, New Delhi",
      type: "Conference",
      description: "Three-day annual conference featuring latest developments in medical science.",
      registrationOpen: true
    },
    {
      id: 2,
      title: "Cardiology CME Workshop",
      date: "2024-02-28",
      time: "02:00 PM",
      venue: "Online (Zoom)",
      type: "Workshop",
      description: "Interactive workshop on latest cardiac intervention techniques.",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Regional Chapter Meet - South",
      date: "2024-03-05",
      time: "10:00 AM",
      venue: "Chennai Medical College",
      type: "Regional Meet",
      description: "Quarterly meeting for southern region members.",
      registrationOpen: true
    }
  ],

  pastMeetings: [
    {
      id: 1,
      title: "Winter Symposium 2023",
      date: "2023-12-10",
      venue: "AIIMS, New Delhi",
      type: "Symposium",
      highlights: "Over 500 physicians attended. Key focus on infectious diseases management."
    },
    {
      id: 2,
      title: "Emergency Medicine Workshop",
      date: "2023-11-20",
      venue: "King George Medical University, Lucknow",
      type: "Workshop",
      highlights: "Hands-on training for emergency protocols and life-saving techniques."
    }
  ],

  // Notifications
  notifications: [
    {
      id: 1,
      title: "New Membership Rates Effective January 2024",
      category: "Notice",
      date: "2024-01-01",
      content: "The membership fee has been revised to ₹1,000 per annum effective January 1, 2024. All benefits remain unchanged.",
      priority: "high"
    },
    {
      id: 2,
      title: "CME Credit Requirements Update",
      category: "Policy",
      date: "2024-01-10",
      content: "New guidelines for CME credit accumulation have been published. Members need minimum 20 credits per year.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Research Grant Applications Now Open",
      category: "Opportunity",
      date: "2024-01-15",
      content: "API Research Foundation is accepting applications for medical research grants up to ₹5 lakh.",
      priority: "medium"
    },
    {
      id: 4,
      title: "Annual Journal Publication",
      category: "Publication",
      date: "2024-01-20",
      content: "The latest edition of API Medical Journal is now available for download in the members portal.",
      priority: "low"
    }
  ],

  // Membership benefits
  membershipBenefits: [
    "Access to exclusive CME programs and workshops",
    "Annual subscription to API Medical Journal",
    "Networking opportunities with leading physicians",
    "Discounted rates for conferences and events",
    "Professional development resources",
    "Research collaboration opportunities",
    "Healthcare policy updates and advocacy",
    "Online medical library access"
  ],

  // History milestones
  historyMilestones: [
    {
      year: "1944",
      title: "Foundation of API",
      description: "Association of Physicians of India was established by a group of visionary doctors."
    },
    {
      year: "1950",
      title: "First Annual Conference",
      description: "Organized the first annual medical conference in Mumbai with 200+ participants."
    },
    {
      year: "1965",
      title: "National Recognition",
      description: "Gained national recognition and established partnerships with medical institutions across India."
    },
    {
      year: "1980",
      title: "CME Program Launch",
      description: "Launched structured Continuing Medical Education programs for member development."
    },
    {
      year: "1995",
      title: "Digital Transformation",
      description: "Embraced technology with online platforms and digital medical resources."
    },
    {
      year: "2010",
      title: "International Collaboration",
      description: "Established partnerships with international medical associations and organizations."
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Led national response initiatives and provided crucial support during the pandemic."
    },
    {
      year: "2024",
      title: "80 Years of Excellence",
      description: "Celebrating eight decades of advancing medical excellence and professional development."
    }
  ]
};

// Contact information
export const contactInfo = {
  address: {
    line1: "Association of Physicians of India",
    line2: "123 Medical Complex, Central Delhi",
    line3: "New Delhi - 110001, India"
  },
  phone: "+91 11 1234 5678",
  email: "info@apiindia.org",
  website: "www.apiindia.org",
  mapCoordinates: {
    lat: 28.6139,
    lng: 77.2090
  }
};

// Vision and Mission
export const visionMission = {
  vision: "To be the premier association of physicians in India, setting the highest standards of medical practice, education, and healthcare delivery while fostering innovation and excellence in patient care.",
  mission: [
    "Promote continuous medical education and professional development among physicians",
    "Advance medical research and evidence-based practice",
    "Foster collaboration and networking among healthcare professionals", 
    "Advocate for healthcare policies that benefit patients and practitioners",
    "Maintain the highest ethical standards in medical practice",
    "Support healthcare innovation and technological advancement"
  ]
};