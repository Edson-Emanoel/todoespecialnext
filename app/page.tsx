import "./globals.css"

export default function Home() {
  return (
    <div className="w-screen h-screen flex lg:items-center justify-center">
      <div className="w-screen gap-8 px-5 p-5 flex flex-col justify-center rounded-md lg:w-[55%] lg:py-5 lg:px-28 lg:h-3/4 lg:gap-7 lg:bg-[#1D232F]">
        {/* Header */}
        <div className="text-center flex items-center justify-center lg:justify-start lg:mb-0 gap-2">
          <img src="/task-icon.png" alt="task-ic" />

          <h3 className="text-3xl font-medium">App Tarefa</h3>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center gap-2 lg:mb-6">
          <input type="text" className="w-full text-lg lg:text-sm px-2 py-3 lg:py-2 rounded-md outline-none bg-[#1D232F] lg:bg-none lg:border border-[#FFFFFF]" placeholder="Digite uma nova Tarefa" />
          <button className="px-2 py-3 lg:py-2 lg:text-xs lg:font-medium rounded-md bg-[#56CA81] hover:cursor-pointer">Adicionar</button>
        </div>

        {/* TasksList */}
        <div className="max-h-48 flex flex-col gap-[19px] lg:overflow-y-scroll custom-scroll pr-2">
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar React</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Python</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Expo(React-Native)</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Python</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Expo(React-Native)</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Python</p>
          </div>
          {/* TaskItem */}
          <div className="px-3 py-3 flex items-center gap-5 rounded-md bg-[#1D232F] lg:border border-white">
            <input type="checkbox" className="w-5 h-5 border-2 border-[#7B94C5] rounded-md accent-[#7B94C5]" />
            <p>Estudar Expo(React-Native)</p>
          </div>
        </div>
      </div>
    </div>
  );
}