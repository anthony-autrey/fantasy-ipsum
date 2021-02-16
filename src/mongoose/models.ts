import mongoose, { Schema } from "mongoose";
import { ICat, ILanguage } from "./interfaces";

const CatSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});
const LanguageSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: String, required: true },
  likeCount: { type: Number, required: true },
  reports: { type: Number, required: true },
  wordLength: { type: Object, required: true },
  firstNameLength: { type: Object, required: true },
  lastNameLength: { type: Object, required: true },
  startWithVowelProbability: { type: Number, required: true },
  endWithVowelProbability: { type: Number, required: true },
  useConsonantPrefixProbability: { type: Number, required: true },
  useConsonantSuffixProbability: { type: Number, required: true },
  graphemes: { type: Object, required: true },
});

export const Cat = mongoose.model<ICat>(`Cat`, CatSchema);
export const Language = mongoose.model<ILanguage>(`Language`, LanguageSchema);
