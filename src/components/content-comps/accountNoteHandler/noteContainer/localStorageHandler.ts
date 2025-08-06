
interface UsersNoteTypes {
    username:string;
    note: string;
}

export const getSavedUsersFromLocalStorage = () => {
    let usersJson = (localStorage.getItem("usersNote"))
    if (!usersJson) {
        usersJson = JSON.stringify([])
        localStorage.setItem('usersNote', usersJson)
    }
    const users: [UsersNoteTypes] = JSON.parse(usersJson)
    return users
}

export const getUserFromStorage = (currentUsername: string) => {
    const savedUsers = getSavedUsersFromLocalStorage()
    let savedUser = savedUsers.find((savedUser: UsersNoteTypes) => savedUser.username === currentUsername)
    if (!savedUser) {
        savedUser = { username:currentUsername, note: "" }
        savedUsers.push(savedUser)
        localStorage.setItem('usersNote', JSON.stringify(savedUsers))
    }
    return savedUser
}

export const saveUserNoteToStorage = (currentUserObject: UsersNoteTypes) => {
    const savedUsers = getSavedUsersFromLocalStorage()
    let savedUser = savedUsers.find((savedUser: UsersNoteTypes) => savedUser.username === currentUserObject.username)
    if (savedUser) {
        savedUser.note = currentUserObject.note
        localStorage.setItem('usersNote', JSON.stringify(savedUsers))
    }
}