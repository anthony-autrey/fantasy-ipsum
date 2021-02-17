import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    hello: String!
    cat(name: String, sort: SortQuery, page: PageQuery): [Cat!]!
    cats: [Cat!]!
    languages: [Language!]!
  }
  type Cat {
    id: ID!
    name: String!
  }
  type Language {
    id: ID!
    name: String!
    description: String!
    owner: String!
    likeCount: String!
    reports: Int!
    wordLength: Length!
    firstNameLength: Length!
    lastNameLength: Length!
    startWithVowelProbability: Float!
    endWithVowelProbability: Float!
    useConsonantPrefixProbability: Float!
    useConsonantSuffixProbability: Float!
    graphemes: [Grapheme!]
  }
  type Length {
    min: Int!
    max: Int!
  }
  type Grapheme {
    characters: String!
    isVowel: Boolean!
    beginningWeight: Int!
    middleWeight: Int!
    endingWeight: Int!
  }
  type Mutation {
    createCat(name: String!): Cat!
  }
  input SortQuery {
    field: String!
    direction: Order
  }
  input PageQuery {
    number: Int!
    size: Int!
  }
  enum Order {
    ascending
    descending
  }
`;
