import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

function ConditionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">NAME</TableHead>
          <TableHead className="w-[30%]">START DATE</TableHead>
          <TableHead className="w-[30%]">END DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Atopic Dermatitis, Moderate</TableCell>
          <TableCell>Jul 26, 2024</TableCell>
          <TableCell>Ongoing</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Atopic Dermatitis, Mild</TableCell>
          <TableCell>Feb 03, 2019</TableCell>
          <TableCell>Jul 26, 2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const PatientDetail = () => {
  const [expandedSections, setExpandedSections] = React.useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      {/* <Card className="mb-6"> */}
      {/* <CardContent> */}
      {/* Demographics Section */}
      <div className="mb-4">
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center"
          onClick={() => toggleSection("demographics")}
        >
          <span>Demographics</span>
          {expandedSections.demographics ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {expandedSections.demographics && (
          <div className="mt-2 grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-md">
            <div>
              <p className="font-semibold">Age:</p>
              <p>22 years</p>
            </div>
            <div>
              <p className="font-semibold">Gender:</p>
              <p>Female</p>
            </div>
            <div>
              <p className="font-semibold">Weight:</p>
              <p>65.0 kg</p>
            </div>
            <div>
              <p className="font-semibold">Height:</p>
              <p>167 cm</p>
            </div>
            <div>
              <p className="font-semibold">BMI:</p>
              <p>23.3</p>
            </div>
          </div>
        )}
      </div>

      {/* Medical History Section */}
      <div className="mb-4">
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center"
          onClick={() => toggleSection("history")}
        >
          <span className="font-semibold">Medical History</span>
          {expandedSections.history ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {expandedSections.history && (
          <div className="mt-2 p-4 bg-gray-50 rounded-md">
            <p className="font-semibold mb-2">History of Present Illness</p>
            <p className="mb-4">
              Ms. R. is a 22-year-old White woman with a history of AD since
              childhood presenting with concerns that her disease is progressing
              and affecting her quality of life and academic performance.
            </p>

            <p className="font-semibold mb-2">Current Treatment</p>
            <ul className="list-disc pl-5">
              <li>Topical tacrolimus 0.1% twice weekly</li>
              <li>Daily emollients</li>
              <li>Topical anti-inflammatory ointments as needed</li>
            </ul>
          </div>
        )}
      </div>

      {/* Physical Examination Section */}
      <div className="mb-4">
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center"
          onClick={() => toggleSection("examination")}
        >
          <span>Tests</span>
          {expandedSections.examination ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {expandedSections.examination && (
          <div className="mt-2 p-4 bg-gray-50 rounded-md">
            <p className="font-semibold mb-2">Condition History</p>
            <ConditionTable />
          </div>
        )}
      </div>
      <div className="mb-4">
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center"
          onClick={() => toggleSection("diagnoses")}
        >
          <span>Diagnoses</span>
          {expandedSections.diagnoses ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {expandedSections.diagnoses && (
          <div className="mt-2 p-4 bg-gray-50 rounded-md">
            <p className="font-semibold mb-2">Condition History</p>
            <ConditionTable />
          </div>
        )}
      </div>
      {/* </CardContent> */}
      {/* </Card> */}
    </div>
  );
};

export default PatientDetail;
