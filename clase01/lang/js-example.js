const user = {
    name: "Homero",
    id: 1,
    username: "hsimpson",
}

class UserCard {
    name;
    id;

    constructor(name, id) {
        this.name = name;
        this.id = id
    }
}

const userCard = new UserCard("Marge", "2");

function getAdminUser() {
    // ...
    return new UserCard("Lista", true);
}

function deleteUser(user) {
    // ...
}