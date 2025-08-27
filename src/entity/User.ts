import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Profile } from "./profile";

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
    cascade: ["insert", "update", "remove"],
  })
  profile: Profile;
}
