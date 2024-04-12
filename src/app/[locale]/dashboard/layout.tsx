import Footer from "@/components/footer";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
            <Header />
            <div className="flex-grow mt-20">{children}</div>
            <Footer />
          </div>
  )
}