import "./globals.css";
import Image from "next/image";
import editIcon from "../public/icons/editIc.svg";
import taskIcon from "../public/icons/task-ic.png";
import trashIcon from "../public/icons/trashIc.svg";
import plusIcon from "../public/icons/plusIc.png";

export default function Home() {
  return (
    <div className="w-screen h-screen flex lg:items-center justify-center">
      <div className="w-screen gap-8 px-5 p-5 flex flex-col justify-center rounded-md lg:w-[75%] lg:py-5 lg:px-28 lg:h-3/4 lg:gap-7">
        {/* Header */}
        <div className="text-center flex items-center justify-center mb-12 gap-2">
          <Image src={taskIcon} alt="task-ic" />

          <h3 className="text-3xl font-semibold">App Tarefa</h3>
        </div>

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
              <Image src={plusIcon} alt="task-ic" />
            </span>
          </button>
        </div>

        {/* TasksList */}
        <div className="p-0 max-h-48 w-full flex flex-col items-center gap-[19px] lg:overflow-y-scroll custom-scroll">
          {/* TaskItem */}
          <div className="w-full px-3 py-3 lg:py-5 flex items-center justify-between gap-5 rounded-md bg-[#1D232F]">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]"
              />
              <p className="text-lg">Estudar React</p>
            </div>

            {/* Btns */}
            <div className="flex gap-1 lg:gap-2">
              <button className="p-1 lg:p-2 hover:cursor-pointer">
                <Image src={editIcon} alt="Editar Tarefa" />
              </button>

              <button className="p-1 lg:p-2 hover:cursor-pointer">
                <Image src={trashIcon} alt="Editar Tarefa" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
