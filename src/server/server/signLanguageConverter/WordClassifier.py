import imp
from inspect import getfile
from signLanguageConverter import WordBag
import string
class WordClassifier:
    def __init__(self, statement):
        self.statement = statement

    def fetchImageNames(self):
        res = []
        # check if whole of the statement in wordBag
        if self.statement in WordBag.phrases:
            return [[WordBag.phrases[self.statement]]]
        
        # try forming statement using words and letters
        for word in self.statement.split(' '):
            withoutPunc = word.translate(str.maketrans('', '', string.punctuation))
            if word in WordBag.words:
                res.append([WordBag.words[word]])
            elif withoutPunc in WordBag.words:
                res.append([WordBag.words[withoutPunc]])
            else:
                temp = []
                for letter in withoutPunc:
                    temp.append(WordBag.letters[letter])
                res.append(temp)
        print(res)
        return res