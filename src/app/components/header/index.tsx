import { BiSolidBellRing } from "react-icons/bi";
import Input from "./Input";
import Image from "next/image";
import profile from "@/app/assets/images/admin.png";
const Header = () => {
  return (
    <header className="pl-8 border p-2 flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing />
        <div className="flex gap-3">
          <Image
            alt="profile-photo"
            src={profile}
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <p className="font-semibold">Emre Ertuğrul</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
