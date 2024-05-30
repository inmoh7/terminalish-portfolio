import Breadcrumb from './Breadcrumb';

const TerminalHeader = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="w-full h-[25px] bg-gray-800 bg-gradient-to-r from-slate-900 to-slate-700 flex pl-3 sticky top-0 right-0">
      <div className="flex items-center gap-2">
        <div className="rounded-full w-3 h-3 bg-red-500"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <div className="ml-[30%]">
        <Breadcrumb currentPage={currentPage} />
      </div>
    </div>
  );
};

export default TerminalHeader;
