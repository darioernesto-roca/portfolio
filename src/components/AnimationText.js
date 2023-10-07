import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Dario Ernesto Roca",
          "a web developer",
          "a writer",
          "a scientist",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
