type Links = {
  name: string;
  link: string;
};

type Text = {
  title: string;
  text: string;
};

export type Fields = {
  image?: string;
  text?: Text;
  link?: string;
  links?: Links[];
};
