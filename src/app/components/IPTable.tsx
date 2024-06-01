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

interface IPTableProps {
  info: IPinfo;
}

export default function IPTable({ info }: IPTableProps) {
  return (
    <div className="mt-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Informações do IP
      </h2>
      <table className="table-auto w-full text-center text-black border-2 border-[#9AD1D4]">
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 border-[#9AD1D4]">Campo</th>
            <th className="px-4 py-2 border-2 border-[#9AD1D4]">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">IP</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">{info.ip}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Hostname</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">
              {info.hostname}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">City</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">{info.city}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Region</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">
              {info.region}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Country</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">
              {info.country}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Location</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">{info.loc}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Postal</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">
              {info.postal}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">Timezone</td>
            <td className="px-4 py-2 border-2 border-[#9AD1D4]">
              {info.timezone}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
