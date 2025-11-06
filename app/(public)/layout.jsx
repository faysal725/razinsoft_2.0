import Navbar from "@/components/Navbar/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="relative">
        <Navbar />

        <main className="min-h-[90vh]">
            {children}
        </main>


        <footer>
            footer
        </footer>
    </div>
  );
}