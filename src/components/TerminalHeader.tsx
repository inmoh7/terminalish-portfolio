import Breadcrumb from './Breadcrumb';

const TerminalHeader = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="w-full h-[30px] bg-zinc-700 flex pl-3 rounded-t-md">
      <div className="flex items-center gap-2">
        <div className="rounded-full w-3 h-3 bg-red-500"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <div className="ml-[30%] flex items-center justify-center">
        <Breadcrumb currentPage={currentPage} />
      </div>
    </div>
  );
};

export default TerminalHeader;
