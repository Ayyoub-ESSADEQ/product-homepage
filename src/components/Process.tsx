type Process = {
  title: string;
  description: string;
  icon: React.ComponentType;
};

export function Process({ process }: Readonly<{ process: Process }>) {
  return (
    <li className="relative flex items-start opacity-0">
      <div
        className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
        aria-hidden="true"
      ></div>

      <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
        {<process.icon />}
      </div>
      <div className="ml-6">
        <h3 className="text-lg font-semibold text-black">{process.title}</h3>
        <p className="mt-4 text-base text-gray-600">{process.description}</p>
      </div>
    </li>
  );
}
