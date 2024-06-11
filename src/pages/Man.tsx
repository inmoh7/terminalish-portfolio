const Man = () => {
  return (
    <div className=" font-mono px-4 mt-2">
      <p className="text-green-300">The options are follows :</p>
      <div className="text-yellow-400 px-4">
        <p>{'--> ls - list available pages'}</p>
        <p>{'--> cd <page>  - navigate between pages. ex: cd ~ , cd ../'}</p>
        <p>{'--> get quote  - generates a random quote to enlight you'}</p>
        <p>{'--> clear  - clears the termimal completely'}</p>
        <p>{'--> man - prints man page (help)'}</p>
      </div>
    </div>
  );
};

export default Man;
