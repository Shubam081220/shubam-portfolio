import React from 'react';
import CV from '@/components/svgs/CV';
import Calender from '@/components/svgs/Calender';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

// Keep the icons in use in the array
export const journeyItems: JourneyItem[] = [
  {
    name: 'My Journey',
    description: 'Overview of my learning and career journey.',
    icon: Calender, // now used
    href: '/journey',
  },
  {
    name: 'Certificates & Achievements',
    description: 'A curated list of certificates and achievements.',
    icon: CV, // now used
    href: '/journey/certificates',
  },
];

// Named export instead of anonymous default
const journeyConfig = { journeyItems };
export default journeyConfig;
