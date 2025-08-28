import React, { useEffect, useState } from "react";
import * as htmlTOImage from "html-to-image";

// Component
import TestiWall from "../components/customize/TestiWall";
import ProjectName from "../components/ProjectName";
import Notice from "../components/Notice";

let Customize = (props) => {
  // Destructuring props
  let { projectName, user } = props;

  // Handle download state
  let [isDownload, setIsDownload] = useState(false);
  let handleDownloadState = () => {
    setIsDownload((preV) => !preV);
  }

  // Handle download
  let [height, setHeight] = useState();
  let [width, setWidth] = useState();
  let [fileName, setFileName] = useState(projectName);

  let handleDownload = async () => {
    try {
      console.log(height, width, fileName);

      const node = document.getElementById("testimonialWall");
      if (!node) return;

      const dataURL = await htmlTOImage.toPng(node, {
        width: Number(width),
        height: Number(height),
        style: {
          width: width + "px",
          height: height + "px",
        },
        skipFonts: false,
        pixelRatio: 4,

      });
      const link = document.createElement("a");
      link.download = fileName + ".png";
      link.href = dataURL;
      link.click();
    } catch (error) {
      console.log(error);
    }
  }
  // Notice message
  let [noticeMsg, setNoticeMsg] = useState("");

  // Handle idle project
  let [emptyProject, setEmptyProject] = useState(false);

  let handleIdle = () => {
    setNoticeMsg("⚠️ Select a project to continue");
  }
  useEffect(() => {
    if (projectName !== "" && projectName !== "Idle") {
      setEmptyProject(true);
    } else {
      setEmptyProject(false);
      handleIdle();
    }
  }, [])

  return (
    <>
      <div className="my-10 px-1">
        {/* Project Name */}
        <section className="my-8 mx-8 md:my-10 md:mx-10 flex justify-end">
          <ProjectName projectName={projectName} />
        </section>
        {/* Notice message */}
        <section className="mx-8 lg:mx-80 mt-16">
          <Notice message={noticeMsg} />
        </section>

        <div className="my-16 mx-4 lg:mx-20 ">
          {/* Customization */}
          <h1 className="font-bricolage text-zinc-600 text-md md:text-lg mb-8 ">Style and personalize your testimonials with ease.</h1>

          <div id="testimonialWall" className={`${emptyProject ? "" : "hidden"}`}>
            <TestiWall projectName={projectName} user={user} />
          </div>

          {/* Download */}
          <div className="mt-20 lg:mx-60">
            <h1 className="font-bricolage text-zinc-600 text-md md:text-lg mb-8">Your testimonials, one click away from the world.</h1>

            <div className="bg-[#D8C6FF] border-2 border-[#cab1ff] my-6 px-4 py-2 lg:py-4 rounded cursor-pointer active:bg-[#cab1ff]" onClick={handleDownloadState}>
              <h1 className="text-zinc-900 font-bricolage text-center">Save as Image</h1>
            </div>
            <div className={`bg-purple-100 p-3 rounded-xl ${!isDownload ? "hidden" : ""}`}>
              <input type="number" className="w-full rounded-lg py-2 border-2 border-[#cab1ff] bg-purple-200 outline-none my-1 not-only:text-black font-space px-4" placeholder="Height (px)" value={height} onChange={(e) => {
                setHeight(e.target.value);
              }} />
              <input type="number" className="w-full rounded-lg py-2 border-2 border-[#cab1ff] bg-purple-200 outline-none my-1 not-only:text-black font-space px-4" placeholder="Width (px)" value={width} onChange={(e) => {
                setWidth(e.target.value);
              }} />
              <input type="text" className="w-full rounded-lg py-2 border-2 border-[#cab1ff] bg-purple-200 outline-none my-1 not-only: text-black font-space px-4" placeholder="Filename" value={fileName} onChange={(e) => {
                setFileName(e.target.value);
              }} />
              <button className="w-full bg-[#cab1ff] py-3 rounded-lg mt-4 text-zinc-800 font-bricolage" onClick={handleDownload}>Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customize;