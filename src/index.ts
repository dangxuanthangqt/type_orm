import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Xxx } from "./entity/Xxx";
import { MoreThan } from "typeorm";

const XxxRepository = AppDataSource.getRepository(Xxx);
const UserRepository = AppDataSource.getRepository(User);

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

    // const user = new User();
    // user.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    // user.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    // user.age = Math.floor(Math.random() * 100);

    // await UserRepository.save([user, user, user]);
    // await UserRepository.save(user);
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

    await AppDataSource.transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.save(User, {
        firstName: "ahihi",
        lastName: "bhihi",
        age: 30,
      });
    });

    const users = await UserRepository.find({
      where: {
        age: MoreThan(20),
      },
    });

    console.log("Loaded users: ", users);
  })
  .catch((error) => console.log(error));
