// import { useContext, useState } from "react";
// import { LoginContext } from "../../context/LoginContext";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const { login } = useContext(LoginContext);
//   const handleChange = ({ target: { name, value } }) => {
//     setCredentials({ ...credentials, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(credentials);
//     setCredentials({
//       email: "",
//       password: "",
//     });
//   };
//   return (
//     <div className="h-screen w-full flex justify-center items-center bg-neutral-200 flex-col gap-5">
//       <h1 className="text-4xl font-bold text-blue-950">Shoplix</h1>
//       <form
//         className="h-1/2 w-1/4 shadow-sm flex flex-col justify-center items-center gap-5 rounded-xl
//         shadow-blue-950"
//         onSubmit={(e) => handleSubmit(e)}
//       >
//         <input
//           type="email"
//           name="email"
//           value={credentials.email}
//           placeholder="Email"
//           onChange={(e) => handleChange(e)}
//           className="h-15 w-9/10 px-3 border-2 border-zinc-600 focus:border-0 bg-neutral-200 text-neutral-700 caret-neutral-700
//                 rounded-xl font-semibold outline-blue-950 focus:outline-2 focus:caret-blue-950"
//         />
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           placeholder="Password"
//           onChange={(e) => handleChange(e)}
//           className="h-15 w-9/10 px-3 border-2 border-zinc-600 focus:border-0 bg-neutral-200 text-neutral-700 caret-neutral-700
//                 rounded-xl font-semibold outline-blue-950 focus:outline-2 focus:caret-blue-950"
//         />
//         <button className="h-15 w-9/10 bg-blue-950 text-white font-semibold rounded-xl text-xl cursor-pointer hover:bg-blue-900">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(LoginContext);
  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = () => {
    login(credentials);
    setCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <Card className="w-full max-w-sm bg-[#d1d1d1]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription className="text-neutral-800">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => handleChange(e)}
                  value={credentials.email}
                  className="bg-white"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => handleChange(e)}
                  value={credentials.password}
                  className="bg-white"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 bg-[#d1d1d1]">
          <Button type="submit" className="w-full bg-[#292929] text-white hover:bg-white hover:text-black"  
            onClick={() => handleSubmit()}>
            Login
          </Button>
          <Button variant="outline" className="w-full bg-[#292929] text-white hover:bg-white">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
