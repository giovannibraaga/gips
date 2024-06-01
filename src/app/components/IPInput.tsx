interface IPInputProps {
  ip: string;
  setIp: (ip: string) => void;
  buscarIP: () => void;
}

export default function IPInput({ ip, setIp, buscarIP }: IPInputProps) {
  return (
    <div>
      <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Digite o IP que deseja buscar"
        className="p-2 text-[#9AD1D4] border flex flex-row border-[#9AD1D4] rounded mb-4 w-64"
      />
      <button
        onClick={buscarIP}
        className="p-2 bg-[#9AD1D4] text-white rounded hover:bg-[#88D9E6]"
      >
        Buscar IP
      </button>
    </div>
  );
}
