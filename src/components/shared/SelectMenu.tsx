import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface IProps {
  label: string;
  options:  string [];
}

export function SelectMenu({ label , options = [] }: IProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
