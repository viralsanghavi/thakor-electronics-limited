const NavigationHeader = () => {
  return (
    <div className="bg-[#29272A] text-white">
      <div className="container mx-auto p-2">
        <div className="flex items-center gap-4">
          <p className="text-[#B3B3B3] cursor-pointer ">Products</p>
          <p className="text-[#B3B3B3] cursor-pointer ">Manufactures</p>
          <p className="text-[#B3B3B3] cursor-pointer ">Datasheets</p>
          <p className="text-[#B3B3B3] cursor-pointer ">Reference Designs</p>
          <p className="text-[#B3B3B3] cursor-pointer ">BOM Tools</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
