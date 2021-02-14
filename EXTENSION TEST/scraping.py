from functools import reduce
import sys
from bs4 import BeautifulSoup
import requests
import re
import pandas as pd

#creates a function that takes a string as a parameter and returns a string
def find(name: str) -> str:

    #better string concatenation (f-string)
    url = requests.get(name).text
    
    #creates a soup object from the url given
    soup = BeautifulSoup(url, 'lxml')

    #creates a string that contains all text in the file
    #NHU IS THE BEST.
    text = soup.get_text().lower()

    #returns all the text in the file
    return text

#method that searches through files and prints dictionary of how many times the words appeared
def searchFile(goodAndBad: str, url: str, var = 1) -> list:

    #creates a list called match
    match = {}
    #a list of sites to search through
    #sites = []

    #opens the file and goes through it, adding all the elements to the match list splitting by ,
    with open(goodAndBad) as f:
        match = {x:0 for x in f.read().split(',')}

    #goes through the site list and searches the websites text for the words, updating the dictionary
    for text in find(url).split():
        if text in match:
            match[text] += var
    
    #print(match)
    
    #prints the dictionary
    return list(match.values())

#function that will give Aaron the juice
# dictionary of url as {url: ((good-bad)/array.length, array)} as tuple
def toAaron(file) -> dict:

    #the dictionary to give to Aaron
    bigDic = {}

    #loop that goes through the file list and does math to determine how good/bad the site is
    with open(file) as f:

        #loops through each url in the file
        for x in f.read().split(','):

            #the array with all the numbers
            totalArray = searchFile("good.txt", x, 1) + searchFile("bad.txt", x, -1)

            #adds the key value pair to bigDic
            bigDic[x] = ((sum(totalArray)/len(totalArray)), totalArray)

    #returns the bigDic
    return bigDic





#main method
def main(args):
    for file in args:
        #prints the return of the function that gives Aaron the JUUICE
        print(toAaron(file))

if __name__ == '__main__':
    main(sys.argv[1:])