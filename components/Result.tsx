import { PersonInfo } from "@/common/types";


function Results({ personInfo }: { personInfo: PersonInfo }) {
  if (!personInfo) return null;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Results</h2>
      <p>Age: {personInfo.age || "Unknown"}</p>
      <p>Gender: {personInfo.gender || "Unknown"}</p>
      <p>Country: {personInfo.country || "Unknown"}</p>
    </div>
  );
}

export default Results;
