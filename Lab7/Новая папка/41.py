n = int(input()) 
scores = list(map(int, input().split()))  

max_score = max(scores)


while max_score in scores:
    scores.remove(max_score)


runner_up = max(scores)

print(runner_up)
