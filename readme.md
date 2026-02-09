Describe: Place

Test: It should create a Place object with location, landmarks, timeOfYear, and notes
Code:
const place = new Place("Nairobi", "National Park", "Summer", "Amazing views");
Expected Output:
place.location === "Nairobi"
place.landmarks === "National Park"
place.timeOfYear === "Summer"
place.notes === "Amazing views"

Describe: PlaceList

Test: It should store Place objects in a list
Code:
const list = new PlaceList();
const place1 = new Place("Nairobi", "Park", "Summer", "Nice views");
list.addPlace(place1);
Expected Output:
list.places[0] === place1
Describe: Place

Test: It should return all details as a string
Code:
const place = new Place("Nairobi", "Park", "Summer", "Nice views");
Expected Output:
place.getDetails() === "Location: Nairobi, Landmarks: Park, Time of Year: Summer, Notes: Nice views"

Describe: PlaceList

Test: It should retrieve a Place by index
Code:
const list = new PlaceList();
const place1 = new Place("Nairobi", "Park", "Summer", "Nice views");
list.addPlace(place1);
Expected Output:
list.getPlace(0) === place1
