function Badge() {
  return (
    <div className="w-16 lg:w-[6em] h-20 lg:h-[7.6875em] bg-[#77593d] absolute top-0 left-8 border-[#deceb1] border-solid border-x-4  border-y-0 text-[#deceb1] text-center z-[100]">
      <p className="text-xl font-bold">ONE</p>
      <div className="-translate-y-2">
        <p className="text-4xl font-bold">24</p>
        <p className="text-[6px] font-semibold">RESIDENCE</p>
      </div>
    </div>
  );
}

export default Badge;
