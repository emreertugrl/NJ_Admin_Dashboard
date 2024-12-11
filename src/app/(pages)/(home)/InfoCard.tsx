import Image from "next/image";
import { InfoItem } from "./page";

const InfoCard = ({ item }: { item: InfoItem }) => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center">
      <div>
        <h4 className="text-gray-700 whitespace-nowrap text-base md:text-sm">
          {item.label}
        </h4>
        <p className="font-bold text-xl md:text-2xl">{item.value}</p>
      </div>

      <Image alt="icon" src={item.icon} className="size-14" />
    </div>
  );
};

export default InfoCard;
