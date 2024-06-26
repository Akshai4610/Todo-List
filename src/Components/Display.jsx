import Button from "./Predefined_Elements/Button";
import noProjectImg from "../assets/no-projects.png";
import HeadPara from "./Predefined_Elements/HeadPara";

export default function Display({ btnProjectStart }) {
  return (
    <div className="mt-2 text-center w-2/3 ">
      <img
        src={noProjectImg}
        alt="Todo.img"
        className="w-16 h-16 object-contain mx-auto"
      />
      <HeadPara head_2="No Project Selected">
        Select a project or get started with a new one
      </HeadPara>
      <p className="mt-8">
        <Button onClick={btnProjectStart}>Create a new Project</Button>
      </p>
    </div>
  );
}
