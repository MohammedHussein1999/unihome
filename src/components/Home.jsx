// Home.js
import About from "./About";

import SliderTeatcher from "./SliderTeatcher";

// Lazy load the InstructorCard component

export default function Home() {
  return (
    <>
      <div className=" ">
        <About />
      </div>

      <div>
        <SliderTeatcher />
      </div>
    </>
  );
}
