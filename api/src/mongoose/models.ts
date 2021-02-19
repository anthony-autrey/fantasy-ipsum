import mongoose, { Schema } from "mongoose";
import { ICat, ILanguage } from "./interfaces";

const CatSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});

const GraphemeSchema: Schema = new Schema(
  {
    characters: { type: String, required: true },
    isVowel: { type: Boolean, required: true },
    beginningWeight: { type: Number, required: true, min: 0, max: 100 },
    middleWeight: { type: Number, required: true, min: 0, max: 100 },
    endingWeight: { type: Number, required: true, min: 0, max: 100 },
  },
  { _id: false }
);

const LanguageSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: String, required: true },
  likeCount: { type: Number, required: true, min: 0, default: 0 },
  reports: { type: Number, required: true, min: 0, default: 0 },
  wordLength: { type: Object, required: true, min: 1, max: 10 },
  firstNameLength: { type: Object, required: true, min: 1, max: 10 },
  lastNameLength: { type: Object, required: true, min: 1, max: 10 },
  startWithVowelProbability: { type: Number, required: true, min: 0, max: 100 },
  endWithVowelProbability: { type: Number, required: true, min: 0, max: 100 },
  useConsonantPrefixProbability: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  useConsonantSuffixProbability: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  graphemes: [{ type: GraphemeSchema, required: true }],
});

export const Cat = mongoose.model<ICat>(`Cat`, CatSchema);
export const Language = mongoose.model<ILanguage>(`Language`, LanguageSchema);
