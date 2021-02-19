import { gql } from "apollo-server-express";

export const schema = gql`
  # Queries ################################################

  type Query {
    languages(
      id: String
      name: String
      description: String
      owner: String
      sort: SortQuery
      page: PageQuery
    ): LanguageResult!
  }

  # Schema ################################################

  type Language {
    id: ID!
    name: String!
    description: String!
    owner: String!
    likeCount: Int!
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

  # Results ################################################

  type LanguageResult {
    languages: [Language!]!
    totalCount: Int!
  }
  # Mutations ################################################

  type Mutation {
    createLanguage(
      name: String!
      description: String!
      owner: String!
      likeCount: Int
      reports: Int
      wordLength: LengthInput!
      firstNameLength: LengthInput!
      lastNameLength: LengthInput!
      startWithVowelProbability: Float!
      endWithVowelProbability: Float!
      useConsonantPrefixProbability: Float!
      useConsonantSuffixProbability: Float!
      graphemes: [GraphemeInput!]!
    ): Language!

    updateLanguage(
      id: String!
      name: String
      description: String
      owner: String
      likeCount: Int
      reports: Int
      wordLength: LengthInput
      firstNameLength: LengthInput
      lastNameLength: LengthInput
      startWithVowelProbability: Float
      endWithVowelProbability: Float
      useConsonantPrefixProbability: Float
      useConsonantSuffixProbability: Float
      graphemes: [GraphemeInput!]
    ): Language!

    deleteLanguage(id: String!): Language!

    incrementLanguageLikes(id: String!): Language!

    incrementLanguageReports(id: String!): Language!

    addLanguageGrapheme(id: String!, grapheme: GraphemeInput!): Language!
  }

  # Inputs ################################################

  input LengthInput {
    min: Int!
    max: Int!
  }

  input GraphemeInput {
    characters: String!
    isVowel: Boolean!
    beginningWeight: Int!
    middleWeight: Int!
    endingWeight: Int!
  }

  input PageQuery {
    number: Int!
    size: Int!
  }

  input SortQuery {
    field: String!
    direction: Order
  }

  # Enumerations ################################################

  enum Order {
    ascending
    descending
  }
`;
