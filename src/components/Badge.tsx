import { Star } from "lucide-react";

const Badge = ({ number = 30 }) => {
  return (
    <div className="flex justify-start">
      <div className="w-12 h-12 hover:cursor-pointer bg-gamePink rounded-full flex items-center justify-center z-10 text-white font-bold text-xl border-2 border-white">
        <Star size={20} />
      </div>
      <div className="bg-white rounded-r-full h-8 mt-2 py-3 px-5 -ml-1.5 z-0 flex items-center">
        <span className="text-yellow-800 font-bold">{number}</span>
      </div>
    </div>
  );
};

export default Badge;
