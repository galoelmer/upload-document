import Dropdown from "../dropdown-selector";
import FileDrop from "../drag-and-drop-file";

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

interface FormBodyProps {
  setImportName: SetStateAction<string | null>;
  setFile: SetStateAction<File | null>;
}

const FormBody = ({ setImportName, setFile }: FormBodyProps) => {
  const handleDragAndDropFile = (file: File) => {
    setFile(file);
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
      </section>
      <section className="h-full sm:p-6 sm:py-2 lg:w-1/2"></section>
    </section>
  );
};

export default FormBody;
