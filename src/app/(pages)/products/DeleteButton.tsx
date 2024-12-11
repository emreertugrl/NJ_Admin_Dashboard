"use client";

import Loader from "@/app/components/loader";
import { deleteProduct } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  id: string;
};
const DeleteButton = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;

    setIsLoading(true);

    deleteProduct(id)
      .then(() => {
        router.refresh();
        toast.warning("Ürün kaldırıldı");
      })
      .catch((err) => {
        toast.error("Ürün silinirken bir hata oluştu");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleDelete}
      className="py-1 px-3 bg-[#FEA5A5] hover:bg-[#F45757] transition rounded-md"
    >
      {isLoading ? <Loader /> : <span>Sil</span>}
    </button>
  );
};

export default DeleteButton;
