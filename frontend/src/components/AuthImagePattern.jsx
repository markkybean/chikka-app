const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-screen">
      <div className="max-w-md text-center">
        <div className="flex items-center justify-center mb-8 relative">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg relative">
            {/* Message Icon */}
            <div className="absolute w-16 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 -mb-3"></div>
              <p className="text-primary font-bold">💬</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
