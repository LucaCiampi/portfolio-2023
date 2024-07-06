'use client';

import ExternalLinkSocial from '@/components/ExternalLinkSocial';

export default function ContactSection() {
  return (
    <div className="flex justify-between gap-4 flex-wrap">
      <ExternalLinkSocial
        className="icon"
        name={'github'}
        href={'https://github.com/LucaCiampi'}
      />
      <ExternalLinkSocial
        className="icon"
        name={'linkedin'}
        href={'https://linkedin.com/in/lucaciampi'}
      />
    </div>
  );
}
