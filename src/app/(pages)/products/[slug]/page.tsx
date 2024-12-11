import Form from "@/app/components/form";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
const Page = async ({ params }: Props) => {
  const { slug } = await params;

  // eğer parametre new ise ekleme modunda eğer new değilse düzenleme modunda çalış
  const isAdd = slug === "new";

  return (
    <div>
      <h1 className="title">{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</h1>
      <Form />
    </div>
  );
};

export default Page;
