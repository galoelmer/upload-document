import Dropdown from "../dropdown-selector";

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

interface FormBodyProps {
  setImportName: SetStateAction<string | null>;
}

const FormBody = ({ setImportName }: FormBodyProps) => {
  return (
    <section className="flex flex-col mt-8 lg:flex-row">
      <section className="h-full lg:w-1/2">
        <Dropdown
          defaultLabel="Select Import Name:"
          onSelect={(value) => setImportName(value)}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </section>
      <section className="h-full sm:p-6 sm:py-2 lg:w-1/2"></section>
    </section>
  );
};

export default FormBody;
