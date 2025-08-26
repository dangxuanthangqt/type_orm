import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "xxx_1",
})
export class Xxx {
  @PrimaryGeneratedColumn({
    comment: "id of xxx1",
  })
  id: number;

  @Column({
    comment: "x1 of xxx1",
    type: "text",
    name: "x_1",
  })
  x1: string;

  @Column({
    unique: true,
    nullable: true,
    default: "x_2",
    length: 10,
    type: "varchar",
  })
  x2: string | null;

  @Column({
    comment: "x3 of xxx1",
    type: "double",
    name: "x_3",
  })
  x3: number;
}
