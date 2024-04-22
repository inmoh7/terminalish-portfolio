const Command = ({
  children,
  isDone,
  command,
  handleKeyDown,
}: {
  isDone: boolean;
  children?: React.ReactNode;
  command?: string;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  
  return (
    <>
      <div className="px-3 py-1">
        <div className="flex justify-center items-center">
          <div className="font-bold mr-2">portfolio@infas7 ~ %</div>
          {!isDone && (
            <input
              type="text"
              placeholder=" "
              className="outline-none border-none flex-1 bg-transparent"
              onKeyDown={handleKeyDown}
            />
          )}

          {isDone && <div className="flex-1 bg-transparent">{command}</div>}
        </div>
        {isDone && children}
      </div>
    </>
  );
};
export default Command;
