import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [booksItem, setbooksItem] = useState([]);
  // console.log(booksDta);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ataullah1/JavaScript-Note/main/books.json'
    )
      .then((res) => res.json())
      .then((dta) => setBooks(...books, dta));
  }, []);
  // console.log(books);
  let totalPrice = 0;
  const handaleBtn = (book) => {
    if (booksItem.includes(book)) {
      console.log('sorry');
    } else {
      // total = total + booksItem.discount_price;
      setbooksItem([...booksItem, book]);
    }
  };
  booksItem.map((aa) => (totalPrice += aa.discount_price));
  const total = totalPrice.toFixed(2);
  // console.log(total);
  // console.log(booksItem);
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
              {books.map((book) => {
                // console.log(book);
                return (
                  <div
                    key={book.book_name}
                    className="p-4 w-full bg-[#b2bec3] rounded-lg hover:scale-[1.03] duration-300 mx-auto max-w-[400px]"
                  >
                    <div className="w-full h-[300px] bg-[#dcdde1] rounded-lg">
                      <img className="mx-auto h-full" src={book.image} alt="" />
                    </div>
                    <div className="mt-2 space-y-2">
                      <h1 className="text-2xl h-16 font-medium">
                        {book.book_name}
                      </h1>
                      <p className="h-[100px]">{book.description}</p>
                      <div>
                        <p className="text-xl">
                          Price:{' '}
                          <span className="font-bold">
                            <del className="text-red-600">
                              ${book.original_price}
                            </del>{' '}
                            - ${book.discount_price}
                          </span>
                        </p>

                        <button
                          className="bg-green-400 px-5 py-2 rounded-md font-semibold hover:translate-x-3 duration-300 active:scale-95"
                          onClick={() => handaleBtn(book)}
                        >
                          Add to card
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    {booksItem.map((book) => {
                      return (
                        <tr key={book.book_name} className="border-b py-5">
                          <td>{book.book_name}</td>
                          <td className="text-right py-3">
                            ${book.discount_price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-left">Total:</th>
                      <th className="text-right pt-3">${total}</th>
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
        <p className="text-center pt-14 pb-6 bg-[#2d3436] mt-9 text-white">
          Coded by{' '}
          <a
            href="https://www.facebook.com/ataullah0"
            className="text-pink-500 font-medium"
          >
            Md Ataullah
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
