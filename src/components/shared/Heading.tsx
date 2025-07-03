interface IProps {
  title: string;
  description?: string;
  cta?: React.ReactNode;
}

 const Heading = ({ title, description, cta }: IProps) => {
  return (
    <div className={`${description ? "space-y-2" : ""} ${cta ? "flex justify-between items-center" : ""}`}>
      <h2 className="text-3xl font-semibold max-w-96 leading-8">{title}</h2>
      {description && <p className="text-gray-600 max-w-80 leading-tight">{description}</p>}
      {cta && cta}
    </div>
  );
};

export default Heading;