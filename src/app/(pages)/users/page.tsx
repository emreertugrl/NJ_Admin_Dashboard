import UsersTable from "@/app/components/table/UsersTable";
import Modal from "./modal";

type Props = {
  searchParams: Promise<{ show?: string }>;
};
const Users = async ({ searchParams }: Props) => {
  const { show } = await searchParams;

  return (
    <div>
      <h1 className="title">Kullanıcılar</h1>
      <UsersTable />

      {/* Eğer urlde show parametresi varsa bir modal parametresi basılır */}
      {show && <Modal id={show} />}
    </div>
  );
};

export default Users;
