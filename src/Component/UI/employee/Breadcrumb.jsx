import React from "react";

const Breadcrumb = ({ paths, title }) => {
  return (
    <div className="space-y-2">
      <nav className="text-sm text-gray-600 flex items-center space-x-1">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <span>{path}</span>
            {index !== paths.length - 1 && <span className="mx-1">/</span>}
          </React.Fragment>
        ))}
      </nav>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

export default Breadcrumb;
