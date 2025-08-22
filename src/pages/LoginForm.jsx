import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin } from "../Redux/auth/auhtSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginForm() {
  const { register, handleSubmit } = useForm(); // restituisce  con tanti stati èer gestire il form (destrutturazione)
  const dispatch = useDispatch();
  const navigate = useNavigate(); // dirottamento della pagina dopo un evento

  const { error, loading } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(fakeLogin(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        if (res.payload.role === "admin") navigate("/admin");
        else navigate("/");
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen select-none">
      <Navbar />

      <main className="flex-grow flex items-center justify-center ">
        <div className="max-w-md w-full border rounded-xl shadow-2xl p-8 md:p-16 bg-[#D7C2A0]">
          <h2 className="text-xl font-bold mb-4 text-center text-[#3B2E2E]">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <input
              className="w-full border p-2 rounded text-[#3B2E2E]"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="w-full border p-2 rounded text-[#3B2E2E]"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button
              className="bg-[#2389A0] text-[#F3ECE0] px-4 py-2 rounded w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Caricamento..." : "Login"}
            </button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LoginForm;