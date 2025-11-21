import "./globals.css";
import Image from "next/image";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

export default function Home() {
  const plusIcon = "/icons/plusIc.png";

  return (
    <div className="w-screen h-screen flex lg:items-center justify-center">
      <div className="w-screen gap-8 px-5 p-5 flex flex-col justify-center rounded-md lg:w-[75%] lg:py-5 lg:px-28 lg:h-3/4 lg:gap-7">
        <Header />

        {/* Form */}
        <div className="w-full flex items-center justify-center gap-1 lg:m-0 lg:mb-6 sm:max-w-[815px] lg:max-w-full lg:pr-2.5">
          <input
            type="text"
            className="w-full text-lg lg:text-base px-2 py-3 lg:h-12 lg:py-2 rounded-md outline-none bg-[#1D232F]"
            placeholder="Digite uma nova Tarefa"
          />

          <button className="px-2 w-[12%] lg:w-24 py-3 lg:py-2 lg:h-12 lg:text-sm lg:font-semibold rounded-md bg-[#56CA81] hover:cursor-pointer">
            <span className="hidden lg:block">Adicionar</span>

            <span className="flex lg:hidden justify-center">
              <Image
                src={plusIcon}
                alt="task-ic"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </span>
          </button>
        </div>

        <TasksList />
      </div>
    </div>
  );
}
