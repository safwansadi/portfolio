function Footer() {
  return (
    <footer id="footer">
      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-3  justify-center">
        <div>
          {" "}
          <a
            href="#aboutme"
            className="no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium "
          >
            About me
          </a>
          <a
            href="#projects"
            className="no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="no-underline hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium"
          >
            skills
          </a>
        </div>
        <div text-white>
          <h4 className="justify-center text-red-50">contacts:</h4>
          <ul>
            
            <li>
              <i className="text-white fas fa-envelope">
                {" "}
                &nbsp;safwaniftekher@gmail.com
              </i>{" "}
            </li>
             <i className=" mr-5 text-white fas fa-mobile-alt"> &nbsp;01878343370</i>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
