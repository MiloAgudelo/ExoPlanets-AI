import type { UIDataTypes, UIMessage, UIMessagePart, UITools } from "ai";

export type VisibilityType = "private" | "public";

export type CustomUIDataTypes = UIDataTypes;
export type ChatTools = UITools;

export interface ChatMessage extends UIMessage<CustomUIDataTypes, ChatTools> {
  id: string;
  role: "user" | "assistant" | "system";
  parts: UIMessagePart<CustomUIDataTypes, ChatTools>[];
  metadata?: {
    createdAt: string;
  };
}

export interface RequestMessage {
  id: string;
  role: "user";
  parts: UIMessagePart<CustomUIDataTypes, ChatTools>[];
}

export interface Attachment {
  name: string;
  url: string;
  contentType: string;
}
