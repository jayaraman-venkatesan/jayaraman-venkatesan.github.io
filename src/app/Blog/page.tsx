"use client";
import React, { useState } from "react";
import Image from "next/image";
import { blogData } from "../data/blog";
import "./page.css";

function StarRating({ rating }: { rating: number }) {
  // Array to hold the star values
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex items-center">
      <span className="font-bold mr-2 text-gray-700 dark:text-gray-200">
        Rating:
      </span>
      <div className="flex">
        {stars.map((star) => (
          <svg
            key={star}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={star <= rating ? "#FFD700" : "#CCCCCC"}
            className="dark:fill-[#FFD700] dark:stroke-[#CCCCCC]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.854 1.416 8.492L12 18.896l-7.416 5.198L6 15.602 0 9.748l8.332-1.593L12 .587z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Extract unique tags from blogData
  const allTags = Array.from(new Set(blogData.flatMap((post) => post.tags)));

  // Toggle the selected state of a tag
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Filter blogData based on selectedTags
  const filteredBlogData = blogData.filter(
    (post) =>
      selectedTags.length === 0 ||
      post.tags.some((tag) => selectedTags.includes(tag))
  );

  return (
    <main className="flex flex-col items-start p-5 sm:py-5 sm:px-10 w-full">
      <div className="z-10 max-w-5xl w-full text-sm">
        <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
          <div className="mr-5">My Blog</div>
          <Image
            width={35}
            height={35}
            src={"images/work-indigo.svg"}
            alt="Work"
            className="dark:hidden"
          />
          <Image
            width={35}
            height={35}
            src={"images/work.svg"}
            alt="Work"
            className="hidden dark:flex"
          />
        </div>
      </div>
      <h1>
        This page is just a dump of everything that I want to share with the
        world. I will post things that made me learn something new, things that
        changed my perspective, things that I found interesting, etc.
      </h1>

      {/* Tag Dropdown Filter */}
      <div className="relative my-4">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded"
        >
          {selectedTags.length > 0
            ? `Selected Tags: ${selectedTags.join(", ")}`
            : "Select Tags"}
          <span className="ml-2">&#9660;</span>
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-md z-10">
            {allTags.map((tag) => (
              <div key={tag} className="p-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="mr-2"
                  />
                  {tag}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sm:p-5 flex flex-wrap">
        {filteredBlogData.map(
          (
            { heading, summary, tags, rating, learnMoreLinks = [] },
            index_w
          ) => (
            <div
              key={index_w}
              className="w-5/12 p-5 text-justify border-2 border-solid border-gray-200 dark:border-gray-700 rounded-lg bg-slate-200 dark:bg-slate-800 m-6"
            >
              <div className="font-bold text-lg py-2">{heading}</div>
              <div className="">{summary}</div>
              {/* Display tags */}
              <div className="flex flex-wrap mt-4">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-sm p-1 px-2 bg-white border border-slate-300 m-1 rounded text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              {/* Display rating */}

              {rating > 0 && <StarRating rating={rating} />}

              <div className="flex">
                {learnMoreLinks.map(({ title, link }, index) => (
                  <div key={index}>
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      className="mt-4 mr-2 flex font-bold rounded p-2 border-2 border-solid border-primary text-primary dark:border-primary-dark"
                    >
                      {title + " "}{" "}
                      <Image
                        alt="Link"
                        src="images/link.svg"
                        height={20}
                        width={20}
                        className="px-1"
                      ></Image>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}
