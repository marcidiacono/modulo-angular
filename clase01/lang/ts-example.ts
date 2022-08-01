interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Homero",
    id: 1,
}

class UserCard {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id
    }
}

const userCard: User = new UserCard("Marge", 2);

function getAdminUser(): User {
    // ...
    return new UserCard("Lisa", 3);
}

function deleteUser(user: User) {
    // ...
}

interface Ts {
    prop1: any;
    prop2: unknown;
}

const ts1: Ts = {
    prop1: "algo",
    prop2: "otra cosa",
}

const ts2: Ts = {
    prop1: true,
    prop2: false,
}

const v1: string = ts1.prop1;
const v2: any = ts2.prop2;

function infiniteLoop(): never {
    while (true);
}

function otherFunc(): void {

}

interface UserInterface {
    name: string,
    id: number,
}

type UserType = {
    name: string,
    id: number,
}

class UserAdmin {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const userAdmin1: UserInterface = new UserAdmin("Homero", 1);
const userAdmin2: UserType = new UserAdmin("Marge", 2);

console.log(userAdmin1.name, userAdmin2.name);

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type oneDigitPrimeNumbers = 1 | 2 | 3 | 5 | 7;

let windowState: WindowStates = "open";

let prime: oneDigitPrimeNumbers;

prime = 2;

prime = 3;

function getLength(obj: string | string[]): number {
    return obj.length;
}

function wrapInArray(obj: string | string[]): Array<string> {
    if (typeof obj === "string") {
        return [obj];
    } else {
        return obj;
    }
}

type StringArray = Array<string>;
type NumberArray = Array<number>;

const vector: NumberArray = [2, 3, 4];

type ObjectWithColorArray = Array<{color: string}>

const v: ObjectWithColorArray = [{color:"red"}, {color:"blue"}]