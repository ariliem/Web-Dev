x = int(input())  
d = 1  
while d * d <= x:  
    if x % d == 0:  
        print(d, end=" ")  
        if d != x // d:  
            print(x // d, end=" ")
    d += 1  
