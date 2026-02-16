import type { Service, Industry, WhyChooseItem, Commitment } from '@/types';

export const services: Service[] = [
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Complete electrical solutions for industrial facilities, from design to installation and maintenance.',
    icon: 'Zap',
    details: [
      'Electrical system design and engineering',
      'Power distribution and control systems',
      'Motor control centers (MCC) installation',
      'Variable frequency drives (VFD) integration',
      'Emergency power systems',
      'Lighting systems and controls',
    ],
    capabilities: [
      'High voltage installations up to 33kV',
      'Hazardous area classification expertise',
      'Complete electrical construction management',
      'Power quality analysis and optimization',
    ],
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation Services',
    description: 'Precision instrumentation and control systems for critical industrial processes.',
    icon: 'Gauge',
    details: [
      'Process instrumentation design',
      'Flow, pressure, temperature, level measurement',
      'Analytical instrumentation',
      'Control valve selection and sizing',
      'Instrument calibration services',
      'DCS/PLC/SCADA integration',
    ],
    capabilities: [
      'SIL-rated safety instrumented systems',
      'Field instrumentation installation',
      'Loop checking and commissioning',
      'Instrument air systems',
    ],
  },
  {
    id: 'commissioning',
    title: 'Commissioning & Startup',
    description: 'Systematic verification and startup services ensuring safe and reliable plant operations.',
    icon: 'Play',
    details: [
      'Pre-commissioning services',
      'System checkout and testing',
      'Functional performance testing',
      'Integrated system testing',
      'Startup assistance and support',
      'Performance optimization',
    ],
    capabilities: [
      'Comprehensive commissioning procedures',
      'Factory acceptance testing (FAT)',
      'Site acceptance testing (SAT)',
      'Hot commissioning supervision',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Shutdown',
    description: 'Planned maintenance and turnaround support to maximize uptime and reliability.',
    icon: 'Wrench',
    details: [
      'Preventive maintenance programs',
      'Predictive maintenance services',
      'Shutdown planning and execution',
      'Emergency breakdown support',
      'Spare parts management',
      'Asset management consulting',
    ],
    capabilities: [
      '24/7 emergency response',
      'Turnaround management expertise',
      'Safe work practices and permits',
      'Comprehensive documentation',
    ],
  },
];

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    icon: 'Droplet',
    description: 'Upstream, midstream, and downstream oil and gas facilities',
  },
  {
    id: 'refineries',
    name: 'Refineries',
    icon: 'Factory',
    description: 'Petroleum refining and processing plants',
  },
  {
    id: 'gas-processing',
    name: 'Gas Processing',
    icon: 'Wind',
    description: 'Natural gas processing and LNG facilities',
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    icon: 'Zap',
    description: 'Thermal and combined cycle power plants',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    icon: 'Beaker',
    description: 'Chemical processing and petrochemical complexes',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Settings',
    description: 'Heavy industrial manufacturing facilities',
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'reliability',
    title: 'Proven Reliability',
    description: 'Decades of successful project delivery in critical industrial environments with zero lost-time incidents.',
    icon: 'Shield',
    stats: '99.8% uptime',
  },
  {
    id: 'safety',
    title: 'Safety First Culture',
    description: 'Comprehensive safety programs, HSE compliance, and rigorous risk management protocols.',
    icon: 'ShieldCheck',
    stats: 'Zero LTI',
  },
  {
    id: 'expertise',
    title: 'Technical Excellence',
    description: 'Highly skilled engineers and technicians with deep expertise in electrical and instrumentation systems.',
    icon: 'Award',
    stats: '30+ years',
  },
  {
    id: 'documentation',
    title: 'Complete Documentation',
    description: 'Comprehensive as-built drawings, test records, and maintenance documentation for full traceability.',
    icon: 'FileCheck',
    stats: '100% compliant',
  },
  {
    id: 'compliance',
    title: 'Standards Compliance',
    description: 'Full adherence to international standards: IEC, NEC, API, ISA, and client specifications.',
    icon: 'Clipboard',
  },
  {
    id: 'response',
    title: 'Rapid Response',
    description: '24/7 emergency support with快速 mobilization capabilities for critical situations.',
    icon: 'Clock',
    stats: '24/7 support',
  },
];

export const commitments: Commitment[] = [
  {
    id: 'safety',
    title: 'Safety',
    description: 'We prioritize the safety of our people, clients, and the environment in every project through rigorous safety protocols and continuous training.',
    icon: 'ShieldCheck',
  },
  {
    id: 'quality',
    title: 'Quality',
    description: 'Uncompromising quality standards ensure every installation meets or exceeds industry benchmarks and client expectations.',
    icon: 'Award',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'Our systems and services are engineered for maximum uptime and long-term performance in demanding industrial environments.',
    icon: 'BadgeCheck',
  },
  {
    id: 'transparency',
    title: 'Transparency',
    description: 'Clear communication, honest reporting, and full project visibility build trust and enable informed decision-making.',
    icon: 'Eye',
  },
  {
    id: 'partnership',
    title: 'Client Partnership',
    description: 'We work as an extension of your team, aligned with your goals and committed to your operational success.',
    icon: 'Handshake',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#why-choose', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
];
