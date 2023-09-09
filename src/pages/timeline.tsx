import React from "react";
import { ArrowIcon } from "./new";
import {
  PercentageSVG,
  PercentageSVGThird,
  PercentageSVGSecondTimeline,
} from "./components/Timeline/Components";
import { PercentageSVGSecond } from "./components/showcase/Components";
import { TimelineCard } from "./components/Timeline/TimelineCard";
import { Information } from "./components/Timeline/Information";

function timeline() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center justify-center">
          <img src="/timeline/first.svg" alt="" />

          <img src="/timeline/8-icon.svg" alt="" />

          <img src="/timeline/8.svg" alt="" />

          <img src="/timeline/7-icon.svg" alt="" />

          <img src="/timeline/7.svg" alt="" />

          <img src="/timeline/6-icon.svg" alt="" />

          <img src="/timeline/6.svg" alt="" />
        </div>

        <div className="mt-[750px]">
          <div className=" flex flex-col gap-9">
            <div className="text-4xl font-bold  text-black">Overview</div>

            <div className=" px-6">
              <span className="text-7xl font-bold  text-indigo-400">
                Embed security into the developer workflow.
                <br />
              </span>
              <span className="text-7xl font-bold  text-black">
                With GitHub, developers can secure their
                <br />
                code in minutes and organizations can
                <br />
                automatically comply with regulations.
              </span>
            </div>
          </div>

          <div className="ml-10 flex flex-1 justify-between">
            <div className="mt-[450px] flex flex-col gap-[550px]">
              <Information
                preHeader="Trim Costs, Boost Efficiency"
                buttonLink=""
                header="Save Time and Money with TrustAuthx 
                Auth-Lite"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-neutral-600
"
                >
                  TrustAuthx not only simplifies your user, token and session
                  management but also trims your expenses significantly. Say
                  goodbye to costly alternatives that can set you back. With
                  AuthLite, you'll save valuable time and also enjoy over 65% in
                  savings. It's a win-win for your efficiency and your budget.
                </div>
              </Information>

              <Information
                preHeader="Trim Costs, Boost Efficiency"
                buttonLink=""
                header="Save Time and Money with TrustAuthx 
                Auth-Lite"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-neutral-600
