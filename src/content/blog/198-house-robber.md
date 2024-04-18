---
title: '198. House Robber'
description: ''
pubDate: '3/10/2024'
tags: ["dynamic programming", "leetcode"]
---
##### Introduction | [Link](https://leetcode.com/problems/house-robber/description/)
This is a one dimensional dynamic programming problem. I will break down this problem with 5 steps. I would like to give credit to user heroes3001 as I followed their solution posted on leetcode [here](https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems).

##### 1. Recursive Relation & Implementation
When looking at a dynamic problem, I always try to break down the problem into a series of choices. For this problem a robber has two choices when looking at a house. The robber can either **rob the current house** or **NOT rob the current house**. The problem also states that robbing adjacent houses is not a viable solution. This means that if the house i has been robbed, then the house i-1 cannot have been robbed.

Given this information, we can outline what these choices would look like as a recurrence relation. Where rob(i) returns the profit gained from robbing house i.

- **Rob House i** = nums[i] + rob(i - 2)
- **Don't Rob House i** = rob(i - 1)
- **Recurrence Relation** = max( nums[i] + rob(i - 2), rob(i - 1) )

The recurrence relation states that we can decide if we should rob house i or not by calculating which of the two choices yields the max profit. Here is how this can be implemented as a recursive function.

```python
class Solution:
    def recurse(self, nums: List[int], index: int):
        if index < 0:
            return 0
        
        return max(self.recurse(nums, index-1), self.recurse(nums, index-2) + nums[index])

    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        return self.recurse(nums, len(nums) - 1)
```

##### 2. Recursion with Memoization

The code in part 1 works but is inefficient. This is because a call to self.recurse() will have redundant computations due to the nature of recursion. Memoization fixes this problem by storing previous calls to self.recurse() so that we don't need to re compute results. The first step of implementing this would be to initialize an array that will store our calls to self.recurse(). I've also stored our recursive calls into variables to make the code more readable.

```python
class Solution:
    def recurse(self, nums: List[int], index: int, potential_money: List[int]) -> int:
        if index < 0:
            return 0
        
        skip_curr_house = self.recurse(nums, index-1, potential_money)
        rob_curr_house = self.recurse(nums, index-2, potential_money) + nums[index]

        result = max(skip_curr_house, rob_curr_house)
        
        return result

    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        potential_money = [-1] * len(nums)

        return self.recurse(nums, len(nums) - 1, potential_money)
```

The next step is to update `potential_money`. 

```python
class Solution:
    def recurse(self, nums: List[int], index: int, potential_money: List[int]) -> int:
        if index < 0:
            return 0
        
        skip_curr_house = self.recurse(nums, index-1, potential_money)
        rob_curr_house = self.recurse(nums, index-2, potential_money) + nums[index]

        result = max(skip_curr_house, rob_curr_house)

        potential_money[index] = result
        
        return potential_money[index]

    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        potential_money = [-1] * len(nums)

        return self.recurse(nums, len(nums) - 1, potential_money)
```

Now we have a recursive function that will store previous recursive calls in an array. However, the last question is when do we return `potential_money[index]` instead of computing the result? Notice in the initialization of `potential_money` that we initialize the array with placeholder values. If `potential_money[index]` != our place holder value, that means we are free to return `potential_money[index]`.

```python
class Solution:
    def recurse(self, nums: List[int], index: int, potential_money: List[int]) -> int:
        if index < 0:
            return 0
        
        # If we HAVE computed this recursive call before, return it
        if potential_money[index] != -1:
            return potential_money[index]
        # Otherwise, compute this recursive call and store it into potential_money
        else:
            skip_curr_house = self.recurse(nums, index-1, potential_money)
            rob_curr_house = self.recurse(nums, index-2, potential_money) + nums[index]

            potential_money[index] = max(skip_curr_house, rob_curr_house)

            return potential_money[index]

    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        potential_money = [-1] * len(nums)

        return self.recurse(nums, len(nums) - 1, potential_money)
```

The core idea of picking either skipping or robbing the current house is still present. The only difference is that we have now added `potential_money` to track all calls of `self.recurse()`. For example, `potential_money[0]` stores the max profit between robbing house 0 or skipping house 0.

##### 3. Iterative & Memoization
The solution in #2 is already good, but we can implement the logic in step two with a loop. So far, we have implemented our solutions as a top-down solution. This means that we start at self.recurse(n) and we build `potential_money` backwards. However, we can still use the same logic of finding the max of skipping a house or robbing a house when implementing our bottom-up iterative solution. Let's start by initializing the basics and our for loop.

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        nums_len = len(nums)
        potential_money = [-1] * (nums_len)

        potential_money[0] = nums[0]
        potential_money[1] = max(nums[0], nums[1])

        for house_index in range(2, nums_len):
            # Code Here

        return potential_money[nums_len-1]
```

We are still following the same structure of our potential_money list from the recursive solution before. However, we relied on the base case of a recursive function to initialize the first few values. With the iterative approach, we will have to initialize the two base cases being the profit of house 0 and house 1. We will then start looping from house 2. Now we need to compute the results of either skipping or robbing a house and storing the max of those values.

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        nums_len = len(nums)
        potential_money = [-1] * (nums_len)

        potential_money[0] = nums[0]
        potential_money[1] = max(nums[0], nums[1])

        for house_index in range(2, nums_len):
            skip_curr_house = potential_money[house_index - 1]
            rob_curr_house = potential_money[house_index - 2] + nums[house_index]

            potential_money[house_index] = max(skip_curr_house, rob_curr_house)

        return potential_money[nums_len-1]
```