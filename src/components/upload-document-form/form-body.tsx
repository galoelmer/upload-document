import Dropdown from "../dropdown-selector";
import FileDrop from "../drag-and-drop-file";
import ToggleSwitch from "../toggle-switch";

import ClockIcon from "../../icons/clock-icon";

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

interface FormBodyProps {
  setImportName: SetStateAction<string | null>;
  setFile: SetStateAction<File | null>;
  setToleranceWindow: SetStateAction<boolean>;
}

const FormBody = ({
  setImportName,
  setFile,
  setToleranceWindow,
}: FormBodyProps) => {
  const handleDragAndDropFile = (file: File) => {
    setFile(file);
  };

  const handleToggleToleranceWindow = (value: boolean) => {
    setToleranceWindow(value);
  };

  return (
    <section className="flex flex-col mt-8 lg:flex-row">
      <section className="h-full lg:w-1/2 text-center sm:text-left">
        <Dropdown
          defaultLabel="Select Import Name:"
          onSelect={(value) => setImportName(value)}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <hr className="bg-slate-700 sm:w-2/3 mt-4" />
        <h3 className="text-xs font-semibold my-3">
          Select a manifest that you'd like to import:
        </h3>
        <FileDrop onFileDrop={handleDragAndDropFile} />
        <hr className="bg-slate-700 sm:w-2/3 mt-2" />
        <div className="m-2 py-1">
          <h3 className="text-xs font-semibold">Elapse Data Checking: </h3>
          <p className="text-xs text-green mt-1">No Elapsed Dates!</p>
        </div>
        <hr className="bg-slate-700 sm:w-2/3 mt-2" />
        <div className="mt-4">
          <h3 className="text-xs font-semibold">Tolerance Window: </h3>
          <div className="flex mt-2">
            <ToggleSwitch
              label="Toggle ON"
              onChange={handleToggleToleranceWindow}
            />
            <span className="ml-3 border-r border-gray-300"></span>
            <div className="flex mx-4">
              <ClockIcon />
              <p className="text-xs text-gray-400 ml-2">
                Select Tolerance Level
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full sm:p-6 sm:py-2 lg:w-1/2"></section>
    </section>
  );
};

export default FormBody;
