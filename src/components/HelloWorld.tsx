import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-custom-blue mb-4">Hello World!</h1>
      <p className="text-xl text-green-600">Welcome to my first web page!</p>
    </div>
  );
};

export default HelloWorld;