"
                >
                  TrustAuthx not only simplifies your user, token and session
                  management but also trims your expenses significantly. Say
                  goodbye to costly alternatives that can set you back. With
                  AuthLite, you'll save valuable time and also enjoy over 65% in
                  savings. It's a win-win for your efficiency and your budget.
                </div>
              </Information>
            </div>

            <div className=" mt-44 flex flex-col gap-[300px] ">
              <TimelineCard
                footerButtonText="See Pricing"
                header={"Reduce Auth Development Time &"}
                footerLink={""}
                footerText="TrustAuthx Auth-lite offers 
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
              >
                <div
                  className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
                >
                  Save Cost up-to
                </div>

                <div className="mt-7 flex items-center justify-center gap-16 ">
                  <PercentageSVG>90%</PercentageSVG>
                  <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
                </div>
              </TimelineCard>

              <TimelineCard
                footerButtonText="See Log-on"
                header={
                  "Auth-Lite Log-on can give conversion by mitigating account Creation process "
                }
                footerLink={""}
                footerText="According to a study by HubSpot, 38% of people will abandon a form if they have to create an account."
              >
                <div className=" flex items-center">
                  <div
                    className="
               mr-1 text-center text-5xl font-bold text-white  "
                  >
                    Up by :)
                  </div>

                  <PercentageSVGThird>138%</PercentageSVGThird>
                </div>
              </TimelineCard>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-radial-gradient flex">
        <div className="flex flex-col items-center justify-center">
          <div className="relative -my-24">
            <img src="/timeline/glow.svg" className=" " alt="" />

            <img
              src="/timeline/5-icon.svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </div>
          <img src="/timeline/4.svg" alt="" />

          <img src="/timeline/3-icon.svg" alt="" />

          <img src="/timeline/3.svg" alt="" />

          <img src="/timeline/2-icon.svg" alt="" />
          <img src="/timeline/2.svg" alt="" />
          <img src="/timeline/1-icon.svg" alt="" />
          <img src="/timeline/1.svg" alt="" />
        </div>
        {/* required
         */}
        <div className=" flex flex-col gap-9 py-2">
          <div className=" px-6">
            <span className="text-6xl font-bold  text-[#90E900]">
              LLMAI, Transformer Model for Cybersecurity:
            </span>
            <span className="text-6xl font-bold  text-white">
              Enable real-time inference
              <br />
              on extensive telemetry data, including raw
              <br />
              packets, to swiftly detect & respond to live
              <br />
              threats.
            </span>
          </div>
          {/* button */}

          <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[14807.455px] border-[1.1px] border-[#DDD] bg-black py-2 font-bold text-white">
            Lets get started
            <ArrowIcon />
          </button>
          <div className=" py-48"></div>
          {/* placing next to each other */}

          <div className="flex-column flex gap-80">
            <Information
              preHeader="Maximize Speed"
              whiteText
              buttonbg
              buttonLink=""
              header="Get access to 
High-Performing Caching Infrastructure"
              ButtonText="Let’s Get Started It’s Free"
            >
              <div
                className=" mt-20 max-w-[600px] text-xl font-bold leading-7 text-white
"
              >
                Speed matters when its about authentication, conversion, token
                maintenance or security with TrustAuthx Auth-lite High
                performing caching infrastructure get all your data accessed at
                the speed of internet .
              </div>
            </Information>
            <div className="flex-column flex items-center">
              <img
                src="/timeline/cache.svg"
                alt="cache"
                className="h-[614.023px] w-[537.729px]"
              />
            </div>
          </div>
          {/* next part */}
          <div className="py-56"></div>
          <div className="flex-column flex gap-80">
            <div className=" px-6">
              <span className="text-3xl font-semibold  text-[#E1E1E1]">
                Integrate in 2 min
                <br />
              </span>
              <span className="text-5xl font-bold  text-white">
                Resembling Auth 2.0,
                <br />
                our system exemplifies
                <br />
                the beauty of
                <br />
                standardized simplicity.
                <br />
                <br />
              </span>
              <span className="text-2xl font-semibold text-white">
                Embrace the elegance of standardized simplicity, making
                <br />
                security and user access straightforward. With its user-
                <br />
                friendly approach, navigating authentication and authorization
                <br />
                has never been easier.
                <br />
              </span>
              <div className="py-10"></div>
              <span className="text-2xl text-white">
                Extract data from other Auth2.O sources
              </span>
              <div className="py-8"></div>
              <div className="border border-gray-300"></div>
              <div className="py-8"></div>
              <span className="text-2xl text-white">
                Supports analytical & Dependency workflows
              </span>
              <div className="flex-column flex gap-10 ">
                <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[18711.455px] border-[1.1px] border-[#DDD] bg-black py-2  font-bold text-white">
                  Learn more about Connect
                  <ArrowIcon />
                </button>
                <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[4807.455px] border-[1.1px] border-[#DDD] bg-white py-2 font-bold text-black">
                  Let's get started
                  <ArrowIcon />
                </button>
              </div>
            </div>
            {/* the right side svg */}
            <TimelineCard
              footerButtonText="See Pricing"
              header={"Reduce Auth Development Time &"}
              footerLink={""}
              footerText="TrustAuthx Auth-lite offers 
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
            >
              <div
                className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
              >
                Save Cost up-to
              </div>

              <div className="mt-7 flex items-center justify-center gap-16 ">
                <PercentageSVG>90%</PercentageSVG>
                <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
              </div>
            </TimelineCard>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="flex flex-col items-center justify-center">
          <img src="/timeline/last-icon.svg" alt="" />
          <img src="/timeline/last.svg" />
        </div>
      </div>
    </>
  );
}

export default timeline;
