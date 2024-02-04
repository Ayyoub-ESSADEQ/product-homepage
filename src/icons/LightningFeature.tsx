export class Lightning {
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
          width="72"
          height="75"
          viewBox="0 0 72 75"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
        </svg>
        <svg
          className={`absolute ${iconColor} 00 w-9 h-9`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      </div>
    );
  }

  static Red() {
    return (
      <this.Icon backgroundColor="text-rose-100" iconColor="text-rose-600" />
    );
  }

  static Yellow() {
    return (
      <this.Icon backgroundColor="text-lime-100" iconColor="text-lime-600" />
    );
  }

  static Blue() {
    return (
      <this.Icon
        backgroundColor="text-purple-100"
        iconColor="text-purple-600"
      />
    );
  }
}
