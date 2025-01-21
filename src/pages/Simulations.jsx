import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const patientCases = [
  {
    id: 1,
    name: "Dennis W.",
    age: 45,
    condition: "Obstructive Sleep Apnea",
    description:
      "A 45-year-old long-haul trucker with OSA continues to experience daytime sleepiness despite adherence to his CPAP therapy. What are some additional treatment options you might consider?",
    date: "September 2024",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png",
  },
  {
    id: 2,
    name: "Maria R.",
    age: 22,
    condition: "Worsening Atopic Dermatitis",
    description:
      "A 45-year-old long-haul trucker with OSA continues to experience daytime sleepiness despite adherence to his CPAP therapy. What are some additional treatment options you might consider?",
    date: "August 2024",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png",
  },
  {
    id: 2,
    name: "Maria R.",
    age: 22,
    condition: "Worsening Atopic Dermatitis",
    description:
      "A 45-year-old long-haul trucker with OSA continues to experience daytime sleepiness despite adherence to his CPAP therapy. What are some additional treatment options you might consider?",
    date: "August 2024",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png",
  },
  {
    id: 2,
    name: "Maria R.",
    age: 22,
    condition: "Worsening Atopic Dermatitis",
    description:
      "A 45-year-old long-haul trucker with OSA continues to experience daytime sleepiness despite adherence to his CPAP therapy. What are some additional treatment options you might consider?",
    date: "August 2024",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png",
  },
];

export default function PatientList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {patientCases.map((patient) => (
        <Link key={patient.id} to={`/patient-simulations/${patient.id}`}>
          <Card className="hover:shadow-lg transition duration-300 cursor-pointer">
            <CardHeader className="flex items-center space-x-4">
              <img
                src={patient.imageUrl}
                alt={patient.name}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <CardTitle className="text-lg text-center">
                  {patient.name}, {patient.age}
                </CardTitle>
                <CardDescription>{patient.condition}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                {patient.description}
              </p>
              <p className="mt-2 text-sm text-gray-500">🗓️ {patient.date}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
