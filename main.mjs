import data from './data.json' assert { type: "json" };

function showInfo() {
    data.users.forEach(function (user) {
        let userInfo = `${user.firstName} ${user.lastName} born at ${user.dateOfBirth} - ${user.knowsAs}.`;
        console.log(userInfo);
    });
}

function getListOfUsers() {
    let users = JSON.parse(JSON.stringify(data, ['users', 'firstName', 'lastName'])).users;
    console.log(users);
}

showInfo();
getListOfUsers();
