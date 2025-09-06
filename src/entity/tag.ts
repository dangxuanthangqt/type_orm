import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Post, (post) => post.tags, {
    cascade: ["insert", "update"],
    // onDelete: "CASCADE",
    // onUpdate: "CASCADE",
  })
  posts: Post[];
}
