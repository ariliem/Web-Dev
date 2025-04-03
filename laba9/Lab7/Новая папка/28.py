a = int(input())  
b = []  

for i in range(a):  
    c = int(input())  
    b.append(c)  

found = False  

for i in range(a - 1):  
    if (b[i] > 0 and b[i + 1] > 0) or (b[i] < 0 and b[i + 1] < 0):  
        found = True  
        break  

if found:  
    print("YES")  
else:  
    print("NO")  
