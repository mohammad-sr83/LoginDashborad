import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      document.cookie = `Token=${encodeURIComponent(
        JSON.stringify(data)
      )}; path=/`;
      router.push("Dashboard");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      if (value === "" || value[0] !== "0") {
        setphoneNumber(value);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[100svh] p-2 bg-[#2a3592]">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96 flex justify-between flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center flex-col gap-3">
          <h2 className="text-center text-3xl font-iranyekan">لاگین</h2>
          <h5
            className="text-center text-xl font-iranyekan"
            style={{ marginBottom: "1rem" }}
          >
            ورود به ادمین
          </h5>
        </div>

        <div className="flex justify-between items-center gap-3 flex-col">
          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.293.707L6.414 9.414a16.017 16.017 0 007.172 7.172l1.707-1.707A1 1 0 0116 14h3a1 1 0 011 1v2a2 2 0 01-2 2h-.5C9.82 19 5 14.18 5 8.5V8a2 2 0 01-2-2V5z"
                />
              </svg>
              <span className="ml-1 text-sm">+98</span>
            </span>

            <input
              type="text"
              placeholder="مثال: 9331234567"
              dir="ltr"
              value={phoneNumber}
              onChange={handleChange}
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full pl-16 pr-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <span className="text-slate-500 text-sm text-justify">
            لطفا شماره همراه خود را وارد نمایید تا کد تایید برای شما ارسال بشه
          </span>
        </div>
        <button
          type="submit"
          disabled={phoneNumber.length < 10}
          className={`mb-4 w-full ${
            phoneNumber.length < 10 ? "bg-[#6975e4]" : "bg-[#2a3592]"
          } p-2 text-white text-center rounded-lg`}
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
