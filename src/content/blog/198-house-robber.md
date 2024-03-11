---
title: '198. House Robber'
description: ''
pubDate: '3/10/2024'
heroImage: '/blog-placeholder-1.jpg'
---

##### Introduction | [Link](https://leetcode.com/problems/house-robber/description/)
This is a one dimensional dynamic programming problem. I will break down this problem with 5 steps. I would like to give credit to user heroes3001 as I followed their solution posted on leetcode [here](https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems).

##### 1. Recursive Relation
When looking at a dynamic problem, I always try to break down the problem into a series of choices. For this problem a robber has two choices when looking at a house. The robber can either **rob the current house** or **NOT rob the current house**. The problem also states that robbing adjacent houses is not a viable solution. This means that if the house i has been robbed, then the house i-1 cannot have been robbed.

Given this information, we can outline what these choices would look like as a recurrence relation. Where rob(i) returns the profit gained from robbing house i.

 - **Rob House i** = nums[i] + rob(i - 2)
 - **Don't Rob House i** = rob(i - 1)
 - **Recurrence Relation** = max( nums[i] + rob(i - 2), rob(i - 1) )

<br>The recurrence relation states that we can decide if we should rob house i or not by calculating which of the two choices yields the max profit. Here is how this can be implemented as a recursive function.

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

##### 2. Recursive Approach with Memoization

Now that we have a recursive
