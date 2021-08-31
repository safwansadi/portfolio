function Projects() {
  return (
    <div className="bg-gray-800">
      <header className="border-r-0 border-l-0 border-t-4 border-b-0 border-red-200 bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 id="projects" className="text-3xl font-bold text-red-50">
            <i>Projects</i>
          </h1>
        </div>
      </header>
      <div className="container w-3/4 justify-center mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl  mb-2 text-gray-800">IdeaSharing-web app</h2>
          <p>
            {" "}
            A simple web app similar to social media app with signup, login,
            live chat, follow/unfollow, create/update/delete posts & news feed
            features
            <a
              className="no-underline mt-2 w-3/4 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://ideasharingapp.herokuapp.com/"
              target="_blank"
            >
              View Demo
            </a>
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/ideasharing-app"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            Node.js, Express.js, MongoDB, EJS, JWT, Axios, Bootsrap, Socket.io,
            MVC
          </p>
        </div>

        {/*  //p2 */}

        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl mb-2 text-gray-800">Vidly-Movieapp API</h2>
          <p>
            {" "}
            An API for handling signup-login-genres-movies-rental-customer
            related request and response of a web based movie application.
            <a
              className="no-underline mt-2 w-3/4 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://documenter.getpostman.com/view/16995411/TzskE3Wa"
              target="_blank"
            >
              Documentation
            </a>
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/vidly-movieapp"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            Node.js, Express.js, MongoDB, mongoose, JWT, Postman
          </p>
        </div>
        {/* //p3 */}
        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl mb-2 text-gray-800">TravelBD-webapp</h2>
          <p>
            {" "}
            A simple web app developed by react.js, It shows some beautiful
            tourist places in Bangladesh
            <a
              className="no-underline w-3/4 mt-4 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://6122688d3aa06f048fae36ed--stupefied-volhard-05c1b1.netlify.app/"
              target="_blank"
            >
              View Demo
            </a>
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/travel-webapp"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            React, React-router, JSX, CSS
          </p>
        </div>
        {/* //p4 */}
        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl mb-2 text-gray-800">DoctorPatient-webportal</h2>
          <p>
            {" "}
            This is a webapp which will basically help patient to search doctors
            as well as make appointment easy.It was an university web-tech
            course's project
            <a
              className="no-underline w-3/4 mt-4 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/DoctorPatient-webportal"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            PHP, MySQL, Xampp, JavaScript, HTML, CSS
          </p>
        </div>
        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl  mb-2 text-gray-800">TodoApp</h2>
          <p>
            {" "}
            A simple todo app which was created with node-express-mongoDB.To use
            the type <b>Uername: Fullstack and password: javascript</b>
            <a
              className="no-underline w-3/4 mt-4 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://fullstacktasktodoapp.herokuapp.com/"
              target="_blank"
            >
              View Demo
            </a>
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/Todo-app"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            Node.js, Express.js, MongoDB, Axios, Bootsrap
          </p>
        </div>
        <div class="lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl  mb-2 text-gray-800">Video_Conferencing</h2>
          <p>
            {" "}
            this is a complete video conferencing and live chat app. developed
            according to freelance-client's requirement
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/Video_Conferencing"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            Node.js, Express.js, MongoDB, EJS, JWT, Axios, Bootsrap, Socket.io,
            MVC
          </p>
        </div>
        <div class="mb-8 lg:h-100 md:h-auto sm:h-auto bg-red-50 p-6 rounded-md shadow-md transform hover:scale-105 duration-300 ease-in-out">
          <h2 class="text-2xl  mb-2 text-gray-800">contact-reactapp</h2>
          <p>
            Simple react app to manage contact with CRUD operations.
            <a
              className="no-underline w-3/4 mt-2 justify-center mx-auto block bg-gray-400 text-gray-600 rounded  hover:bg-gray-800 hover:text-white"
              href="https://github.com/safwansadi/contact-reactapp"
              target="_blank"
            >
              View Code
            </a>
          </p>
          <p className="font-light text-gray-500 text-lg my-2">
            javascript, React.js, react-router-dom, json server, Axios, CRUD
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
