import React from 'react';
import { FcOnlineSupport } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SupportIcon = () => {
  return (
    <Link
      to="/support"
      className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full cursor-pointer shadow-lg"
    >
      <FcOnlineSupport size={24} />
    </Link>
  );
};

export default SupportIcon;
