import { getUsers } from "@/app/utils/api";
import TableContainer from ".";
import { FaEye, FaTrash } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const UsersTable = async () => {
  const users = await getUsers();

  return (
    <TableContainer>
      <thead>
        <tr className="border-b shadow">
          <td className="py-4">#</td>
          <td>İsim</td>
          <td>Eposta</td>
          <td>Ülke</td>
          <td>Şehir</td>
          <td>Eylem</td>
        </tr>
      </thead>

      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b">
            <td className="py-8">{key + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>
              <div className="flex gap-2">
                <Link
                  href={`?show=${user.id}`}
                  className="border p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
                >
                  <FaEye />
                </Link>
                <DeleteButton id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default UsersTable;
