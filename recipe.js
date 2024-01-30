export class Recipe {
  constructor(title, ingridients, description, time) {
    this.title = title;
    this.ingridients = ingridients;
    this.description = description;
    this.time = time;
  }

  isValideProps() {
    if (
      typeof this.title !== "string" ||
      this.title.trim() === "" ||
      !Array.isArray(this.ingridients) ||
      this.ingridients.length === 0 ||
      typeof this.description !== "string" ||
      this.description.trim() === "" ||
      typeof this.time !== "number" ||
      !Number(this.time) ||
      !isFinite(this.time)
    ) {
      return false;
    }
    for (const ingridient of this.ingridients) {
      if (typeof ingridient !== "string" || ingridient.trim() === "") {
        return false;
      }
    }
    return true;
  }
}
