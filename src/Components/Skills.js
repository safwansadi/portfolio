import Frontend from "./Frontend";
import Backend from "./Backend";
import Software from "./Software";

function Skills() {
  return (
     <div className=""> 
      <header className="border-r-0 border-l-0 border-t-4 border-b-0 border-red-200 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 id="skills" className="text-3xl font-bold text-red-50">
            <i>Skills</i>
          </h1>
        </div>
      </header>
    <section className="container">
     
      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-3  justify-center">
        <Frontend></Frontend>
        <Backend></Backend>
        <Software></Software>
      </div>
    </section>
    </div>
  );
}
export default Skills;
