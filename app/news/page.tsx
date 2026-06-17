import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <main>
      <Navigation />

      <section className="py-32 px-6 text-center">
        <h1 className="text-4xl font-bold">Berita</h1>
        <p className="mt-6 text-gray-600">
          Informasi terbaru dan artikel kegiatan.
        </p>
      </section>

      <Footer />
    </main>
  );
}