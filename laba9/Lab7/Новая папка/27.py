a = int(input())  
b = []  
counter = 0  


for i in range(a):
    c = int(input())
    b.append(c)


for i in range(a):
    if b[i] > 0:
        counter += 1


print(counter)
