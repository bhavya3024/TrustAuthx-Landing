import { ArrowIcon } from "~/pages/new";

export function Information({
  preHeader,
  header,
  children,
  buttonLink,
  whiteText,
  ButtonText,
  buttonbg,
}: {
  buttonbg: boolean;
  preHeader: string;
  header: string;
  children: React.ReactNode;
  whiteText?: boolean;
  buttonLink: string;
  ButtonText: string;
}) {
  return (
    <div
      className={`flex flex-col ${whiteText ? "text-white" : "text-zinc-900"} `}
    >
      <div className="flex flex-col gap-3">
        <div className=" text-3xl font-bold leading-9 ">{preHeader} </div>

        <div
          className="  max-w-[500px] text-5xl font-bold
 "
        >
          {header}
        </div>
      </div>

      {children}

      <button
        className={`${
          buttonbg ? "bg-white text-black" : "bg-black text-white"
        } mt-6 flex w-64 items-center justify-center gap-2 rounded-full py-2 font-bold `}
      >
        {ButtonText}
        <ArrowIcon />
      </button>
    </div>
  );
}
