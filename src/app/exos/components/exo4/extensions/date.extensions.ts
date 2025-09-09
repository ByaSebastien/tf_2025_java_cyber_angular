export {}; // pour permettre declare global

// Rajoute une methode addDays au type date
declare global {
  interface Date {
    addDays(days: number): Date;
  }
}

// Definis ce que fais la methode addDays
Date.prototype.addDays = function (days: number): Date {
  this.setDate(this.getDate() + days);
  return this;
};
