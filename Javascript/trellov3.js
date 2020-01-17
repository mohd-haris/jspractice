let myToDos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone:0,

    addMeetings: function(num){
        this.meetings+=num
    },

    removeMeetings: function(num){
        this.meetingsDone+=num
    },

    getSummary: function(){
        this.meetings-=this.meetingsDone
        console.log(`You have ${this.meetings} left for today.`)
    },

    reset: function(){
        this.meetings = 0
        this.meetingsDone = 0
        console.log(`Reset done! Now : 
        Your meetings : ${this.meetings}
        Meetings done : ${this.meetingsDone}`)
        
    }


}

myToDos.addMeetings(5)
myToDos.addMeetings(3)
myToDos.removeMeetings(4)
myToDos.getSummary()
myToDos.reset()