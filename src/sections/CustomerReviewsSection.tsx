import { reviews } from "../contants/reviews";
import { Review } from "../components/Review";

export function CustomerReviews() {
  return (
    <section id="REVIEWS" className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Discover firsthand testimonials highlighting positive experiences,
            value, and the impact of our services on our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {reviews.map((customer, id) => (
            <Review key={id} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
}
