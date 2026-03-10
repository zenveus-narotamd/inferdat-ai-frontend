export interface SubCard {
  id: string;
  title: string;
  content: string;
  description: string;
}

export interface ConsoleCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  subCards: SubCard[];
}
