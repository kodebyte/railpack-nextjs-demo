export const metadata = { title: 'Railpack Next.js Demo' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
