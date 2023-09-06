export function scrollToPosition(percentage) {
  const scrollX = window.innerWidth * percentage;
  const scrollY = (window.innerHeight - window.innerHeight * 0.25) * percentage;

  window.scrollTo({ left: scrollX, behavior: "smooth" });
  window.scrollTo(0, scrollY);
}
