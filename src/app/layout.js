import "./globals.css";

export const metadata = {
  title: "IP-DNS-SSL-Lookup",
  description: "IP-DNS-SSL/TSL-Lookup",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
