import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>
        Homepage
      </h1>
      <p>
        <Link href="/ios-header">iOS Header</Link>
      </p>
      <p>
        <Link href="/bottom-tab-navigator">Bottom Tab Navigator (Still Buggy)</Link>
      </p>
      <p>
        <Link href="/loaded-image">Loaded Image Transition</Link>
      </p>
      <p>
        <Link href="/fading-backdrop-blur">Fading Backdrop Blur</Link>
      </p>
      <p>
        <Link href="/sticky-header-links">Sticky Header Links</Link>
      </p>
    </div>
  );
}


export default Index