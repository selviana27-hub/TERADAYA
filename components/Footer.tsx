'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              Tera Daya Indonesia
            </h3>

            <p className="mt-4 text-slate-400">
              Memberdayakan masyarakat dan generasi muda Indonesia
              melalui pendidikan dan aksi sosial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Menu
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Beranda</li>
              <li>Tentang</li>
              <li>Program</li>
              <li>Event</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Kontak
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>hi@teradayaindonesia.org</li>
              <li>+62 851-0020-9453</li>
              <li>Tangerang Selatan, Indonesia</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-500">
          © 2026 Tera Daya Indonesia. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}