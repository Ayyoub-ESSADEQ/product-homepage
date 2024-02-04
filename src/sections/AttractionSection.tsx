import { useEffect, useRef, useState } from "react";
import { processes } from "../contants/processes";
import { Process } from "../components/Process";

export function Attraction() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const cleanup = () => observer.disconnect();
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    observer.observe(ref.current as Element);

    return cleanup;
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current?.querySelectorAll("li").forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-slidein");
        }, 80 * i);
      });
    }
  }, [isIntersecting]);

  return (
    <section id='BOOST' ref={ref} className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How do we create success
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Achieve success by seamlessly navigating our user-friendly platform.
            From account creation to designing layouts and optimizing launches,
            empower your journey to online excellence.
          </p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          {processes.map((process, id) => (
            <Process key={id} process={process} />
          ))}
        </ul>
      </div>
    </section>
  );
}
