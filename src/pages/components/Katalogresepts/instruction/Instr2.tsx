import React from 'react';

// Если у вас есть аватарки для комментариев, импортируйте их здесь
// import avatar from '../../image/avatar.png';

interface CommentProps {
  name: string;
  date: string;
  text: string;
  isReply?: boolean;
}

const Comment: React.FC<CommentProps> = ({ name, date, text, isReply = false }) => (
  <div className={`mb-6 ${isReply ? 'ml-12' : ''}`}>
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" /> {/* Заглушка аватара */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h4 className="font-bold text-sm leading-none">{name}</h4>
            <span className="text-gray-400 text-xs">{date}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.921 11.9L1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
            </svg>
          </button>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {isReply && <span className="text-blue-600 font-bold mr-1">{name}</span>}
          {text}
        </p>
      </div>
    </div>
  </div>
);

export function Instr2() {
  const commentPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#F9F9F9] min-h-screen font-sans">
      {/* Заголовок комментариев */}
      <div className="mb-6">
        <h3 className="font-bold text-lg">4 комментария</h3>
      </div>

      {/* Поле ввода нового комментария */}
      <div className="mb-10">
        <textarea
          placeholder="Напишите свой комментарий..."
          className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-green-500 text-sm transition-all"
        />
      </div>

      {/* Список комментариев */}
      <div className="space-y-8">
        <Comment 
          name="Тор Одинсон"
          date="10 мая в 12:35"
          text={commentPlaceholder}
        />

        <Comment 
          name="Тор Одинсон"
          date="10 мая в 12:35"
          text={commentPlaceholder}
          isReply={true}
        />
      </div>

      {/* Кнопка "Загрузить больше" */}
      <div className="mt-10 flex justify-center">
        <button className="px-8 py-2 border border-green-500 text-green-600 rounded-lg font-medium text-sm hover:bg-green-50 transition-colors active:scale-95">
          Загрузить больше
        </button>
      </div>
    </div>
  );
}