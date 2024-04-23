import { useState, useEffect } from "react";
import popupBg from "../assets/popupBg.jpg";
import Button from "../components/shared/button/Button";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setShowPopup(false);

    localStorage.setItem("popupDisplayed", "true");
  };

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
      "https://sheet.best/api/sheets/4c16b880-4e49-4764-a9d7-c7af8cb5a350",
      options,
    ).then((res) => res.json());

    setEmail("");
    handleClose();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const popupDisplayed = localStorage.getItem("popupDisplayed");
      if (!popupDisplayed) {
        setShowPopup(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showPopup && (
        <div
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundImage: `url("${popupBg}") `,
            padding: "20px",
            width: "38vw",
            minWidth: "320px",
            minHeight: "370px",
            height: "74vh",
            border: "1px solid #14F194",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: "9999",
            borderRadius: "14px",
          }}
        >
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 relative"
          >
            <button onClick={handleClose} className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="white"
                className="flex-shrink-0 w-6 h-6"
              >
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
              </svg>
            </button>

            <h1 className="lg:text-4xl md:text-3xl sm:text-xl lg:py-7 text-center font-bold">
              <span className="text-white block">
                Sign Up now to enter into our monthly
              </span>
              <span className="text-[#14F194] block">$100k Giveaway!</span>
            </h1>
            {/* flex flex-col md:flex-row md:items-center md:justify-between bg-[#CACACA]/10 w-full md:w-auto rounded-full pl-5  */}
            <div className="md:flex">
              <div className="w-full">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  type="email"
                  className="bg-transparent w-full px-4 py-3 rounded-full border border-[#14F194] focus:outline-none focus:ring"
                  placeholder="Your email"
                />
              </div>
              <div className="w-full md:mt-0 mt-2">
                <Button
                  btnName="Subscribe"
                  btnType="submit"
                  classForButton="text-black w-full sm:px-4 sm:py-3"
                  bgColor="#14F194"
                />
              </div>
            </div>

            <p className="text-white text-sm text-center">
              If you agree to receive our Newsletter, please subscribe
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Popup;
