const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {

      const newWord = new Word('Pringles');
      expect(newWord).to.have.property('word');

    });

    it('should set the "word" property when a new word is created', function () {

      const newWord = new Word('Pringles');
      expect(newWord.word).to.equal('Pringles')

    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      const newWord = new Word('Pringles');
      const result = newWord.removeVowels();

      expect(result).to.equal("Prngls");

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      const newWord = new Word('Dog');
      const result = newWord.removeConsonants()

      expect(result).to.equal('o')

    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      const newWord = new Word('banana');
      const result = newWord.pigLatin();

      expect(result).to.equal('ananabay');
    });
  });
});
