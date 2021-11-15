import React, { useEffect, useState } from "react";

export default function Modal({ setShowModal, showModal, title }) {
  const [embedCode, setEmbedCode] = useState("");
  const key = process.env.REACT_APP_YOUTUBE;
  useEffect(() => {
    async function youtube() {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&type=video&q=${title}` +
          `trailer`
      )
        .then((result) => {
          const newRes = result.json();
          return newRes;
        })
        .then((newRes) => {
          setEmbedCode(newRes.items[0].id.videoId);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    youtube();
  }, [title, embedCode]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen p-20">
            <div className="relative w-full my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-gray-900 text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title} Official Trailer
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <iframe
                  src={`https://www.youtube.com/embed/${embedCode}`}
                  title="trailers"
                  style={{ height: "600px" }}
                />
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white rounded bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
