export class User {
  public name: string = '';
  public date!: string;
  public company!: string;
  public country!: string;
  public city!: string;
  public phone!: string;

  constructor(userObj: any) {
    this.name = userObj.name;
    this.date = userObj.date;
    this.company = userObj.company;
    this.country = userObj.country;
    this.city = userObj.city;
    this.phone = userObj.phone;
  }

  setName(value: string) {
    try {
      this.name = value;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
