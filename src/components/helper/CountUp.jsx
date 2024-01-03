import CountUp from "react-countup";

export default function CountUpNum({ isLoaded }) {
  return (
    <div
      id="loading"
      className="duration-300 ease-out opacity-1 fixed inset-0 w-full h-screen bg-green-400 flex items-center justify-center"
      style={{
        opacity: isLoaded ? 0 : 1,
      }}
    >
      <CountUp
        start={1}
        end={50}
        duration={2}
        onEnd={(e) => setTimeout(() => e.update(100), 2000)}
        formattingFn={(v) => {
          return v;
        }}
      />
    </div>
  );
}
