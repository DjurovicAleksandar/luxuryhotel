function Badge() {
  return (
    <div className="w-16 lg:w-[6em] h-20 lg:h-[7.6875em] bg-[#77593d] absolute top-[0rem] left-8 border-[#deceb1] border-solid border-x-4  border-y-0 text-[#deceb1] text-center z-[100]">
      <p className="text-xl lg:text-3xl font-bold mt-2">ONE</p>
      <div className="-translate-y-2">
        <p className="text-3xl lg:text-5xl font-bold">24</p>
        <p className="text-[7px] lg:text-[10px] font-semibold">RESIDENCE</p>
      </div>
    </div>
  );
}

export default Badge;
