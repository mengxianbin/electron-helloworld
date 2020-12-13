let role = {
    name: "47",
    profession: 'hitman',
    // city: 'Los Santos'
    // city: null
};
let roleCity = role?.city ?? "Night City";
console.log(roleCity);