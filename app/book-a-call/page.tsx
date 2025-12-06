import type { Metadata } from 'next';
import { SITE_METADATA } from '@/config/site-metadata';
import BookACallClient from './BookACallClient';

export const metadata: Metadata = {
  title: SITE_METADATA.pages.bookACall.title,
  description: SITE_METADATA.pages.bookACall.description,
  keywords: [
    'schedule consultation',
    'book maintenance call',
    'facility management consultation',
    'HDS meeting',
    'commercial maintenance discussion'
  ],
  openGraph: {
    title: SITE_METADATA.pages.bookACall.title,
    description: SITE_METADATA.pages.bookACall.description,
    url: `${SITE_METADATA.global.siteUrl}/book-a-call`,
  },
};

export default function BookACallPage() {
  return <BookACallClient />;
}
