import './App.css';

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h1 className="text-5xl text-center font-extrabold">Hello Ataullah</h1>
        <div className="flex gap-6 justify-between items-start">
          <div className="w-9/12 grid grid-cols-3 gap-4">
            <div className="p-4 bg-rose-400 rounded-lg">
              <div className="w-full h-56 bg-fuchsia-200 rounded-lg">
                <img src="" alt="" />
              </div>
              <div className="mt-6 space-y-2">
                <h1 className="text-2xl font-medium">Books Name</h1>
                <p>
                  Books description Lorem ipsum dolor si Lorem ipsum dolor si
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="text-xl">
                  Price:{' '}
                  <span className="font-bold">
                    <del>$30</del> - $25
                  </span>
                </p>

                <button className="bg-green-400 px-5 py-2 rounded-md font-semibold">
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div className="bg-emerald-200 w-1/4 min-h-64 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}

export default App;
