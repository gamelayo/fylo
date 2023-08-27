/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useContext, useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import FileList from "@/components/file/FileList";
import FolderList from "@/components/folder/FolderList";
import { ShowToastContext } from "@/context/ShowToastContext";
import SearchBar from "@/components/SearchBar";
import { ParentFolderIdContext } from "@/context/ParentFolderContext";
import Storage from "@/components/storage/Storage";
import SideNavbar from "@/components/SideNavbar";
const pageDetails = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const { parentFolderId, setParentFolderId } = useContext(
    ParentFolderIdContext
  );
  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);
  const [folderList, setFolderList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const db = getFirestore(app);
  const name = searchParams.get("name");
  const id = useParams();

  useEffect(() => {
    setParentFolderId(id);
    if (session || showToastMsg != null) {
      getFolderList();
      getFileList();
    }
  }, [session, showToastMsg]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFolderList = async () => {
    setFolderList([]);
    const q = query(
      collection(db, "Folders"),
      where("createBy", "==", session.user.email),
      where("parentFolderId", "==", id)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setFolderList((folderList) => [...folderList, doc.data()]);
    });
  };

  const getFileList = async () => {
    setFileList([]);
    const q = query(
      collection(db, "files"),
      where("parentFolderId", "==", id),
      where("createdBy", "==", session.user.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setFileList((fileList) => [...fileList, doc.data()]);
    });
  };

  return (
    <div className="flex bg-[#f0f8ff] py-3">
      <SideNavbar />
      <div
        className="grid grid-cols-1
        md:grid-cols-3 w-full"
      >
        <div className="col-span-2 px-3 ">
          <SearchBar />
          <h2 className="text-[20px] font-bold mt-5">{name}</h2>
          {folderList.length > 0 ? (
            <FolderList folderList={folderList} isBig={false} />
          ) : (
            <h2
              className="text-gray-400
         text-[16px] mt-5"
            >
              No Folder Found
            </h2>
          )}
          <FileList fileList={fileList} />
        </div>
        <div
          className="bg-white p-5
         order-last my-4 md:my-0 mx-3"
        >
          <Storage />
        </div>
      </div>
    </div>
  );
};

export default pageDetails;
