// ---- CONSTRUCTORS ----
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.getDetails = function() {
  return `Location: ${this.location}, Landmarks: ${this.landmarks}, Time of Year: ${this.timeOfYear}, Notes: ${this.notes}`;
};

function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
};

PlaceList.prototype.getPlace = function(index) {
  return this.places[index];
};

// ---- BUSINESS LOGIC ----
const myList = new PlaceList();
myList.addPlace(new Place("Nairobi", "National Park", "Summer", "Amazing views"));
myList.addPlace(new Place("Mombasa", "Beaches", "Winter", "Relaxing holidays"));

// ---- UI LOGIC ----
const ul = document.getElementById("places-list");
const detailsDiv = document.getElementById("place-details");

myList.places.forEach((place, index) => {
  const li = document.createElement("li");
  li.textContent = place.location;
  li.addEventListener("click", () => {
    detailsDiv.textContent = place.getDetails();
  });
  ul.appendChild(li);
});

