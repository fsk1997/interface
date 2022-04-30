import React from 'react';
import Link from 'next/link';
// import './index.css';

const Index = () => {
  return (
    <div>
      <h1>
        Homepage
      </h1>
      <p>
        <Link href="/iosheader">iOS Header</Link>
      </p>
      <p>
        <Link href="/bottom-tab-navigator">Bottom Tab Navigator</Link>
      </p>
      <p>
        <Link href="/loaded-image">Loaded Image Transition</Link>
      </p>
    </div>
  );
}


export default Index