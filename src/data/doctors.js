const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    available: true,
    rating: 4.8,
    experience: "15 years",
    schedule: {
      Monday: "9:00 AM - 5:00 PM",
      Tuesday: "9:00 AM - 5:00 PM",
      Wednesday: "9:00 AM - 5:00 PM",
      Thursday: "9:00 AM - 5:00 PM",
      Friday: "9:00 AM - 1:00 PM"
    },
    bio: "Board-certified cardiologist specializing in preventive cardiology and heart failure management. Graduated from Harvard Medical School.",
    upcomingSlots: [
      "2023-06-15T10:00:00",
      "2023-06-15T11:00:00",
      "2023-06-16T09:00:00"
    ],
    hospital: "City Heart Center"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    available: true,
    rating: 4.7,
    experience: "12 years",
    schedule: {
      Monday: "8:00 AM - 4:00 PM",
      Tuesday: "8:00 AM - 4:00 PM",
      Thursday: "8:00 AM - 4:00 PM",
      Friday: "8:00 AM - 4:00 PM"
    },
    bio: "Specializes in treating migraines, epilepsy, and neurodegenerative diseases. Completed fellowship at Mayo Clinic.",
    upcomingSlots: [
      "2023-06-14T14:00:00",
      "2023-06-15T09:00:00",
      "2023-06-17T11:00:00"
    ],
    hospital: "Neurocare Institute"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    available: true,
    rating: 4.9,
    experience: "8 years",
    schedule: {
      Monday: "10:00 AM - 6:00 PM",
      Wednesday: "10:00 AM - 6:00 PM",
      Friday: "10:00 AM - 6:00 PM",
      Saturday: "9:00 AM - 2:00 PM"
    },
    bio: "Pediatric specialist with expertise in childhood vaccinations and developmental screenings. Fluent in English, Hindi, and Spanish.",
    upcomingSlots: [
      "2023-06-14T15:00:00",
      "2023-06-16T10:00:00",
      "2023-06-17T09:00:00"
    ],
    hospital: "Children's Wellness Center"
  },
  {
    id: 4,
    name: "Dr. Robert Williams",
    specialization: "Orthopedic Surgeon",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    available: false,
    rating: 4.6,
    experience: "18 years",
    schedule: {
      Tuesday: "7:00 AM - 3:00 PM",
      Wednesday: "7:00 AM - 3:00 PM",
      Thursday: "7:00 AM - 3:00 PM"
    },
    bio: "Specializes in joint replacements and sports medicine. Team physician for local college athletics program.",
    upcomingSlots: [],
    hospital: "Bone & Joint Specialists",
    unavailableReason: "On medical leave until July 1"
  },
  {
    id: 5,
    name: "Dr. Emily Zhang",
    specialization: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    available: true,
    rating: 4.5,
    experience: "10 years",
    schedule: {
      Monday: "11:00 AM - 7:00 PM",
      Tuesday: "8:00 AM - 4:00 PM",
      Thursday: "8:00 AM - 4:00 PM",
      Friday: "8:00 AM - 12:00 PM"
    },
    bio: "Cosmetic and medical dermatologist with expertise in skin cancer screenings and acne treatments.",
    upcomingSlots: [
      "2023-06-15T13:00:00",
      "2023-06-16T14:00:00",
      "2023-06-19T10:00:00"
    ],
    hospital: "Skin Health Associates"
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialization: "Psychiatrist",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    available: true,
    rating: 4.7,
    experience: "14 years",
    schedule: {
      Monday: "9:00 AM - 5:00 PM",
      Tuesday: "9:00 AM - 5:00 PM",
      Wednesday: "9:00 AM - 5:00 PM",
      Friday: "9:00 AM - 2:00 PM"
    },
    bio: "Specializes in anxiety, depression, and bipolar disorder. Offers both medication management and psychotherapy.",
    upcomingSlots: [
      "2023-06-14T16:00:00",
      "2023-06-15T11:00:00",
      "2023-06-16T15:00:00"
    ],
    hospital: "Mental Wellness Center"
  },
  {
    id: 7,
    name: "Dr. Olivia Martinez",
    specialization: "Obstetrician/Gynecologist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    available: true,
    rating: 4.9,
    experience: "11 years",
    schedule: {
      Monday: "8:00 AM - 4:00 PM",
      Tuesday: "8:00 AM - 4:00 PM",
      Thursday: "8:00 AM - 4:00 PM",
      Saturday: "9:00 AM - 1:00 PM"
    },
    bio: "Specializes in high-risk pregnancies and minimally invasive gynecologic surgery. Fluent in English and Spanish.",
    upcomingSlots: [
      "2023-06-15T09:00:00",
      "2023-06-17T10:00:00",
      "2023-06-19T11:00:00"
    ],
    hospital: "Women's Health Partners"
  },
  {
    id: 8,
    name: "Dr. David Kim",
    specialization: "Ophthalmologist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    available: true,
    rating: 4.6,
    experience: "13 years",
    schedule: {
      Monday: "7:30 AM - 3:30 PM",
      Wednesday: "7:30 AM - 3:30 PM",
      Friday: "7:30 AM - 3:30 PM"
    },
    bio: "Cataract and LASIK surgery specialist. Also treats glaucoma and diabetic eye disease.",
    upcomingSlots: [
      "2023-06-14T08:00:00",
      "2023-06-16T13:00:00",
      "2023-06-19T09:00:00"
    ],
    hospital: "Vision Care Institute"
  },
  {
    id: 9,
    name: "Dr. Angela Brown",
    specialization: "Family Medicine",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    available: false,
    rating: 4.8,
    experience: "16 years",
    schedule: {
      Tuesday: "8:00 AM - 5:00 PM",
      Wednesday: "8:00 AM - 5:00 PM",
      Thursday: "8:00 AM - 5:00 PM",
      Friday: "8:00 AM - 12:00 PM"
    },
    bio: "Provides comprehensive care for all ages with focus on preventive medicine and chronic disease management.",
    upcomingSlots: [],
    hospital: "Primary Care Associates",
    unavailableReason: "Fully booked this week"
  },
  {
    id: 10,
    name: "Dr. Thomas Anderson",
    specialization: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    available: true,
    rating: 4.5,
    experience: "9 years",
    schedule: {
      Monday: "8:30 AM - 4:30 PM",
      Tuesday: "8:30 AM - 4:30 PM",
      Thursday: "8:30 AM - 4:30 PM",
      Friday: "8:30 AM - 2:30 PM"
    },
    bio: "Specializes in sinus disorders, hearing loss, and pediatric ENT conditions. Performs minimally invasive procedures.",
    upcomingSlots: [
      "2023-06-15T14:00:00",
      "2023-06-16T11:00:00",
      "2023-06-20T10:00:00"
    ],
    hospital: "Ear, Nose & Throat Center"
  }
];

export default doctors;