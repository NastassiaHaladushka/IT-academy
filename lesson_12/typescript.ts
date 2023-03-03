
// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];


// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


// 3. Напишите анотации типов к этому классу.
export class ObjectManipulator {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

export class ObjectManipulator<Type> {

    constructor(protected obj: Type) {}

    public set<Key extends string, Value> (key: Key, value: Value): ObjectManipulator <Type & {[key in Key]: Value}> {
        return new ObjectManipulator({...this.obj, [key]: value}) as ObjectManipulator <Type & {[key in Key]: Value}> ;
    }

    public get<Key extends keyof Type>(key: Key): Type[Key] {
        return this.obj[key];
    }

    public delete<Key extends keyof Type>(key: Key): ObjectManipulator<Omit<Type, Key>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): Type {
        return this.obj;
    }
}


// 4. Обеспечьте правильную типизацию для указанных функций.