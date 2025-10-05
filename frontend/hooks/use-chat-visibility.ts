import { useState } from "react";
import type { VisibilityType } from "@/lib/types";

export function useChatVisibility({
  initialVisibilityType,
}: {
  chatId: string;
  initialVisibilityType: VisibilityType;
}) {
  const [visibilityType] = useState<VisibilityType>(initialVisibilityType);
  return { visibilityType };
}
