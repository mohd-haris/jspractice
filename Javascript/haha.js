// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value="") {
 if(value != "")
 {
     if(prop=="tracks")
   { 
       if(collection[id].hasOwnProperty(prop))
    {
    collection[id][prop].push(value)
    return collection
    }
    else{
        collection[id][prop]=[]
        collection[id][prop].push(value)
        return collection
    }
    }

    else
    {
            collection[id][prop]=value
            return collection
    }


 }

 else{
     delete collection[id][prop]
     return collection
    }

  }
  
  // Alter values below to test your code
updateRecords(5439, "tracks","ABBA");
  