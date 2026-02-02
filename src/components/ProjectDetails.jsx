import React from "react";

const getIconSrc = (tagName) => {
  if (!tagName) return "/assets/logos/fallback.svg";
  return `/assets/logos/${tagName
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "dot")}.svg`;
};

const ProjectDetails = ({ title, description, subDescription, image, tags = [], href, closeModal }) => {
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

      <div className="relative w-full max-w-4xl bg-primary/95 rounded-lg p-6 text-white shadow-lg">
        <button
          onClick={closeModal}
          aria-label="Close project details"
          className="absolute top-4 right-4 rounded-md p-2 hover:bg-white/10"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {image && (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="mb-4 w-full rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}

        <div className="prose max-w-none text-sand mb-4">
          <p>{description}</p>
          {subDescription && <p className="mt-3 text-sm">{subDescription}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {tags.map((tag, i) => {
            const name = typeof tag === "string" ? tag : tag?.name ?? tag?.id ?? "";
            const src = getIconSrc(name);
            return (
              <div key={i} className="flex items-center gap-2">
                <img
                  src={src}
                  alt={name}
                  className="w-6 h-6"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-xs">{name}</span>
              </div>
            );
          })}
        </div>

        {href && (
          <div className="mt-6">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              View Project ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;