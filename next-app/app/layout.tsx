import "./globals.css";

export const metadata = {
  title: "Karyotica Labs",
  description: "Biostimulants for enhanced agricultural yield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={
          "home wp-singular page-template page-template-elementor_canvas page page-id-7 wp-embed-responsive wp-theme-royal-elementor-kit elementor-default elementor-template-canvas elementor-kit-6 elementor-page elementor-page-7 e--ua-blink e--ua-chrome e--ua-webkit"
        }
        data-elementor-device-mode="desktop"
      >
        {children}
      </body>
    </html>
  );
}
