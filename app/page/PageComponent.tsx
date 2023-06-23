'use client';

import Image from 'next/image';

function delay() {
  return new Promise((res) => setTimeout(res, 2000));
}

export default async function PageComponent() {
  await delay();
  return (
    <div>
      <h2>Page Component</h2>
      <Image src="/images/image.jpg" alt="image" width={300} height={300} />
    </div>
  );
}
