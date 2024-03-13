import './App.css';

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl lg:text-5xl text-center font-extrabold py-5 mb-9 bg-[#00b894]">
          Snowy Books Shop
        </h1>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
            {/* Left part all books card */}

            <div className="w-full sm:w-1/2 lg:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
              <div className="p-4 bg-[#b2bec3] rounded-lg hover:scale-105 duration-300 mx-auto max-w-[400px]">
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

                  <button className="bg-green-400 px-5 py-2 rounded-md font-semibold hover:translate-x-3 duration-300 active:scale-95">
                    Add to card
                  </button>
                </div>
              </div>
              <div className="p-4 bg-[#b2bec3] rounded-lg hover:scale-105 duration-300 mx-auto max-w-[400px]">
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

                  <button className="bg-green-400 px-5 py-2 rounded-md font-semibold hover:translate-x-3 duration-300 active:scale-95">
                    Add to card
                  </button>
                </div>
              </div>
              <div className="p-4 bg-[#b2bec3] rounded-lg hover:scale-105 duration-300 mx-auto max-w-[400px]">
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

                  <button className="bg-green-400 px-5 py-2 rounded-md font-semibold hover:translate-x-3 duration-300 active:scale-95">
                    Add to card
                  </button>
                </div>
              </div>
            </div>

            {/* Right part Add to card */}
            <div className="bg-[#b2bec3] w-full sm:w-1/2 lg:w-1/4 min-h-64 rounded-lg p-4 mx-auto">
              <h1 className="text-center text-xl font-bold underline">
                Add Card List
              </h1>
              <div>
                <table className="table-auto w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Name</th>
                      <th className="text-right py-2">Prices</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b py-5">
                      <td>The Sliding Mr.Bones</td>
                      <td className="text-right py-3">$100</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-left">Total:</th>
                      <th className="text-right pt-3">$000</th>
                    </tr>
                  </tfoot>
                </table>
                <button className="py-2 w-full text-center font-bold mt-7 bg-green-400 rounded-lg duration-300 hover:bg-green-600 hover:text-white active:scale-95">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
