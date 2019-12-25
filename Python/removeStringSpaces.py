

def no_space(s):
    """Return string with no spaces"""

    return ''.join(s.split())


def no_space_two(string):

    return ''.join(ch for ch in string if ch != ' ')


def no_space_three(string):
    return string.replace(' ', '')


print(no_space_two('sas asda asa'))
