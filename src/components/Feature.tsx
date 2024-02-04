type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType;
};

export function Feature({ feature }: { feature: Feature }) {
  return (
    <div>
      <feature.icon />
      <h3 className="mt-8 text-lg font-semibold text-black">{feature.title}</h3>
      <p className="mt-4 text-base text-gray-600">{feature.description}</p>
    </div>
  );
}
