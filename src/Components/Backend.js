function Backend() {
  return (
    <div className=" bg-white shadow-lg  rounded-lg my-4  px-4 py-4  max-w-sm">
      <div className="mb-0 tracking-wide px-2 py-3">
        <div className="border-b -mx-8 px-8 pb-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmA9afhdJMGGbJR8WgmzESr_UeW6ApD7ce68o-fBZqUDLlRpz_xihpolbdpcrsXH9iklo&usqp=CAU"
            style={{ width: "80%", height: "180px" }}
          />
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-green-800">
            <span>Node.js</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-400 w-full rounded-lg h-2">
              <div className="w-9/12 bg-green-800 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-green-800 pl-3">
            <span className="text-sm">75%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 text-green-400 tracking-tighter">
            <span>MongoDB</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-400 w-full rounded-lg h-2">
              <div className="w-9/12 bg-green-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-green-400 pl-3">
            <span className="text-sm">75%</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-gray-800">
            <span>Express.js</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-400 w-full rounded-lg h-2">
              <div className="w-4/6 bg-gray-800 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-gray-800 pl-3">
            <span className="text-sm">70%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-red-600">
            <span>SQL</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-9/12 bg-red-600 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-red-600 pl-3">
            <span className="text-sm">75%</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-purple-400">
            <span>PHP</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-7/12 bg-purple-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-purple-400 pl-3">
            <span className="text-sm">60%</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-2/5 tracking-tighter text-blue-400">
            <span>C#</span>
          </div>
          <div className="w-3/5">
            <div className="bg-gray-300 w-full rounded-lg h-2">
              <div className="w-7/12 bg-blue-400 rounded-lg h-2"></div>
            </div>
          </div>
          <div className="w-1/5 text-blue-400 pl-3">
            <span className="text-sm">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
