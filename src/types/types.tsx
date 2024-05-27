export type CommandType = {
  type: 'cmd' | 'util' | 'error';
  text: string;
  path?: string;
  page?: React.ComponentType;
};

export type CommandProps = {
  children?: React.ReactNode;
  isExecuted: boolean;
  command: string;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleCommandChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type QuoteType = {
  content: string;
  author: string;
};
