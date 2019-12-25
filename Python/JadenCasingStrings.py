def toJadenCase(string):
    """Return the same string with all even indexed characters in each word upper cased"""
    return ' '.join(w.capitalize() for w in string.split())


print(toJadenCase("How can mirrors be real if our eyes aren't real"))
