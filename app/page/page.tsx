import Image from 'next/image';

function delay() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default async function PagePage() {
  await delay();
  return (
    <div>
      <h1>PAGE</h1>
      <h2>Page Component</h2>
      <Image src="/images/image.jpg" alt="image" width={300} height={300} />
    </div>
  );
}
