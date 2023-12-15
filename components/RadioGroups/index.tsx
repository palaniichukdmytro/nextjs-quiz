import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroupsProps } from "./types";

export default function RadioGroups({ data, onValueChange }: RadioGroupsProps) {
  const selectedValue = data?.answers;

  return (
    <RadioGroup defaultValue={selectedValue} onValueChange={onValueChange}>
      {data.options.map((option) => (
        <div className="flex items-center space-x-2" key={option}>
          <RadioGroupItem value={option} id={option} />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
