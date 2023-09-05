'use client';

import { ChangeEvent, useState } from 'react';
import { updateSession } from './actions';

export default function FruitCommentForm() {
  const [session, setSession] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setSession(event.currentTarget.value);
  }

  return (
    <form>
      <textarea name="session" value={session} onChange={handleChange} />
      <button formAction={updateSession}>Update Session</button>
    </form>
  );
}
