import { features } from "../contants/features";
import { Feature } from "../components/Feature";

export function Features() {
  return (
    <section id="FEATURES" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          What we offer ?
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, id) => (
            <Feature key={id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
