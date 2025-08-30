import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Profile } from "./profile";
import { Feed } from "./feed";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToOne(() => Profile, (profile) => profile.user, {
    // cascade: ["insert", "update", "remove"],
  })
  profile: Profile;

  @OneToMany(() => Feed, (feed) => feed.user, {
    cascade: true, // We usually place cascade: true for one-to-many relationships
  })
  feeds: Feed[];
}
