import { useState } from "react";

import Button from "../button";
import FormBody from "./form-body";

interface FormProps {
  handleCancel: () => void;
}

const UploadDocumentForm = ({ handleCancel }: FormProps) => {
  const [importName, setImportName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFormSubmit = () => {
    const formData = {
      importName,
      file,
    };

    console.log(formData);
  };

  return (
    <div className="sm:mx-5 my-5 h-full">
      <section className="">
        <div className="sm:w-fit sm:m-auto">
          <h2 className="text-center font-sans font-medium text-2xl sm:text-3xl">
            Document Upload
          </h2>
          <hr className="bg-slate-700 w-full mt-2" />
        </div>
        <FormBody setImportName={setImportName} setFile={setFile} />
        <section className="mt-6 sm:p-8">
          <p className="text-center text-xs sm:text-sm font-semibold">
            "Data in the import file is correct. Please press Continue to
            import."
          </p>
          <div className="flex justify-center space-x-1 sm:space-x-5 p-5">
            <Button
              label="Continue Import"
              onClick={handleFormSubmit}
              className="w-full sm:w-64"
            />
            <Button
              label="Cancel"
              type="outline"
              onClick={handleCancel}
              className="w-full sm:w-64"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default UploadDocumentForm;
