import { UserHome, VisitorHome } from "@/components/index";
import { isUser } from "@/dummyData";

const Home = () => {
  return <>{isUser ? <UserHome /> : <VisitorHome />}</>;
};

export default Home;
