import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 -right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
    </div>
  );
};

export default AnimatedBackground;