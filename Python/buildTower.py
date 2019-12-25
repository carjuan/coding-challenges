def tower_builder(n_floors):
    '''Returns List containing the number of floors as strings
    Arguments:
    ----------
        n_floors {integer} -- Integer indicating the number of floors to create

    Returns:
    --------
        [List] -- List[str]

    '''

    astk = 1
    tower = []
    spaces = n_floors - 1
    floor = ""
    i = 0
    while i < n_floors:
        floor = " " * spaces + "*" * astk + " " * spaces
        tower.append(floor)
        astk += 2
        spaces -= 1
        i += 1
    return tower


def tower_builder_two(n_floors):
    '''Returns List containing the number of floors as strgins

    Arguments:
    ----------
        n_floors {integer} -- Integer indicating the number of floors to create

    Returns:
    --------
        [List] -- List[str]Representation of the floors

    '''
    return [" " * (n_floors - i - 1) + "*" * (2*i+1) + " " * (n_floors - i-1) for i in range(n_floors)]

# TESTS


print(tower_builder_two(1), ['*', ])
print(tower_builder_two(2), [' * ', '***'])
print(tower_builder_two(3), ['  *  ', ' *** ', '*****'])

print(help(str))
