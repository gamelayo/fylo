/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import SideNavbar from "@/components/SideNavbar";
import FileList from "@/components/file/FileList";
import FolderList from "@/components/folder/FolderList";
import Storage from "@/components/storage/Storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { ParentFolderIdContext } from "@/context/ParentFolderContext";
import { ShowToastContext } from "@/context/ShowToastContext";
import SearchBar from "@/components/SearchBar";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [folderList, setFolderList] = useState([]);
  const [fileList, setFileList] = useState([]);

  const db = getFirestore(app);
  const { setParentFolderId } = useContext(ParentFolderIdContext);
  const { showToastMsg } = useContext(ShowToastContext);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getFolderList();
      getFileList();
    }
    setParentFolderId(0);
  }, [session, showToastMsg]);

  const getFolderList = async () => {
    setFolderList([]);
    const q = query(
      collection(db, "Folders"),
      where("parentFolderId", "==", 0),
      where("createBy", "==", session.user.email)
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
      where("parentFolderId", "==", 0),
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
        <div className="col-span-2 px-3">
          <SearchBar />
          <FolderList folderList={folderList} />
          <FileList fileList={fileList} />
        </div>
        <div
          className="bg-white p-5
         order-first md:order-last mb-2 md:my-0 mx-3 "
        >
          <Storage />
        </div>
      </div>
    </div>
  );
};

export default page;
