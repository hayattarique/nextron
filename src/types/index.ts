export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  capabilities: string[];
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats?: string;
}

export interface Commitment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}
