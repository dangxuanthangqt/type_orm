import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Xxx } from "./entity/Xxx";
import { Profile } from "./entity/profile";
import { Feed } from "./entity/feed";
import { Post } from "./entity/post";
import { Tag } from "./entity/tag";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User, Xxx, Profile, Feed, Post, Tag],
  migrations: [],
  subscribers: [],
});
