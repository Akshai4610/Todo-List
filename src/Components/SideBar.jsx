import Button from "./Button";

export default function SideBar({btnClicked}) {
      return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            Your Project
          </h1>
          <div>
            <Button onClick={btnClicked}>+ Add Project</Button>
          </div>
          <ul></ul>
        </aside>
      );
    
}