

const Card = ({children}) => {
  return (
    <div className="bg-transparent p-3 border rounded-md flex flex-col gap-3 shadow-lg ">
      {children}
    </div>
  );
};

export default Card;
