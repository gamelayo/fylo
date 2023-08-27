import CreateFolderModal from "./folder/CreateFolderModal";
import UploadFileModal from "./file/UploadFileModal";
import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineLogout } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideNavbar = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();
  function logout() {
    router.push("/");
    signOut();
  }
  return (
    <nav className="flex gap-6">
      <div
        className={`bg-white min-h-screen shadow-blue-200 shadow-md ${
          open ? "w-48 md:w-64 " : "w-16"
        } duration-500 text-gray-800 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-20 relative ">
          <div className="flex flex-col gap-4">
            <Link
              href={"/dashboard"}
              className={` group flex  bg-blue-400 text-white hover:text-gray-800 items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-200 rounded-md`}
            >
              <div>
                <BiCategoryAlt />
              </div>
              <h2
                style={{
                  transitionDelay: `300ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Dashboard
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Dashboard
              </h2>
            </Link>
            <button
              onClick={() => window.my_modal_3.showModal()}
              className={` group flex  bg-blue-400 text-white hover:text-gray-800 items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-200 rounded-md`}
            >
              <div>
                <BiCategoryAlt />
              </div>
              <h2
                style={{
                  transitionDelay: `300ms`,
                }}
                className={`whitespace-pre duration-500  items-center ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Create Folder
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Create Folder
              </h2>
            </button>
            <button
              onClick={() => window.upload_file.showModal()}
              className={` group flex  bg-blue-400 text-white hover:text-gray-800 items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-200 rounded-md`}
            >
              <div>
                <BiCategoryAlt />
              </div>
              <h2
                style={{
                  transitionDelay: `300ms`,
                }}
                className={`whitespace-pre duration-500  items-center ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Add New File
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Add New File
              </h2>
            </button>
          </div>

          <div
            className={` group flex  bg-red-400 text-white hover:text-gray-800 items-center text-sm  gap-3.5 font-medium p-2 hover:bg-red-200 rounded-md`}
            onClick={logout}
          >
            <div>
              <HiOutlineLogout size={20} />
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout
            </h2>
          </div>
        </div>
      </div>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <CreateFolderModal />
      </dialog>
      <dialog id="upload_file" className="modal">
        <UploadFileModal closeModal={() => window.upload_file.close()} />
      </dialog>
    </nav>
  );
};

export default SideNavbar;
