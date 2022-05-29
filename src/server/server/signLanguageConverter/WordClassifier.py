import imp
from inspect import getfile
from signLanguageConverter import WordBag
class WordClassifier:
    def __init__(self, statement):
        self.statement = statement

    def getFName(self, fName):
        return  "/assets/images/{}.jpg".format(fName)

    def fetchImageNames(self):
        # check if whole of the statement in wordBag
        if self.statement in WordBag.phrases:
            return [self.getFName(self.statement)]
        
        res = []
        # try forming statement using words and letters
        for word in self.statement.split(' '):
            if word in WordBag.words:
                res.append(self.getFName(word))
            else:
                for letter in word:
                    res.append(self.getFName(letter))
        
        return res