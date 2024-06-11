import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import Command from './Command';
import { CommandType } from '../types/types';
import { commands } from '../data/commands';
import TerminalHeader from './TerminalHeader';
import Home from '../pages/Home';

let firstRender = true;

const Terminal = () => {
  const [currentPage, setCurrentPage] = useState<string>('/');
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [commandsHistory, setCommandsHistory] = useState<CommandType[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
    }
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [commandsHistory]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const trimmedCommand = currentCommand.trim();

    if (currentCommand && e.key === 'Enter') {
      if (trimmedCommand === 'clear') {
        setCommandsHistory([]);
        setCurrentCommand('');
        return;
      }

      const commandIndex = commands.findIndex(
        (command) =>
          (command.type === 'cmd' || command.type === 'util') &&
          command.text === trimmedCommand
      );

      if (commandIndex !== -1) {
        setCommandsHistory((prev: CommandType[]) => [
          ...prev,
          commands[commandIndex],
        ]);
        commands[commandIndex].path
          ? setCurrentPage(commands[commandIndex].path as string)
          : setCurrentPage(currentPage);
        setCurrentCommand('');
      } else {
        setCommandsHistory((prev: CommandType[]) => [
          ...prev,
          { type: 'error', text: trimmedCommand },
        ]);
        setCurrentCommand('');
      }
    }
  };

  const handleCommandChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentCommand(e.target.value);
  };

  return (
    <>
      <div className="hidden h-screen w-full sm:flex items-center justify-center text-white bg-[url('/src/assets/images/bg-home.jpg')]  sm:px-2">
        <div className="sm:fixed top-0 right-0 w-screen h-screen bg-black opacity-20" />
        <div className="w-1/2 min-w-[550px]">
          <TerminalHeader currentPage={currentPage} />
          <div className="w-full h-[550px] bg-neutral-900 opacity-85 drop-shadow-xl rounded-b-md overflow-x-hidden pt-2">
            <div className="">
              {commandsHistory &&
                commandsHistory.map((cmd, index) => {
                  if (cmd.type === 'cmd' || cmd.type === 'util') {
                    return (
                      <Command key={index} isExecuted={true} command={cmd.text}>
                        {cmd.page && <cmd.page />}
                      </Command>
                    );
                  } else {
                    return (
                      <Command key={index} isExecuted={true} command={cmd.text}>
                        <div className="text-red-300 font-mono">
                          Invalid Command!
                        </div>
                      </Command>
                    );
                  }
                })}

              {firstRender && (
                <div className="mb-2">
                  <Home />
                </div>
              )}

              <div ref={bottomRef}>
                <Command
                  isExecuted={false}
                  command={currentCommand}
                  handleCommandChange={handleCommandChange}
                  handleKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* small screens */}
      <div className="flex-col sm:hidden p-6 w-screen h-screen items-center content-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="text-xl text-center text-white">
          Bro, your screen is too small to display a terminal...
        </div>
        <div className="text-4xl w-full text-center mt-3">🥹</div>
      </div>
    </>
  );
};
export default Terminal;
