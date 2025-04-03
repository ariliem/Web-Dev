a = int(input())
b = int(input())
n = int(a**0.5)  
if n * n < a:  
    n += 1  
while n * n <= b:
    print(n * n, end=" ")
    n += 1 
