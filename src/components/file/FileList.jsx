import React from "react";
import FileItem from "./FileItem";

const FileList = ({ fileList }) => {
  return (
    <div className="bg-white my-5 p-2 md:p-4  rounded-lg">
      <h2 className="text-[18px] font-bold">Recent Files</h2>
      <table className="table-auto border-separate border-spacing-1 md:border-spacing-2 text-[13px] font-semibold border-gray-300 text-gray-400">
        <thead>
          <tr>
            <td>Name</td>
            <td>Modified</td>
            <td>Size</td>
            <td>action</td>
          </tr>
        </thead>
        {fileList &&
          fileList.map((item, index) => (
            <tbody key={index}>
              <FileItem file={item} key={index} />
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default FileList;
