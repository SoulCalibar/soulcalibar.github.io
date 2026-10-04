export default function Footer() {
  return (
    <footer className="border-t border-ash/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-ash/40 text-sm">
          &copy; {new Date().getFullYear()} Soul Calibar. Crafted with melancholy and precision.
        </p>
        <p className="text-ash/30 text-xs tracking-wider font-cinzel">
          H . D
        </p>
      </div>
    </footer>
  );
}
