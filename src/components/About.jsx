import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum
          similique nisi assumenda minima quam esse. Velit tenetur fuga
          repellendus nemo nam non. Dignissimos quidem, esse sit, cumque
          expedita quas laudantium eligendi tempore quo, repellat incidunt! Vero
          neque id voluptatibus cumque inventore? Dignissimos accusantium
          similique, cupiditate natus ab possimus temporibus.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          molestiae pariatur quisquam qui totam. Voluptates sequi quaerat,
          voluptatem, enim, repudiandae minus quis necessitatibus rerum nesciunt
          asperiores distinctio. Nulla laboriosam in quae amet non nesciunt
          debitis consectetur culpa accusantium, harum aut. Beatae, tempore
          voluptatum? Expedita quod, ea quis ex architecto aliquid.
        </p>
      </div>
    </div>
  );
}

export default About;
