import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(LoginContext);
  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    setCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-neutral-200 flex-col gap-5">
      <h1 className="text-4xl font-bold text-blue-950">Shoplix</h1>
      <form
        className="h-1/2 w-1/4 shadow-sm flex flex-col justify-center items-center gap-5 rounded-xl
        shadow-blue-950"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          value={credentials.email}
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          className="h-15 w-9/10 px-3 border-2 border-zinc-600 focus:border-0 bg-neutral-200 text-neutral-700 caret-neutral-700
                rounded-xl font-semibold outline-blue-950 focus:outline-2 focus:caret-blue-950"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          className="h-15 w-9/10 px-3 border-2 border-zinc-600 focus:border-0 bg-neutral-200 text-neutral-700 caret-neutral-700
                rounded-xl font-semibold outline-blue-950 focus:outline-2 focus:caret-blue-950"
        />
        <button className="h-15 w-9/10 bg-blue-950 text-white font-semibold rounded-xl text-xl cursor-pointer hover:bg-blue-900">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
