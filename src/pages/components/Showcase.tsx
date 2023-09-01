import { defaultOverrides } from "next/dist/server/require-hook";
import React from "react";

function Showcase() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="space-between flex max-w-[1110px] flex-col items-center gap-12 lg:flex-row xl:gap-48">
        <div className="flex flex-col gap-6 ">
          <p className="text-5xl sm:text-[80px] ">
            Powerful.Simple. And Sooo... Easy to Setup
          </p>

          <p className="text-[26px] text-[#777]">
            We made building Auth for sites easy, fast and Scalable while
            delivering best-in-class Security & performance
          </p>
        </div>

        <p className="block rotate-90 text-[128px] leading-none lg:hidden">
          ;)
        </p>

        <p className="hidden text-[128px] leading-none lg:block">
          ;<span className="ml-4">)</span>{" "}
        </p>
      </div>

      <div className="mt-20 flex w-full max-w-screen-xl flex-col gap-6">
        <ShowcaseCard
          title={
            <p className="text-2xl font-semibold text-white">Start with AI</p>
          }
          description={
            <div className="text-white">
              Generate a beautiful images for site,
              <br />
              set static or use as carousel.
            </div>
          }
          className="showcase-1  w-full  "
        >
          <div className="relative  mt-10 flex h-[300px] w-full items-center justify-center bg-transparent ">
            <img
              src="/showcase/1.png"
              alt=""
              className="absolute  left-0 top-0 h-full w-full bg-cover"
            />

            <div className="showcase-1-gradient-bottom absolute bottom-0 left-0 -mx-10  h-24  rounded-b-3xl"></div>

            <div className="z-10 flex flex-col items-center justify-center rounded-2xl bg-white p-5   px-8">
              <button
                className="showcase-1-btn ml-auto w-[125px]
               rounded-lg py-2 font-semibold text-white"
              >
                Generate
              </button>
              <div className="my-4 h-[1px] w-full bg-[#eee]" />

              <p>
                {" "}
                pile of white rubik cubes in a red room, wes anderson style |
              </p>
            </div>
          </div>
        </ShowcaseCard>

        <div className="flex  flex-1 items-center">
          <img src="/showcase/2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({
  className,
  children,
  title,
  description,
}: {
  className?: string;
  children: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className={className + " " + "relative  rounded-[20px] p-10 pb-0"}>
      {title}

      {description}

      {children}

      <div className="absolute right-10 top-10 ">
        <RedirectButton />
      </div>
    </div>
  );
}

function RedirectButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M15 3.19336C12.5895 3.19336 10.2332 3.90814 8.22899 5.24732C6.22477 6.5865 4.66267 8.48993 3.74022 10.7169C2.81778 12.9439 2.57643 15.3944 3.04668 17.7585C3.51694 20.1227 4.67769 22.2943 6.38214 23.9987C8.08659 25.7032 10.2582 26.8639 12.6223 27.3342C14.9865 27.8044 17.437 27.5631 19.664 26.6406C21.8909 25.7182 23.7944 24.1561 25.1335 22.1519C26.4727 20.1476 27.1875 17.7913 27.1875 15.3809C27.1841 12.1496 25.899 9.05162 23.6141 6.76676C21.3292 4.4819 18.2313 3.19677 15 3.19336ZM20.3508 16.0441L16.6008 19.7941C16.4249 19.9701 16.1863 20.0689 15.9375 20.0689C15.6887 20.0689 15.4501 19.9701 15.2742 19.7941C15.0983 19.6182 14.9995 19.3796 14.9995 19.1309C14.9995 18.8821 15.0983 18.6435 15.2742 18.4676L17.4246 16.3184H10.3125C10.0639 16.3184 9.82541 16.2196 9.64959 16.0438C9.47378 15.868 9.37501 15.6295 9.37501 15.3809C9.37501 15.1322 9.47378 14.8938 9.64959 14.7179C9.82541 14.5421 10.0639 14.4434 10.3125 14.4434H17.4246L15.2742 12.2941C15.0983 12.1182 14.9995 11.8796 14.9995 11.6309C14.9995 11.3821 15.0983 11.1435 15.2742 10.9676C15.4501 10.7917 15.6887 10.6928 15.9375 10.6928C16.1863 10.6928 16.4249 10.7917 16.6008 10.9676L20.3508 14.7176C20.438 14.8046 20.5071 14.908 20.5543 15.0219C20.6015 15.1357 20.6257 15.2577 20.6257 15.3809C20.6257 15.5041 20.6015 15.6261 20.5543 15.7399C20.5071 15.8537 20.438 15.9571 20.3508 16.0441Z"
        fill="black"
      />
    </svg>
  );
}

export default Showcase;
