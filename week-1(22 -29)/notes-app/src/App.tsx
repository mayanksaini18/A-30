import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log("TITLE:", title);
    console.log("ABOUT:", about);
  }

  return (
    <>
      <h2 className='text-base/7 font-semibold'>TODO - Notes App</h2>
      <hr />

      <form onSubmit={handleSubmit} className="form items-center">

        {/* TITLE */}
        <label htmlFor="title" className="text-sm/6 font-medium">
          Title
        </label>

        <input
          id="title"
          type="text"
          placeholder="Enter the title here"
          className="block border rounded min-w-0 grow bg-white p-1 text-base text-grey-900
                    placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* ABOUT */}
        <div className="col-span-full mt-4">
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
            About
          </label>

          <textarea
            id="about"
            name="about"
            rows={3}
            placeholder="Describe your note..."
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                      outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
                      focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                      sm:text-sm/6"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-indigo-600 text-white px-3 py-1.5 rounded"
        >
          Add Note
        </button>

      </form>
    </>
  );
}

export default App;
