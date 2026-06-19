import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Gradient from "../../public/gradient-bg.jpg";
import { FcApproval } from "react-icons/fc";
import { CiCircleCheck } from "react-icons/ci";

function Home() {
  const Cards = [
    {
      name: "ATS Compatibility",
      caption:
        "Ensure your resume passes the initial automated screening with our precise parser simulation.",
      icon: <CiCircleCheck  className="size-10"/>,
    },
    {
      name: "Smart Rewriter",
      caption:
        "Transform bullet points from basic duties to high-impact achievements with AI.",
      icon: <CiCircleCheck className="size-10"/>,
    },
    {
      name: "Job Matching",
      caption:
        "Paste any job description and get a customized gap analysis and keyword strategy.",
      icon: <CiCircleCheck className="size-10"/>,
    },
    {
      name: "Skill Gap Analysis",
      caption:
        "Instantly see which core competencies you are missing for your target roles.",
      icon: <CiCircleCheck className="size-10"/>,
    },
    {
      name: "Role Specific Advice",
      caption:
        "Get tailored feedback whether you are a developer, designer, or sales professional.",
      icon: <CiCircleCheck className="size-10"/>,
    },
    {
      name: "Keyword Optimization",
      caption:
        "Automatically identify the most critical buzzwords missing from your CV.",
      icon: <CiCircleCheck  className="size-10"/>,
    },
  ];

  return (
    <div>
      <div className="flex  flex-col justify-center items-center mt-35 text-center">
        <div className="flex item-center  gap-2 justify-center text-[18px] font-semibold bg-[#EEF2FF] text-[#432DD7] px-4 py-2 rounded-full">
          <AiOutlineThunderbolt className="size-6" />
          <span>GPT-4 Powered Resume Analysis</span>
        </div>
        <h1 className="font-bold text-[90px] leading-25 mt-8">
          Optimize Your Resume <br /> with{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-emerald-500">
            AI Precision
          </span>{" "}
        </h1>
        <p className="text-[25px] text-gray-600 mt-8">
          Get ATS scores, skill gap analysis, AI-powered recommendations, and{" "}
          <br /> job matching in seconds. Stop guessing, start landing
          interviews.
        </p>
        <div className="flex justify-center gap-5 mt-10">
          <button className="text-[23px] font-semibold  bg-[#5840f3] text-white px-8 py-4 rounded-full cursor-pointer shadow-shadow-blue-700 hover:bg-blue-700 transition-all duration-200">
            Upload Resume <span className="">→</span>
          </button>
          <button className="text-[23px] border border-gray-300 rounded-full px-10  font-semibold cursor-pointer hover:bg-gray-50 transition-all duration-200">
            Try Demo
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="flex justify-center items-center mt-20  ">
        <div className="flex items-center justify-center bg-white border border-gray-200 rounded-3xl h-145 w-305">
          <div className="flex items-center justify-center relative ">
            <img
              src={Gradient}
              alt="gradient image"
              className="w-300 h-140 rounded-3xl object-cover "
            />

            <div className="absolute w-105 h-55 bg-white rounded-3xl p-5">
              <div className="flex justify-between items-center text-[19px] text-gray-600 font-semibold">
                <span>ATS Score</span>
                <span className="text-green-500">Excellent</span>
              </div>
              <div>
                <span className="text-[45px] ml-1 mt-2 font-bold ">94</span>{" "}
                <span className="text-gray-600 text-[20px]">/100</span>
              </div>
              <div className="border rounded-3xl border-gray-200 mt-3">
                <div className="w-84 h-2.5 rounded-3xl bg-green-500" />
              </div>
              <div className="flex gap-2  items-center justify-center">
                <FcApproval className="size-10 " />
                <p className="text-[18px] text-gray-600 mt-3 text-center">
                  Your resume is highly optimized for Product Manager roles. 3
                  key skills added.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bg-linear-to-t from-white h-1/2 to-transparent bottom-0 via-white/70" />
          </div>
        </div>
      </div>

      {/* Cards heading */}
      <div className="mt-30 flex justify-around flex-col items-center">
        <h1 className="text-[45px] font-bold text-center">
          Everything you need to land the interview
        </h1>
        <h3 className="text-[23px] text-gray-600 text-center mt-2">
          ResumeX combines advanced language models with deep applicant tracking
          system <br /> (ATS) knowledge
        </h3>

        {/* Cards */}
        <div className="flex justify-around items-center flex-wrap mt-14">
        {Cards.map(el=>(
            <div className="flex flex-col w-110 h-70 border shadow border-gray-300 rounded-3xl p-9 mt-12">
                <div className="size-10 mb-6">
                {el.icon }
                </div>
                <div className="text-[23px] font-semibold ">
                    {el.name}
                </div>
                <div className="text-[20px] text-gray-600 mt-2">
                    {el.caption}
                </div>
            </div>
            
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
