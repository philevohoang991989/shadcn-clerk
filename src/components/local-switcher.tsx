"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <Select
      defaultValue={localActive}
      onValueChange={(value) => onSelectChange(value)}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="vi">VietNam</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
