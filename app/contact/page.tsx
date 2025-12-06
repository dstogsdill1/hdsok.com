import type { Metadata } from 'next';
import { SITE_METADATA } from '@/config/site-metadata';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: SITE_METADATA.pages.contact.title,
  description: SITE_METADATA.pages.contact.description,
  keywords: [
    'contact HDS',
    'maintenance request',
    'facility management contact',
    'commercial maintenance quote',
    'emergency maintenance number',
    'Oklahoma City facility maintenance',
    'property maintenance contact'
  ],
  openGraph: {
    title: SITE_METADATA.pages.contact.title,
    description: SITE_METADATA.pages.contact.description,
    url: `${SITE_METADATA.global.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
