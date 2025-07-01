import Image from "next/image";
import LoginForm from "./LoginForm";
import loginImage from "../../../../public/images/login_images.png";
import logo2 from "../../../../public/images/Logo2.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-8 my-16">
      <div className="space-y-4">
        <Image src={logo2} alt="logo" width={200} height={200} className="ml-4" />
        <h2 className="text-2xl font-semibold">Hi, Welcome Back</h2>
        <h3 className="text-md font-medium text-gray-500">Enter your account</h3>
        <LoginForm />
      </div>
      <Image src={loginImage} alt="login image" width={400} height={350} className="hidden lg:block rounded-md" />
    </div>
  );
};

export default Login;
