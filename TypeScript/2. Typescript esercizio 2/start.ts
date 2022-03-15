type Role = "staff" | "student" | "manager" | "admin";
type Gender = "male" | "female" | "other";

interface Place {
  city: string;
  street: string;
  postalCode: string;
}

interface Company {
  id: number;
  name: string;
  description?: string;
  location: Place;
}

interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Place;
  role: Role;
  username: string;
  profilePhotoUrl?: string;
  companies: Company[];
  gender: Gender;
}

class User implements Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Place;
  role: Role;
  username: string;
  profilePhotoUrl?: string;
  companies: Company[];
  gender: Gender;

  constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: Place,
    role: Role,
    username: string,
    companies: Company[],
    gender: Gender
  ) {
    (this.id = id),
      (this.name = name),
      (this.surname = surname),
      (this.age = age),
      (this.dateOfBirth = dateOfBirth),
      (this.address = address),
      (this.role = role),
      (this.username = username),
      (this.gender = gender);
    this.companies = companies;
  }

  getFullName(): void {
    console.log(`My name is: ${this.name} ${this.surname}`);
  }
}

const user = new User(
  3487,
  "Mario",
  "Rossi",
  30,
  "1995/12/14",
  {
    city: "Roma",
    street: "Via roma 10",
    postalCode: "00100",
  },
  "staff",
  "MarioRossi80",
  [
    {
      id: 148979,
      name: "Develhope",
      description: "La migliore",
      location: {
        city: "Palermo",
        street: "Via Libertà 58",
        postalCode: "90139",
      },
    },
    {
      id: 123123,
      name: "Apple",
      description: "E insomma...",
      location: {
        city: "Cupertino",
        street: "One Apple Park Way",
        postalCode: "95014",
      },
    },
  ],
  "male"
);

user.getFullName();
