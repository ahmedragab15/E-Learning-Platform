const Container = ({background = "", children }: {background?: string, children: React.ReactNode }) => {
  return (
    <section className={`${background} px-6 md:px-16 pb-8 py-6 md:py-10`}>
      <div className="container mx-auto space-y-6">{children}</div>
    </section>
  );
};

export default Container;
