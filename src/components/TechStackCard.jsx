const TechStackCard = ({ icon, name, link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 transition cursor-pointer hover:bg-indigo-800 hover:shadow-lg"
    >
      <div className="text-indigo-600 text-4xl mb-2 transition-all duration-300 group-hover:text-white group-hover:text-5xl">
        {icon}
      </div>
      <p className="text-gray-800 text-sm font-medium transition-all duration-300 group-hover:text-white group-hover:text-base group-hover:font-bold">
        {name}
      </p>
    </div>
  );
};

export default TechStackCard;
