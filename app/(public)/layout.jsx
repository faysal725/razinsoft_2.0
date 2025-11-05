export default function PublicLayout({ children }) {
  return (
    <div className="relative">
        <nav className="bg-white border-b border-b-gray-50 py-4 lg:py-6">
            <div className="bg-amber-700 container">
                asdfasdfsdf
            </div>
        </nav>

        <main className="min-h-[90vh]">
            {children}
        </main>


        <footer>
            footer
        </footer>
    </div>
  );
}