import DatePickerWithRange from "@/app/components/default-date-picker-with-range";
import { Card, CardContent } from "@/app/components/new-york-card";
import { Label } from "@/app/components/new-york-label";

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  );
}
