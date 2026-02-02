import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags = [], setPreview }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview && setPreview(image)}
        onMouseLeave={() => setPreview && setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex mt-2 gap-5 text-sand">
            {tags.map((tag) =>
              typeof tag === "string" ? (
                <span key={tag}>{tag}</span>
              ) : (
                <span key={tag.id ?? tag.name}>{tag.name}</span>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
          aria-haspopup="dialog"
          aria-expanded={isHidden}
        >
          Read More
          <img src="/assets/arrow-right.svg" className="w-5" alt="read more" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;