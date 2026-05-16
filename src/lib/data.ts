import type { Service, Industry, WhyChooseItem, Commitment } from '@/types';

export const services: Service[] = [
  {
    id: 'manpower-supply',
    title: 'Manpower Supply',
    description: 'Qualified instrument technicians and E&I supervisors for routine maintenance, shutdowns, projects, commissioning, and emergency support.',
    icon: 'Users',
    details: [
      'Routine maintenance support',
      'Shutdown and turnaround manpower',
      'Project installation workforce',
      'Commissioning support teams',
      'Emergency call-out response',
      'Safety-trained field personnel',
    ],
    capabilities: [
      'Trained in safety standards and hazardous area practices',
      'Work permit and lockout/tagout compliance',
      'Experienced E&I supervisors and technicians',
      'Fast mobilization and site coordination',
    ],
  },
  {
    id: 'calibration-services',
    title: 'Calibration Services',
    description: 'Certified field instrument calibration and testing services for accurate process control and reliable performance.',
    icon: 'SlidersHorizontal',
    details: [
      'Flow transmitters (FT)',
      'Level transmitters (LT)',
      'Pressure transmitters (PT)',
      'Temperature transmitters (TT)',
      'Control valve calibration (FV/LV/PV/TV)',
      'Bench and onsite calibration',
    ],
    capabilities: [
      'As-found and as-left reporting',
      'Troubleshooting and rectification',
      'Certified calibration equipment',
      'Field and workshop calibration support',
    ],
  },
  {
    id: 'loop-checking',
    title: 'Loop Checking & Pre-Commissioning',
    description: 'Complete loop verification from field instruments to control systems with integrated safety and functional testing.',
    icon: 'Activity',
    details: [
      'Signal verification to DCS/PLC',
      'I/O point-to-point loop checks',
      'Interlock and trip testing',
      'Cause and effect verification',
      'ESD loop testing',
      'Pre-commissioning readiness checks',
    ],
    capabilities: [
      'Control room integration validation',
      'Comprehensive loop folder preparation',
      'Functional safety verification',
      'Startup readiness support',
    ],
  },
  {
    id: 'maintenance-breakdown',
    title: 'Maintenance & Breakdown Support',
    description: 'Rapid diagnostics and corrective support for instrumentation and electrical faults during operation and urgent plant events.',
    icon: 'Wrench',
    details: [
      'Fault finding and diagnostics',
      'Replacement of transmitters and control valves',
      'Emergency shutdown system checks',
      'Preventive and predictive maintenance support',
      'Instrument replacement and modification',
      'Punch list clearance services',
    ],
    capabilities: [
      '24/7 emergency response',
      'Reliable field repair execution',
      'Asset health and uptime focus',
      'Full work documentation and handover',
    ],
  },
  {
    id: 'electrical-manpower',
    title: 'Electrical Manpower Supply',
    description: 'Qualified electrical technicians and supervisors trained in safety, lockout/tagout, and hazardous area practices for electrical projects.',
    icon: 'Zap',
    details: [
      'Routine electrical maintenance',
      'Shutdown and turnaround projects',
      'New project installations',
      'Commissioning support',
      'Emergency breakdown support',
      'Safety and LOTO compliance',
    ],
    capabilities: [
      'Certified electrical workforce',
      'Site-ready installation teams',
      'Rapid fault restoration',
      'Structured project execution',
    ],
  },
  {
    id: 'electrical-installation',
    title: 'Installation & Testing',
    description: 'End-to-end electrical installation, equipment commissioning, and system testing for critical power and control infrastructure.',
    icon: 'HardDrive',
    details: [
      'Cable tray installation',
      'Power and control cable laying',
      'Cable glanding and termination',
      'Lighting and small power installation',
      'Panel and junction box installation',
      'Earthing and grounding systems',
    ],
    capabilities: [
      'Insulation and continuity testing',
      'Transformer and motor checks',
      'MCC and switchgear testing',
      'UPS, battery, and protection system commissioning',
    ],
  },
];

export const industries: Industry[] = [
  {
    id: 'oil-gas-processing',
    name: 'Oil & Gas Processing',
    icon: 'Droplet',
    description: 'Process facilities delivering hydrocarbons from field to refinery.',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical Complexes',
    icon: 'Beaker',
    description: 'Integrated chemical plants requiring precise control and safety.',
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    icon: 'Zap',
    description: 'Thermal, combined cycle, and power plant electrical systems.',
  },
  {
    id: 'refineries',
    name: 'Refineries',
    icon: 'Factory',
    description: 'Fuel processing and refining facilities with strict operational standards.',
  },
  {
    id: 'fertilizer-chemical',
    name: 'Fertilizer & Chemical',
    icon: 'FlaskConical',
    description: 'High-volume plant operations with complex instrumentation and electrical needs.',
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'mobilization',
    title: 'Fast Mobilization',
    description: 'Rapid deployment of trained technicians and supervisors to meet urgent operational needs.',
    icon: 'Clock',
    stats: '24/7 readiness',
  },
  {
    id: 'experienced-techs',
    title: 'Experienced Technicians',
    description: 'Skilled E&I professionals with hands-on field experience across oil & gas, petrochemical, and power sectors.',
    icon: 'Users',
    stats: 'Certified teams',
  },
  {
    id: 'documentation',
    title: 'Documentation & Reporting',
    description: 'Accurate as-found/as-left reports, loop folders, and full service documentation for complete traceability.',
    icon: 'FileCheck',
    stats: 'Full traceability',
  },
  {
    id: 'safe-execution',
    title: 'Safe Execution',
    description: 'Strict adherence to site standards, HSE protocols, and hazardous area practices on every assignment.',
    icon: 'ShieldCheck',
  },
  {
    id: 'reliable-support',
    title: 'Reliable Support',
    description: 'Dependable operational support during normal running, shutdowns, and project phases.',
    icon: 'Clipboard',
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
