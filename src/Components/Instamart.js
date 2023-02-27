import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border-black border-2 mb-2 mt-2 p-2">
      <h3 className="text-md font-semibold">{title}</h3>
      {isVisible ? (
        <>
          <p>{description}</p>
          <button
            className="bg-red-800 text-white pr-2 pl-2 pt-1 pb-1 mt-2 rounded-md text-sm"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        </>
      ) : (
        <button
          className="bg-green-800 text-white pr-2 pl-2 pt-1 pb-1 mt-2 rounded-md text-sm"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl mb-2">Instamart</h1>
      <Section
        title="About Instamart"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title="Team Instamart"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title="Career Instamart"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
