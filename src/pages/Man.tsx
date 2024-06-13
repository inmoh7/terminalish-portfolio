const Man = () => {
  return (
    <div className=" font-mono px-4 mt-2">
      <p className="text-green-300">The options are follows :</p>
      <div className="text-yellow-400 px-4">
        <p>
          {'--> '} <span className="text-blue-500">ls</span>{' '}
          {'- list available pages'}
        </p>
        <p>
          {'--> '} <span className="text-blue-500">{'cd <page>'}</span>{' '}
          {'- navigate between pages. ex: cd ~ , cd ../'}
        </p>
        <p>
          {'--> '} <span className="text-blue-500">get quote</span>{' '}
          {' - generates a random quote to enlight you'}
        </p>
        <p>
          {'--> '} <span className="text-blue-500">clear</span>{' '}
          {' - clears the termimal completely'}
        </p>
        <p>
          {'--> '} <span className="text-blue-500">man</span>{' '}
          {' - prints man page (help)'}
        </p>
      </div>
    </div>
  );
};

export default Man;
