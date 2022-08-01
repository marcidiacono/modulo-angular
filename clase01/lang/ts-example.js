var user = {
    name: "Homero",
    id: 1
};
var UserCard = /** @class */ (function () {
    function UserCard(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserCard;
}());
var userCard = new UserCard("Marge", 2);
function getAdminUser() {
    // ...
    return new UserCard("Lisa", 3);
}
function deleteUser(user) {
    // ...
}
var ts1 = {
    prop1: "algo",
    prop2: "otra cosa"
};
var ts2 = {
    prop1: true,
    prop2: false
};
var v1 = ts1.prop1;
var v2 = ts2.prop2;
function infiniteLoop() {
    while (true)
        ;
}
function otherFunc() {
}
var UserAdmin = /** @class */ (function () {
    function UserAdmin(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAdmin;
}());
var userAdmin1 = new UserAdmin("Homero", 1);
var userAdmin2 = new UserAdmin("Marge", 2);
console.log(userAdmin1.name, userAdmin2.name);
