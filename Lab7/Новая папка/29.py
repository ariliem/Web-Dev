a = int(input())  
b = []  

for i in range(a):  
    c = int(input())  
    b.append(c)  

for i in range(a // 2):  
    b[i], b[a - i - 1] = b[a - i - 1], b[i]  

for i in range(a):  
    print(b[i], end=" ")
