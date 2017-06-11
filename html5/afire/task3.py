'''
 * Shuffle uint N, and print the count of numbers similar to it
 * Numbers with leading 0 (and duplicates) are not counted
 * * Use permutations
 * Makhtar Diouf
 * Runnable with py2 and 3
'''
from itertools import permutations

debugOn = True

def solution(N):
    inStr = str(N)
    if len(inStr) <= 1:
        return 1

    l =  [str(x) for x in inStr]
    perms = [''.join(p) for p in permutations(l, len(l)) if p[0] is not '0' ]

    if debugOn:
        print (perms)

    # Remove duplicates
    res = list(set(perms))
    return len(res)


if debugOn:
    print (solution(133))
    print (solution(41))
    print (solution('012'))
    print (solution(9))
    
