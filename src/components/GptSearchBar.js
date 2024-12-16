import React from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang)
  
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form className="relative w-full max-w-2xl">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="w-full py-4 pl-5 pr-16 text-lg text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-full shadow-md focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-4 -translate-y-1/2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 shadow-lg"
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
