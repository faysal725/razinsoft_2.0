export default function PublicLayout({ children }) {
  return (
    <div className="relative">
        <nav className="bg-nPrimary-100">
            <div className="bg-amber-700 container-3xl">
                asdfasdfsdf
            </div>
        </nav>

        <main class="min-h-[90vh]">
            {children}
        </main>


        <footer>
            footer
        </footer>
    </div>
  );
}