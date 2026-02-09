function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
};
