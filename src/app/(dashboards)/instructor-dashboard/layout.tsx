import { Container, InstructorSidebar } from "@/components";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container As={"main"}>
        <div className="grid md:grid-cols-12 gap-4 lg:gap-8">
          <aside className="col-span-12 lg:col-span-3 p-8 rounded-md">
            <InstructorSidebar />
          </aside>
          <section className="min-h-screen col-span-12 lg:col-span-9">{children}</section>
        </div>
      </Container>
    </>
  );
};

export default layout;
