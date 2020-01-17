let myToDos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone:0,
}

let addMeetings = function(todo, numMeetings){
    todo.meetings = todo.meetings + numMeetings
}

let removeMeetings = function(todo, mNumMeetings){
    todo.meetingsDone = todo.meetingsDone - mNumMeetings
}

let getSummary = function(todo){
    todo.meetings = todo.meetings + todo.meetingsDone
    console.log(`You have ${todo.meetings} left for today!`)
}

addMeetings(myToDos, 5)
addMeetings(myToDos, 3)

removeMeetings(myToDos, 4)

getSummary(myToDos)