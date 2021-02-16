import { ICat } from "../mongoose/interfaces";
import { Cat, Language } from "../mongoose/models";

export const resolvers = {
  Query: {
    hello: (): string => `suh`,
    cat: async (parent: any, args: { name: string }) => {
      const cat = await Cat.find({ name: args.name }).exec();
      console.log({ cat });
      return cat;
      // return users.find(user => user.id === args.id);
    },
    cats: () => {
      return Cat.find();
    },
    languages: async () => {
      const languages = await Language.find();
      console.log({ languages });
      return languages;
    },
  },
  Mutation: {
    createCat: async (_: any, catDetails: ICat) => {
      const cat = new Cat(catDetails);
      await cat.save();
      console.log(cat);
      return cat;
    },
  },
};
