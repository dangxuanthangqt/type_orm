import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tag } from "./tag";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @JoinTable({
    name: "post_tags",
  })
  @ManyToMany(() => Tag, (tag) => tag.posts, {
    cascade: true,
  })
  tags: Tag[];
}
