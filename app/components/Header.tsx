import Image from "next/image";

const Header = () => {
  const taskIcon = "/icons/taskIc.png";

  return (
    <>
      {/* Header */}
      <div className="text-center flex items-center justify-center mb-12 gap-2">
        <Image
          src={taskIcon}
          alt="task-ic"
          width={0}
          height={0}
          className="w-auto h-auto"
        />

        <h3 className="text-3xl font-semibold">App Tarefa</h3>
      </div>
    </>
  );
};

export default Header;
