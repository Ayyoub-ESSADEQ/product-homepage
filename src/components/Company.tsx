export function Company() {
  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
        Company
      </p>

      <ul className="mt-6 space-y-4">
        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            About{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Features{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Works{" "}
          </div>
        </li>

        <li>
          <div className="flex cursor-pointer text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {" "}
            Career{" "}
          </div>
        </li>
      </ul>
    </div>
  );
}
