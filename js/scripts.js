// ===============================
// Business Logic
// ===============================
function Ticket(movieName, movieTime, moviePurchaser, isMatinee, isNewRelease) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.moviePurchaser = moviePurchaser;
  this.isMatinee = isMatinee;
  this.isNewRelease = isNewRelease;
}
Ticket.prototype.getPrice = function() {
  return 2 + this.getMatineeDiscount() + this.getNewReleaseDiscount() + this.getPurchaserDiscount() ;
}
Ticket.prototype.getMatineeDiscount = function() {
  if (this.isMatinee) {
    return -0.5;
  }
  return 0;
}
Ticket.prototype.getNewReleaseDiscount = function() {
  if (this.isNewRelease) {
    return 1;
  }
  return 0;
}
Ticket.prototype.getPurchaserDiscount = function() {
  if (this.moviePurchaser === "student") {
    return -0.5;
  } else if (this.moviePurchaser === "senior") {
    return -1;
  }
  return 0;
}


function TicketPurchaser() {
  this.tickets = [];
}







// ===============================
// User Interface Logic
// ===============================
