const users: User[] = [];

interface User {
    id: number;
    username: string;
    room: string
}

function userJoin(id: number, username: string, room: string): User {
    const user = { id, username, room }
    users.push(user);
    return user;
}

function getCurrentUser(id: number) {
    return users.find(user => user.id === id)
}

function userLeave(id: number) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

function getRoomUsers(room: string) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}