const Badge = ({ number = 30 }) => {
  return (
    <div className="bg-white rounded-full py-1 px-3 flex items-center">
      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
      <span className="text-yellow-800 font-bold">{number}</span>
    </div>
  );
};

export default Badge;
