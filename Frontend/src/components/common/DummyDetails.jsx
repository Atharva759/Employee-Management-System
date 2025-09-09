import { IoCopy, IoCloseCircle } from "react-icons/io5";

const DummyDetails = ({ t }) => {
  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <>
    <span className=" items-start justify-between w-full gap-3 p-3">
      <div className="text-base space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email:</span> eva.brown@example.com
          <IoCopy
            onClick={() => copy("eva.brown@example.com")}
            className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Password:</span> evabrown
          <IoCopy
            onClick={() => copy("evabrown")}
            className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-500"
            />
        </div>
      </div>
    </span>
    </>
  );
};
export default DummyDetails;
