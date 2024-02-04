import { processes } from "../../contants/processes";
import { Process } from "../Process";

export function Attraction() {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How do we create success
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
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
