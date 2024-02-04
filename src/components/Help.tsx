export function Help() {
  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
        Help
      </p>

      <ul className="mt-6 space-y-4">
        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Customer Support{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Delivery Details{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Terms & Conditions{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Privacy Policy{" "}
          </div>
        </li>
      </ul>
    </div>
  );
}
