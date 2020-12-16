import {UniqueId} from '../../../shared/domain/uniqueId';

export class Recipe {

  private constructor(
    private id: UniqueId,
    private sourceId: UniqueId,
    private sourceName: string,
    private colorId: UniqueId,
    private opacity: number,
    private thickness: number,
    // private quality: number,
    // spectralData: yyy
    // measurementCondition: yyy
    // customProperties: CustomProperty[]
    // components: Component[]
    // colorCoordinate: ColorCoordinate
    ){}

  public get Id(): UniqueId{
    return UniqueId.create(this.id.value);
  }
  public get SourceId(): UniqueId{
    return UniqueId.create(this.sourceId.value);
  }
  public get SourceName(): string{
    return this.sourceName;
  }
  public get ColorId(): UniqueId{
    return UniqueId.create(this.colorId.value);
  }
  public get Opacity(): number{
    return this.opacity;
  }
  public get Thickness(): number{
    return this.thickness;
  }

  static create({id, sourceId, sourceName, colorId, opacity, thickness }: any): Recipe{
    return new Recipe(UniqueId.create(id), UniqueId.create(sourceId), sourceName,  UniqueId.create(colorId), opacity, thickness)
  }

}
