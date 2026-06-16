interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DonasiDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Detail Donasi</h1>

      <p className="mt-4">
        Slug Donasi: {slug}
      </p>

      <p className="mt-2 text-gray-600">
        Halaman detail donasi masih dalam pengembangan.
      </p>
    </main>
  );
}