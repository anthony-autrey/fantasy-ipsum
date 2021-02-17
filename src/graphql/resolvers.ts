import { ICat } from "../mongoose/interfaces";
import { Cat, Language } from "../mongoose/models";
import { SortQuery, PageQuery } from "./interfaces";
const maxResultCount = 1000;

export const resolvers = {
  Query: {
    cat: async (
      parent: any,
      args: { name: string; sort: SortQuery; page: PageQuery }
    ) => {
      const sortQuery = getSortQuery(args.sort);
      const maxResults = Math.min(
        args.page?.size || maxResultCount,
        maxResultCount
      );
      const index =
        args.page?.number && args.page?.size
          ? args.page.number * args.page.size
          : 0;
      const cat = await Cat.find({ name: { $regex: args.name || `` } })
        .limit(maxResults)
        .skip(index)
        .sort(sortQuery);
      return cat;
      // return users.find(user => user.id === args.id);
    },
    cats: () => {
      return Cat.find();
    },
    languages: async () => {
      const languages = await Language.find();
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

function getSortQuery(sort: SortQuery) {
  const sortQuery: any = {};
  if (sort && sort.field) {
    let direction = 1;
    if (sort.direction && sort.direction === `descending`) direction = -1;
    if (sort.field == `id`) sort.field = `_id`;
    sortQuery[sort.field] = direction;
  }
  return sortQuery;
}
