import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../src/assets/android-chrome-512x512.png";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      "https://sheet.best/api/sheets/07037d85-d315-46d7-babb-7067999598a7",
      options
    ).then((res) => res.json());

    setEmail("");
    toast.success("Thank You for contacting us!");
  };

  return (
    <>
      <div className="w-full md:w-1/2 p-8 bg-white font-sans mx-auto">
        <div className="flex justify-center items-center">
          <img className="w-20 h-20 rounded-full" src={logo} alt="logo" />
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-center mb-6">
          Please enter your contact details to be the first to know.
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="lastName" className="block">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            className="text-lg rounded-xl relative p-2 md:p-4 w-full bg-sky-500 text-white border-b-4 border-indigo-700 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
