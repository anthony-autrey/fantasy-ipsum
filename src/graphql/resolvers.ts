import { UserInputError } from "apollo-server-express";
import { ILanguage } from "../mongoose/interfaces";
import { Language } from "../mongoose/models";
import { SortQuery, PageQuery, Grapheme, Length } from "./interfaces";
const maxResultCount = 1000;

export const resolvers = {
  Query: {
    languages: async (
      parent: any,
      args: {
        id: string;
        name: string;
        description: string;
        owner: string;
        sort: SortQuery;
        page: PageQuery;
      }
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

      const mongooseQuery: any = {
        name: { $regex: new RegExp(args.name || ``, `i`) },
        description: { $regex: new RegExp(args.description || ``, `i`) },
        owner: { $regex: new RegExp(args.owner || ``, `i`) },
      };
      if (args.id) mongooseQuery._id = args.id;
      const languages = await Language.find(mongooseQuery)
        .limit(maxResults)
        .skip(index)
        .sort(sortQuery);
      return languages;
    },
  },
  Mutation: {
    createLanguage: async (parent: any, languageDetails: ILanguage) => {
      const language = new Language(languageDetails);
      await language.save();
      return language;
    },
    deleteLanguage: async (parent: any, args: { id: string }) => {
      const language = await Language.findByIdAndDelete(args.id);
      return language;
    },
    updateLanguage: async (
      parent: any,
      args: {
        id: string;
        name?: string;
        description?: string;
        owner?: string;
        likeCount?: number;
        reports?: number;
        wordLength?: Length;
        firstNameLength?: Length;
        lastNameLength?: Length;
        startWithVowelProbability?: number;
        endWithVowelProbability?: number;
        useConsonantPrefixProbability?: number;
        useConsonantSuffixProbability?: number;
        graphemes?: Grapheme[];
      }
    ) => {
      const language = await Language.findById(args.id);
      if (args.name) language.name = args.name;
      if (args.description) language.description = args.description;
      if (args.owner) language.owner = args.owner;
      if (args.likeCount) language.likeCount = args.likeCount;
      if (args.reports) language.reports = args.reports;
      if (args.wordLength) language.wordLength = args.wordLength;
      if (args.firstNameLength) language.firstNameLength = args.firstNameLength;
      if (args.lastNameLength) language.lastNameLength = args.lastNameLength;
      if (args.startWithVowelProbability)
        language.startWithVowelProbability = args.startWithVowelProbability;
      if (args.endWithVowelProbability)
        language.endWithVowelProbability = args.endWithVowelProbability;
      if (args.useConsonantPrefixProbability)
        language.useConsonantPrefixProbability =
          args.useConsonantPrefixProbability;
      if (args.useConsonantSuffixProbability)
        language.useConsonantSuffixProbability =
          args.useConsonantSuffixProbability;
      if (args.graphemes) language.graphemes = args.graphemes;
      await language.save();
      return language;
    },
    incrementLanguageLikes: async (parent: any, args: { id: string }) => {
      const language = await Language.findById(args.id);
      language.likeCount++;
      await language.save();
      return language;
    },
    incrementLanguageReports: async (parent: any, args: { id: string }) => {
      const language = await Language.findById(args.id);
      language.reports++;
      await language.save();
      return language;
    },
    addLanguageGrapheme: async (
      parent: any,
      args: { id: string; grapheme: Grapheme }
    ) => {
      const language = await Language.findById(args.id);
      const alreadyExistingGraphemeWithTheseCharacters = language.graphemes.find(
        (grapheme) => {
          return grapheme.characters === args.grapheme.characters;
        }
      );

      if (alreadyExistingGraphemeWithTheseCharacters) {
        throw new UserInputError(
          `A grapheme with those characters already exists`,
          {
            preexistingGrapheme: alreadyExistingGraphemeWithTheseCharacters,
          }
        );
      }

      language.graphemes.push(args.grapheme);
      await language.save();
      return language;
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
