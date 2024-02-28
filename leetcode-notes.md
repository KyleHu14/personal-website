## Greedy Algorithms
### 53. Maximum Sub Array
Brute Force Approach : 
for each element in the array compute the sums of all sub arrays that would use the current element. 

Linear Approach : 
Personally, I think the first stepping stone when looking at this problem is that subarrays are just consecutive numbers. this means that we want to preserve the order of the original numbers array when calculating the sub array.

Therefore, the first step would be to traverse the numbers list linearly. 
    for num in numbers:
        # code here

Now that we have a loop, we are going to need to track the max sum as we loop through the list. I'm going to create two variables called maxSum and curSum.
    maxSum = 0
    curSum = 0
    for num in numbers: 
        # code here