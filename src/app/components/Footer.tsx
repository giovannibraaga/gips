export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-[#9AD1D4] text-[#9AD1D4] p-4 mt-6">
      <div className="flex justify-center w-full px-4 mx-auto">
        <div className="text-lg">
          <span className="text-xl">
            &copy; {new Date().getFullYear()} Gip{"'"}s. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
