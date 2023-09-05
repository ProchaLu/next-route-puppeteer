import { cookies } from 'next/headers';

export default function Home() {
  const session = cookies().get('session')?.value;
  return (
    <main>
      <h1>TEST</h1>
      <div>Session: {session}</div>
    </main>
  );
}
