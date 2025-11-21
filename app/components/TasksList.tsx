import Image from "next/image";

const TasksList = () => {
  const editIcon = "/icons/editIc.svg";
  const trashIcon = "/icons/trashIc.svg";

  return (
    <>
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
              <Image
                src={editIcon}
                alt="Editar Tarefa"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </button>

            <button className="p-1 lg:p-2 hover:cursor-pointer">
              <Image
                src={trashIcon}
                alt="Editar Tarefa"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksList;
