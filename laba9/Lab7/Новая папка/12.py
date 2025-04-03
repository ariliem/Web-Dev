a = int(input())
b = int(input())
c = int(input())
d = int(input())
i = a
found = False
while i<=b:
    if(i%d==c):
        print(i, end='')
        found = True
    i +=1