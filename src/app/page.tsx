"use client";

import { useState } from "react";
import axios from "axios";
import IPInput from "./components/IPInput";
import IPTable from "./components/IPTable";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";

interface IPinfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  postal: string;
  timezone: string;
}

const Page = () => {
  const [ip, setIp] = useState<string>("");
  const [info, setInfo] = useState<IPinfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buscarIP = async () => {
    try {
      setError(null);
      const response = await axios.get<IPinfo>(
        `https://gipsbackend-7185f7144701.herokuapp.com/buscar/${ip}`
      );
      setInfo(response.data);
    } catch (error) {
      setInfo(null);
      setError("Erro ao buscar IP. Por favor, tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#9AD1D4]">
      <div className="flex flex-col items-center justify-center flex-grow">
        <header className="text-center p-6 rounded shadow-lg border-2 border-[#9AD1D4] mb-6">
          <h1 className="text-4xl font-bold mb-6">Gip{"'"}s</h1>
          <IPInput ip={ip} setIp={setIp} buscarIP={buscarIP} />
          {error && <ErrorMessage error={error} />}
        </header>
        {info && <IPTable info={info} />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
