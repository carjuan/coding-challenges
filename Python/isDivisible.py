def is_divisible(n, x, y):
    """Return True if n is divisble by x and y, False otherwise"""
    assert n > 0, "{} must be > 0".format(n)
    return n % x == 0 and n % y == 0


print(is_divisible(4, 2, 2))
