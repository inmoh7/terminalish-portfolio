import { ChangeEvent, KeyboardEvent, useState } from 'react';

import Command from './Command';
import { CommandType } from '../types/types';
import { commands } from '../data/commands';
import TerminalHeader from './TerminalHeader';

const Terminal = () => {
  const [currentPage, setCurrentPage] = useState<string>('');
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [commandsHistory, setCommandsHistory] = useState<CommandType[]>([]);

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
      <div className="hidden h-screen w-full text-white bg-slate-300 sm:flex items-center justify-center sm:px-2">
        <div className="w-[750px] h-[550px] bg-gray-500 drop-shadow-xl rounded-md overflow-x-hidden relative">
          <TerminalHeader currentPage={currentPage} />
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

            <Command
              isExecuted={false}
              command={currentCommand}
              handleCommandChange={handleCommandChange}
              handleKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="flex-col sm:hidden p-6 w-screen h-screen items-center content-center bg-slate-300">
        <div className="text-xl text-center">
          Bro, your screen is too small to display a terminal...
        </div>
        <div className="text-4xl w-full text-center mt-3 animate-bounce">🥹</div>
      </div>
    </>
  );
};
export default Terminal;
