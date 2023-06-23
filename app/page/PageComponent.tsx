'use client';

// make timeout 2s so the Loading component is shown
function delay() {
  return new Promise((res) => setTimeout(res, 2000));
}
// create a component that will be rendered after the timeout
export default async function PageComponent() {
  await delay();
  return <h2>Page Component</h2>;
}
