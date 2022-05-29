import imp
from inspect import getfile
from signLanguageConverter import WordBag
class WordClassifier:
    def __init__(self, statement):
        self.statement = statement

    def getFName(self, fName, ext):
        return  "/assets/images/{}.{}".format(fName, ext)

    def fetchImageNames(self):
        res = []
        # check if whole of the statement in wordBag
        if self.statement in WordBag.phrases:
            return [[self.getFName(self.statement, 'gif')]]
        
        # try forming statement using words and letters
        for word in self.statement.split(' '):
            if word in WordBag.words:
                res.append([self.getFName(word, 'gif')])
            else:
                temp = []
                for letter in word.upper():
                    temp.append(self.getFName(letter, 'jpg'))
                res.append(temp)
        return res