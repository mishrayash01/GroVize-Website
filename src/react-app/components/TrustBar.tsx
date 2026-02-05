export default function TrustBar() {
  return (
    <div className="bg-slate-50 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-slate-600">
        <p className="font-medium">
          <span role="img" aria-label="Indian Flag">🇮🇳</span> Made for Indian Retailers
        </p>
        <div className="flex items-center space-x-6">
          <p>
            Support: <a href="mailto:helpgrovize@gmail.com" className="hover:text-muted-gold">helpgrovize@gmail.com</a>
          </p>
          <a href="#" className="font-semibold text-muted-gold hover:text-darker-muted-gold">
            Login / Web Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}