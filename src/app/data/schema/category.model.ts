export class CategoryModel {
  public id: string;
  public name: string;

  public constructor(
    data?: CategoryModel
  ) {
    const category = data == null ? this : data;

    this.id = category.id;
    this.name = category.name;
  }
}
