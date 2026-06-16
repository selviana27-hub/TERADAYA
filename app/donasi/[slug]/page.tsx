interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DonasiDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold">
          Detail Donasi
        </h1>

        <p className="mt-4">
          Program: {slug}
        </p>

        <p className="mt-2 text-gray-500">
          Halaman detail donasi sedang dikembangkan.
        </p>
      </div>
    </div>
  );
}