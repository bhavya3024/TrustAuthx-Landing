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

          <div className="ml-10 flex justify-between">
            <div className="mt-[450px] flex flex-col gap-[550px]">
              <Information
                preHeader="Trim Costs, Boost Efficiency"
                footerLink=""
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
                footerLink=""
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
        <div className=" flex flex-col items-center justify-center">
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
