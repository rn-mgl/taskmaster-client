import React from "react";

export default function useFile() {
  const [selectedFile, setSelectedFile] = React.useState<{
    raw: File | null;
    url: string;
  }>({ raw: null, url: "" });

  const fileRef = React.useRef<HTMLInputElement>(null);

  const handleSelectedFile = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (!files || !files.length) {
        return;
      }

      const file = files[0];
      const url = URL.createObjectURL(file);
      setSelectedFile({ raw: file, url });
    },
    []
  );

  const handleRemoveSelectedFile = React.useCallback(() => {
    if (fileRef && fileRef.current) {
      fileRef.current.files = null;
      fileRef.current.value = "";
    }

    setSelectedFile({ raw: null, url: "" });
  }, []);

  return {
    selectedFile,
    fileRef,
    handleSelectedFile,
    handleRemoveSelectedFile,
  };
}
