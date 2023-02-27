# function to calculate the area of a rectangle given its length and width
def area(length, width):
    return length * width

# read the number of test cases
t = int(input())

# iterate through each test case
for i in range(t):
    # read the dimensions of the two sports fields
    lt, wt, le, we = map(int, input().split())
    
    # calculate the areas of the two sports fields
    area_tp = area(lt, wt)
    area_ec = area(le, we)
    
    # compare the areas and print the result
    if area_tp > area_ec:
        print("TelecomParisTech")
    elif area_ec > area_tp:
        print("Eurecom")
    else:
        print("Tie")
