function Profile() {
  //flex md:flex-row md:justify-items-center
  return (

<figure className="border-4 border-red-200 mt-0  bg-gray-800 rounded-xl p-4 md:p-0 h-70">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-3 ">
          <div className="flex md:flex-column md:justify-items-center">
            <img
              className="img-fluid rounded-lg"
              src="/safwan.jpg"
              alt=""
              width="384"
              height="512"
            />
          </div>
        </div>
        <div className="sm:grid-cols-12 lg:grid-cols-9 ">
          <div className="pt-6  text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-red-50  text-lg font-semibold">
                <i>
                  “My name is <h1 className="text-red-200">Safwan Iftekhar Uddin</h1>I am a Web Developer.I work on both Frontend and Backend.
                  Currently studying Computer Science & software Engineering at{" "}
                  <a
                    className ="no-underline text-red-200"
                    href="https://www.aiub.edu/"
                    target="_blank"
                  >
                    American International University Bangladesh
                  </a>{" "}<br/>
                  I am interested in fullstack development<br/> I am a quick learner and passionate about learnig new technologies”
                </i>
              </p>
            </blockquote>

            <figcaption className="pt-16 font-medium">
              <a href="https://github.com/safwansadi" target="_blank">
                <i class="text-4xl text-white fab fa-github"></i>
              </a>{" "}
              &nbsp;
              <a
                href="https://www.linkedin.com/in/safwan-iftekhar-uddin/"
                target="_blank"
              >
               <i className="text-4xl text-white fab fa-linkedin"></i>
              </a>
              <br />
              <i className="text-white fas fa-envelope">
                {" "}
                &nbsp;safwaniftekher@gmail.com
              </i> <br />
              <i className="text-white fas fa-mobile-alt"> &nbsp;01878343370</i>
            </figcaption>
          </div>
        </div>
      </div>
    </figure>

  );
}

export default Profile;
