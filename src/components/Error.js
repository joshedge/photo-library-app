const Error = ({ status, handleSetError }) => {
  if (status) {
    return (
      <div className="flex relative justify-center">
        <div className="w-96 text-center absolute text-lg font-300 py-4 text-emerald-900 bg-gray-100 px-8 my-4 shadow-xl">
          <h1>
            That search term did not return any results. Check your spelling, or
            try again with a new search term.
          </h1>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Error;
