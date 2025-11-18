import { Company } from '@/types/company';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechVision Inc',
    industry: 'Software',
    location: 'San Francisco, CA',
    size: '1000-5000',
    founded: 2015,
    description: 'Leading provider of enterprise software solutions and cloud infrastructure.',
    website: 'https://techvision.example.com',
    logo: '🚀'
  },
  {
    id: '2',
    name: 'DataStream Analytics',
    industry: 'Data & Analytics',
    location: 'New York, NY',
    size: '500-1000',
    founded: 2018,
    description: 'Advanced data analytics and business intelligence platform.',
    website: 'https://datastream.example.com',
    logo: '📊'
  },
  {
    id: '3',
    name: 'CloudNine Solutions',
    industry: 'Cloud Services',
    location: 'Seattle, WA',
    size: '100-500',
    founded: 2019,
    description: 'Cloud infrastructure and DevOps automation solutions.',
    website: 'https://cloudnine.example.com',
    logo: '☁️'
  },
  {
    id: '4',
    name: 'FinTech Global',
    industry: 'Financial Technology',
    location: 'London, UK',
    size: '5000+',
    founded: 2012,
    description: 'Revolutionary fintech platform transforming digital payments.',
    website: 'https://fintechglobal.example.com',
    logo: '💳'
  },
  {
    id: '5',
    name: 'HealthTech Innovations',
    industry: 'Healthcare',
    location: 'Boston, MA',
    size: '500-1000',
    founded: 2016,
    description: 'Digital health solutions and medical device innovations.',
    website: 'https://healthtech.example.com',
    logo: '🏥'
  },
  {
    id: '6',
    name: 'EduLearn Platform',
    industry: 'Education Technology',
    location: 'Austin, TX',
    size: '100-500',
    founded: 2020,
    description: 'Online learning platform with AI-powered personalization.',
    website: 'https://edulearn.example.com',
    logo: '📚'
  },
  {
    id: '7',
    name: 'GreenEnergy Systems',
    industry: 'Renewable Energy',
    location: 'Berlin, Germany',
    size: '1000-5000',
    founded: 2014,
    description: 'Sustainable energy solutions and smart grid technology.',
    website: 'https://greenenergy.example.com',
    logo: '⚡'
  },
  {
    id: '8',
    name: 'RetailTech Pro',
    industry: 'E-commerce',
    location: 'Los Angeles, CA',
    size: '500-1000',
    founded: 2017,
    description: 'Next-generation e-commerce platform and retail solutions.',
    website: 'https://retailtech.example.com',
    logo: '🛍️'
  },
  {
    id: '9',
    name: 'CyberSecure Labs',
    industry: 'Cybersecurity',
    location: 'Tel Aviv, Israel',
    size: '100-500',
    founded: 2019,
    description: 'Advanced cybersecurity and threat detection systems.',
    website: 'https://cybersecure.example.com',
    logo: '🔒'
  },
  {
    id: '10',
    name: 'AI Dynamics',
    industry: 'Artificial Intelligence',
    location: 'Singapore',
    size: '500-1000',
    founded: 2018,
    description: 'AI and machine learning solutions for enterprise applications.',
    website: 'https://aidynamics.example.com',
    logo: '🤖'
  },
  {
    id: '11',
    name: 'MediaFlow Studios',
    industry: 'Media & Entertainment',
    location: 'Toronto, Canada',
    size: '100-500',
    founded: 2016,
    description: 'Digital media production and streaming technology.',
    website: 'https://mediaflow.example.com',
    logo: '🎬'
  },
  {
    id: '12',
    name: 'LogiChain Network',
    industry: 'Logistics',
    location: 'Dubai, UAE',
    size: '1000-5000',
    founded: 2013,
    description: 'Supply chain management and logistics optimization platform.',
    website: 'https://logichain.example.com',
    logo: '📦'
  },
  {
    id: '13',
    name: 'PropTech Solutions',
    industry: 'Real Estate',
    location: 'Sydney, Australia',
    size: '100-500',
    founded: 2019,
    description: 'Smart property management and real estate technology.',
    website: 'https://proptech.example.com',
    logo: '🏢'
  },
  {
    id: '14',
    name: 'FoodTech Express',
    industry: 'Food & Beverage',
    location: 'Paris, France',
    size: '500-1000',
    founded: 2020,
    description: 'Food delivery and restaurant technology solutions.',
    website: 'https://foodtech.example.com',
    logo: '🍔'
  },
  {
    id: '15',
    name: 'TravelSmart Global',
    industry: 'Travel & Tourism',
    location: 'Barcelona, Spain',
    size: '100-500',
    founded: 2017,
    description: 'Smart travel booking and tourism management platform.',
    website: 'https://travelsmart.example.com',
    logo: '✈️'
  }
];

export const industries = Array.from(new Set(mockCompanies.map(c => c.industry))).sort();
export const locations = Array.from(new Set(mockCompanies.map(c => c.location))).sort();
export const companySizes = ['100-500', '500-1000', '1000-5000', '5000+'];
