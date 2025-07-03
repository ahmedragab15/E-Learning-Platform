import { UserHome, VisitorHome } from "@/components/index";

const Home = () => {
  const user = false;
  return (
    <>
      {user ? <UserHome /> : <VisitorHome />}
    </>
  );
};

export default Home;
