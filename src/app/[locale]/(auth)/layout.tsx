export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
      <div className="flex-grow mt-20">{children}</div>
    </div>
  );
}
