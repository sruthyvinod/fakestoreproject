

const Chip = ({children}) => {
  return (
    <div className="px-3 py-1 rounded-md text-center max-w-fit bg-emerald-500">
        <h1 className="text-emerald-50 text-sm">
           {children}
        </h1>
    </div>
  );
};

export default Chip;
