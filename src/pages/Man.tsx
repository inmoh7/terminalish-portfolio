const Man = () => {
  return (
    <div className=" font-mono">
      <p className="text-green-300">The options are follows :</p>
      <div className="text-yellow-400">
        <p>{'--> man - prints man page (command help)'}</p>
        <p>{'--> cd <page>  - navigate between pages. ex: cd ~ , cd ../'}</p>
        <p>{'--> clear  - clears the termimal completely'}</p>
      </div>
    </div>
  );
};

export default Man;
