import React from "react";

export const FileBox = (filelist) => {
  const data = filelist.filelist;
  return (
    <div className="fileBox">
      <p>Files:</p>
      <ul>
        {Object.values(data).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
