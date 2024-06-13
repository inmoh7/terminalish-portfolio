const Breadcrumb = ({ currentPage }: { currentPage: string }) => {
  return (
    <>
      <div>
        ~{import.meta.env.VITE_USERNAME}/porfolio<span>{currentPage}</span>
      </div>
    </>
  );
};
export default Breadcrumb;
