import { useState } from "react";
import { loginUser } from "./services/auth.service";

function App() {
  const [message, setMessage] = useState("");

  const handleLoginTest = async () => {
    try {
      const response = await loginUser({
        email: "keerthan@test.com",
        password: "Password@123",
      });

      console.log("Login response:", response);

      setMessage(`Welcome ${response.data.user.name}`);
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Authentication Test</h1>

      <button
        onClick={handleLoginTest}
        className="rounded-lg bg-black px-6 py-3 text-white hover:opacity-80"
      >
        Test Login
      </button>

      {message && <p className="text-lg">{message}</p>}
    </div>
  );
}

export default App;
