export class Moon {
  private static Icon({
    backgroundColor,
    iconColor,
  }: {
    backgroundColor: string;
    iconColor: string;
  }) {
    return (
      <div className="relative flex items-center justify-center mx-auto">
        <svg
          className={`${backgroundColor}`}
          width="65"
          height="70"
          viewBox="0 0 65 70"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
        </svg>
        <svg
          className={`absolute ${iconColor} w-9 h-9`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    );
  }

  static Red() {
    return (
      <Moon.Icon backgroundColor="text-rose-100" iconColor="text-rose-600" />
    );
  }

  static Yellow() {
    return (
      <Moon.Icon
        backgroundColor="text-yellow-100"
        iconColor="text-yellow-500"
      />
    );
  }

  static Orange() {
    return (
      <Moon.Icon backgroundColor="text-orange-100" iconColor="text-orange" />
    );
  }
}
