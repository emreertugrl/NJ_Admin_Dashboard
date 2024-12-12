import Form from "@/app/components/form";
import { getProductsById } from "@/app/utils/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
const Page = async ({ params }: Props) => {
  const { slug } = await params;

  // eğer parametre new ise ekleme modu new değilse düzenleme modunda çalış
  const isAdd = slug === "new";

  // düzenleme modundaysak urlde id'si bulunan eleamnın verilerini al
  let editItem;
  if (!isAdd) {
    editItem = await getProductsById(slug);
  }

  return (
    <div>
      <h1 className="title">{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</h1>
      <Form editItem={editItem} />
    </div>
  );
};

export default Page;
