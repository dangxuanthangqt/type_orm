import { AppDataSource } from "./data-source";
import { Feed } from "./entity/feed";
import { Profile } from "./entity/profile";
import { User } from "./entity/User";
import { Xxx } from "./entity/Xxx";
import { MoreThan } from "typeorm";

const XxxRepository = AppDataSource.getRepository(Xxx);
const UserRepository = AppDataSource.getRepository(User);
const ProfileRepository = AppDataSource.getRepository(Profile);
const FeedRepository = AppDataSource.getRepository(Feed);

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");

    // Random names arrays
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Sarah",
      "David",
      "Emily",
      "James",
      "Emma",
      "Robert",
      "Olivia",
      "William",
      "Sophia",
      "Daniel",
      "Isabella",
      "Matthew",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Gonzalez",
      "Wilson",
      "Anderson",
    ];

    const user = new User();
    user.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    user.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    user.age = Math.floor(Math.random() * 100);

    // const profile = new Profile();
    // profile.description = "Profile description";
    // user.profile = profile;

    // await UserRepository.save([user, user, user]);
    // await UserRepository.save(user);

    // const userCreated = UserRepository.create({
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   age: user.age,
    //   profile: {
    //     description: profile.description,
    //   },
    // });

    // await UserRepository.save(userCreated);

    // const profileCreated = ProfileRepository.create({
    //   description: profile.description,
    //   user: user,
    // });

    // await ProfileRepository.save(profileCreated);

    // console.log("Saved a new user with id: " + user.id);

    // const xxx = new Xxx();
    // xxx.x1 = "value for x1";
    // xxx.x2 = null;
    // xxx.x3 = 3.14;

    // await XxxRepository.save(xxx);

    // await UserRepository.delete(2);
    // await UserRepository.delete({
    //   id: 3,
    // });

    // const users = await UserRepository.query(
    //   "SELECT * FROM user WHERE id in(?,?)",
    //   [4, 5]
    // );

    // const users = await UserRepository.createQueryBuilder("user")
    //   .where("user.id IN (:...ids)", { ids: [4, 5] })
    //   .getMany();

    // await AppDataSource.transaction(async (transactionalEntityManager) => {
    //   await transactionalEntityManager.save(User, {
    //     firstName: "ahihi",
    //     lastName: "bhihi",
    //     age: 30,
    //   });
    // });

    // const userFindOne = await UserRepository.findOne({
    //   where: {
    //     id: 999,
    //   },
    //   relations: ["profile"],
    // });

    // console.log("userFindOne", userFindOne);

    // userFindOne.profile.description = "Updated profile description 111";

    // await UserRepository.save(userFindOne);

    // await UserRepository.remove(userFindOne);

    // const users = await UserRepository.find({
    //   where: {
    //     age: MoreThan(20),
    //   },
    //   relations: ["profile"],
    // });

    // console.log("Loaded users: ", users);

    // const profiles = await ProfileRepository.find({
    //   relations: ["user"],
    // });

    // console.log("profiles", profiles);

    // ------------------------------------- ONE TO MANY

    const feed1 = new Feed();
    feed1.content = "Feed content 1";

    const feed2 = new Feed();
    feed2.content = "Feed content 2";

    const feed3 = new Feed();
    feed3.content = "Feed content 3";

    user.feeds = [feed1, feed2, feed3];

    // await UserRepository.save(user);

    const feeds = await FeedRepository.find({
      where: {
        user: user,
      },
      relations: ["user"],
    });

    console.log("feeds", feeds);

    const users = await UserRepository.find({
      relations: {
        feeds: true,
      },
    });

    console.log("userFindOne", users);
  })
  .catch((error) => console.log(error));
