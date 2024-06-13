import { useEffect, useRef } from 'react';
import { CommandProps } from '../types/types';

const Command = ({
  children,
  isExecuted,
  command,
  handleKeyDown,
  handleCommandChange,
}: CommandProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <div className="px-3 pt-1 pb-2">
        <div className="flex justify-center items-center">
          <div className="inline-flex items-center">
            <div className="font-medium">
              <span className="bg-red-500 pl-1 ">portfolio</span>
              <span className="bg-green-600">
                @{import.meta.env.VITE_USERNAME}
              </span>
              <span className="bg-yellow-600">~ %</span>
            </div>
            <div className="size-[21px] m-0 p-0 box-border bg-transparent border-8 border-yellow-600  border-r-transparent  border-y-transparent"></div>
          </div>

          {!isExecuted && (
            <input
              ref={inputRef}
              type="text"
              placeholder=" "
              className="outline-none border-none flex-1 bg-transparent font-thin text-slate-50 caret-pink-300"
              value={command}
              onChange={handleCommandChange}
              onKeyDown={handleKeyDown}
            />
          )}

          {isExecuted && (
            <div className="flex-1 bg-transparent font-thin text-slate-50">
              {command}
            </div>
          )}
        </div>
        {isExecuted && children}
      </div>
    </>
  );
};
export default Command;
