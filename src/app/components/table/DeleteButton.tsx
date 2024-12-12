"use client";

import { deleteUser } from "@/app/utils/api";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const DeleteButton = async ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı hesabı kaldırıldı");
        router.refresh();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <button
      onClick={handleDelete}
      className="border p-2 rounded-md hover:shadow-lg text-red-500 hover:bg-red-200 transition"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
