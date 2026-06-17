import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DonationPage() {
  return (
    <main>
      <Navigation />

      <section className="py-32 px-6 text-center">
        <h1 className="text-4xl font-bold">Donasi</h1>
        <p className="mt-6 text-gray-600">
          Dukung program kami melalui donasi.
        </p>

        <button className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-xl">
          Donasi Sekarang
        </button>
      </section>

      <Footer/>
    </main>
  );
}