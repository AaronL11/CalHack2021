educational = {
    "mathematics": ['arithmetic', 'multiplication', 'division', 'addition', 'subtraction', 'linear algebra', 'calculus', 'integration', 'derivatives', 'partial', 'change', 'rate', 'vector', 'function', 'integral', 'calculate', 'calculator'],
    "physics": ['proton', 'electron', 'quark', 'gluon', 'fermion', 'boson', 'quantum computing', 'quantum', 'motion', 'force', 'energy', 'momentum', 'relativitiy', 'special', 'general', 'latex', 'exchange', 'transfer', 'days'],
    "computer science": ['programming', 'mutability', 'memoization', 'counting', 'coding', 'program', 'runtime', 'python', 'javascript', 'java', 'stackoverflow', 'database', 'server', 'linux'],
    "misc": ['music', 'learning', 'strategies', 'habits', 'ideas', 'responsibility', 'studying', 'study', 'work', 'learn', 'habits', 'build', 'building', 'ingenuity', 'intuition', 'quiz', 'test', 'assignment', 'due', 'date', 'written'],
    "companies": ['wikipedia', 'freecodecamp', 'wolfram', 'alpha', 'wolframalpha', 'symbolab', 'd2l'],
}

distracting = {
    "companies": ['netflix', 'uber', 'amazon', 'minecraft', 'microsoft', 'google', 'facebook', 'nintendo', 'youtube', 'yahoo', 'discord', 'spotify', 'soundcloud', 'instagram', 'snapchat']*3,
    "icon": ['xqc', 'ninja', 'trump', 'clinton', 'pewdiepie']*2,
    "entertainment": ['entertainment', 'porn', 'anime', 'hentai', 'distraction', 'news', 'games', 'gaming', 'game', 'yandere', 'speedrun', 'ban', 'record', 'trendy', 'trend', 'trends', 'like', 'follow', 'subscribe', 'engage', 'buy', 'promotional', 'promoting', 'promote', 'rapper', 'rapping', 'influence', 'influencer'],
    "misc": ['deal', 'savings', 'troll', 'trolling'],
}

def main():
    with open('goodwords.txt', 'w') as g, open('badwords.txt', 'w') as b:
        g.write(f"{','.join(word for topic in educational for word in educational[topic])},")
        b.write(f"{','.join(word for topic in distracting for word in distracting[topic])},")

if __name__ == '__main__':
    main()