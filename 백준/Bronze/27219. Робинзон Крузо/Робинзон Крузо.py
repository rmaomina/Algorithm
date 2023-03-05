n = int(input())
result = ""
for i in range(n):
    if i % 5 == 4:
        result = result[:-4] + "V"
    else:
        result += "I"
print(result)