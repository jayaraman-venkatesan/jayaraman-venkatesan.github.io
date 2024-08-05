import Image from "next/image";
import "./timeline.css";
import { ITimeline } from "@/app/types";

export default function Timeline({ data }: { data: ITimeline[] }) {
  return (
    <div className="inline-block">
      <div className="flex flex-col items-start justify-center timeline w-full dark:dark-timeline">
        {data.map((block, index) => {
          return (
            <TimelineBlock
              data={block}
              isFirst={index == 0}
              key={block.heading}
            />
          );
        })}
      </div>
    </div>
  );
}

function TimelineBlock({
  data,
  isFirst,
}: {
  data: ITimeline;
  isFirst: boolean;
}) {
  return (
    <div
      className={`flex w-full my-10 container dark:dark-container ${
        isFirst ? "selected-container dark:dark-selected-container" : ""
      }`}
    >
      <div
        className={`timeline-duration text-center p-1 sm:py-2 sm:px-4 rounded-lg font-bold text-sm mx-2 h-fit ${
          isFirst
            ? "bg-primary dark:bg-primary-dark text-white"
            : "border-2 border-solid border-primary dark:border-primary-dark text-primary dark:text-primary-dark"
        }`}
      >
        {data.duration}
      </div>
      <div className="timeline-content mx-5 flex flex-col sm:flex-row border-2 border-solid border-gray-200 dark:border-gray-700 rounded-lg bg-slate-200 dark:bg-slate-800 p-4 grow">
        <div className="pr-2 w-[75px]">
          <Image
            src={data.contentImagePath}
            width={data.contentImageSize}
            height={data.contentImageSize}
            alt="University logo"
          ></Image>
        </div>
        <div>
          <div className="text-lg text-gray-700 font-bold dark:text-white">
            {data.heading}
          </div>
          <div className="text-gray-700 dark:text-gray-200">
            {data.subHeading}
          </div>

          <div className="flex pt-1 items-center">
            <div className="pr-2">
              <Image
                src={"images/location.svg"}
                width={15}
                height={15}
                alt="Location"
              ></Image>
            </div>
            <span className="text-end">{data.location}</span>
          </div>
          <div className="pt-2">
            <ul className="list-disc list-inside pl-4">
              {data.summary &&
                data.summary.map((item, idx) => (
                  <li key={idx} className="pt-2">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-wrap m-2">
            {data.skills &&
              data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-sm p-1 px-2 bg-white border border-slate-300 m-1 rounded text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                >
                  {skill}
                </div>
              ))}
          </div>

          {/* {
                        data.contents.map((content) => (
                            <div key={content}>
                                {content}
                            </div>)
                        )
                    } */}
        </div>
      </div>
    </div>
  );
}
