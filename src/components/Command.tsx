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
      <div className="px-3 pt-2">
        <div className="flex justify-center items-center">
          <div className="font-medium mr-2 text-">
            <span className="">portfolio</span>
            <span className="">@inmoh7 </span>
            <span className=""> ~ %</span>
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
