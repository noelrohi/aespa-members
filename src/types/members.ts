type Member = {
  name: {
    stage: string;
    fullname: string;
    native: string;
  };
  image: {
    icon: string;
    cover: string;
  };
  description: string;
  birthplace: string;
  birthdate: string;
  height?: string;
  weight?: string;
  bloodType: string;
  zodiac: string[];
};
