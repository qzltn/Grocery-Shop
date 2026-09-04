const Subscribe = () => {
  return (
    <div className="bg-white w-full rounded-3xl px-5 py-12 mt-20 mb-20 shadow-sm">

      {/* Email Icon */}
      <div className="w-16 h-16 bg-white rounded-xl shadow mx-auto mb-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-800"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-5 max-w-[300px] mx-auto">
        Subscribe to our Newsletter
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-base text-center leading-6 mb-8 max-w-[350px] mx-auto">
        Get weekly updates on fresh produce, seasonal offers, and exclusive
        discounts right to your inbox.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full h-14 px-5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-green-900"
        />

        <button
          className="w-full h-14 bg-green-900 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
        >
          Subscribe
        </button>

      </div>

    </div>
  );
};

export default Subscribe;