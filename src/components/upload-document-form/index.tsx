import { useState } from "react";

import Button from "../button";
import FormBody from "./form-body";

import { ITestCenterClient } from "../test-center-selection";

interface FormProps {
  handleCancel: () => void;
}

const UploadDocumentForm = ({ handleCancel }: FormProps) => {
  const [importName, setImportName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isToleranceWindowOn, setIsToleranceWindowOn] =
    useState<boolean>(false);
  const [enableSplitSchedule, setEnableSplitSchedule] =
    useState<boolean>(false);
  const [client, setClient] = useState<string>("Single");
  const [testingCenters, setTestingCenters] = useState<ITestCenterClient[]>([]);

  const handleFormSubmit = () => {
    const formData = {
      importName,
      file,
      isToleranceWindowOn,
      enableSplitSchedule,
      client,
      testingCenters,
    };

    console.log(formData);
  };

  return (
    <div className="sm:mx-5 my-5 h-full">
      <section>
        <div className="sm:w-fit sm:m-auto">
          <h2 className="text-center font-sans font-medium text-2xl sm:text-3xl">
            Document Upload
          </h2>
          <hr className="bg-slate-700 w-full mt-2" />
        </div>
        <FormBody
          setImportName={setImportName}
          setFile={setFile}
          setToleranceWindow={setIsToleranceWindowOn}
          setSplitSchedule={setEnableSplitSchedule}
          setClient={setClient}
          setTestingCenters={setTestingCenters}
        />
        <section className="mt-6 sm:p-8">
          <p className="text-center text-xs sm:text-sm font-semibold">
            {file &&
              "Data in the import file is correct. Please press Continue to import."}
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
