function Frontend() {
  return (
    <div className=" bg-white shadow-lg  rounded-lg my-4  px-4 py-4  max-w-sm">
      <div className="mb-0 tracking-wide px-2 py-3">
        <div className="border-b -mx-8 px-8 pb-3">
          <img
            src="https://www.pngkey.com/png/detail/263-2630281_web-development-web-development-icon-png.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-yellow-400">
            <span>JavaScript</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-10/12 bg-yellow-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-yellow-400 pl-3">
            <span className="text-sm">80%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 text-blue-400 tracking-tighter">
            <span>React</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-4/6 bg-blue-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-blue-400 pl-3">
            <span className="text-sm">70%</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-red-400">
            <span>EJS</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-4/6 bg-red-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-red-400 pl-3">
            <span className="text-sm">70%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-red-600">
            <span>HTML</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-5/6 bg-red-600 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-red-400 pl-3">
            <span className="text-sm">80%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-blue-400">
            <span>Tailwind CSS</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-5/6 bg-blue-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-blue-400 pl-3">
            <span className="text-sm">80%</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-purple-400">
            <span>Bootstrap</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-5/6 bg-purple-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-purple-400 pl-3">
            <span className="text-sm">80%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
