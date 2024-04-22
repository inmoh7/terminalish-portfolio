import Breadcrum from "./Breadcrum";
import Command from "./Command";

const Terminal = ({
  currentPage,
  handlePageChange,
}: {
  currentPage: string;
  handlePageChange: (page: string) => void;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("enter pressed");
    }
  };

  return (
    <>
      <div className="h-screen w-full text-white bg-slate-300 flex items-center justify-center">
        <div className="w-[750px] h-[550px] bg-gray-500 drop-shadow-xl rounded-md overflow-x-hidden">
          <div className="w-full h-[25px] bg-gray-700 flex pl-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-3 h-3 bg-red-500"></div>
              <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
              <div className="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
            <div className="ml-[30%]">
              <Breadcrum currentPage={currentPage} />
            </div>
          </div>
          <Command isDone={true} command="cd about">
            <div>This is about</div>
          </Command>

          <Command isDone={false} handleKeyDown={handleKeyDown} />
        </div>
      </div>
    </>
  );
};
export default Terminal;
