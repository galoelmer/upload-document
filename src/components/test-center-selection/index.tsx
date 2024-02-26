import Dropdown from "../dropdown-selector";

import ClockIcon from "../../icons/clock-icon";
import mockData from "./mock-data";

export interface ITestCenterClient {
  testCenterName: string;
  clientName: string;
}

interface ITestDataCenter {
  name: string;
  clients: { value: string; label: string }[];
}

interface TestCenterSelectionProps {
  setTestingCenters: React.Dispatch<React.SetStateAction<ITestCenterClient[]>>;
}

const data: ITestDataCenter[] = mockData;

const TestCenterSelection = ({
  setTestingCenters,
}: TestCenterSelectionProps) => {
  const handleClientSelector = (clientName: string, testCenterName: string) => {
    setTestingCenters((prev) => [{ clientName, testCenterName }, ...prev]);
  };

  return (
    <section className="mt-4">
      {data.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-center sm:justify-normal sm:w-72 sm:m-3"
        >
          <h5 className="text-[11px] font-extralight text-gray-500 sm:w-2/5">
            {item.name}
          </h5>
          <div className="flex items-center sm:w-3/5 sm:space-x-2">
            <Dropdown
              defaultLabel="Select Client"
              onSelect={(value) => handleClientSelector(value, item.name)}
              options={item.clients}
              className={"text-[10px] font-normal text-gray-400"}
            />
            <ClockIcon />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestCenterSelection;
