import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 p-6">

      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Photo Gallery
      </h1>

      {/* Pinterest Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

        {users.map((user) => (
          <div
            key={user.id}
            className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            <img
              src={`https://picsum.photos/300/300?random=${user.id}`}
              alt={user.title}
              className="w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-800">
                {user.title}
              </h2>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Showdata;