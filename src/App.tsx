import { useState } from "react";
import Terminal from "./components/Terminal";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <>
      <Terminal currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
}

export default App;
