const steps = [
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1: Easy": [
        {
          id: "largest-element",
          title: "Largest Element in an Array",
          content: "You are given an array. Find the largest element in it.",
          solution: `function findLargest(arr) {
  return Math.max(...arr);
}`,
        },
        {
          id: "second-largest",
          title: "Second Largest Element in an Array without sorting",
          content:
            "Find the second largest element in an array without using sort.",
          solution: `function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}`,
        },
        {
          id: "check-sorted",
          title: "Check if the array is sorted",
          content:
            "Return true if the array is sorted in non-decreasing order.",
          solution: `function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}`,
        },
        {
          id: "remove-duplicates",
          title: "Remove duplicates from Sorted array",
          content:
            "Remove duplicates from a sorted array in-place and return the length of the modified array.",
          solution: `function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}`,
        },
        {
          id: "left-rotate-one",
          title: "Left Rotate an array by one place",
          content: "Rotate an array to the left by one position.",
          solution: `function rotateLeftByOne(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}`,
        },
      ],
      "Lec 2: Medium": [
        {
          id: "two-sum",
          title: "2Sum Problem",
          content:
            "Given an array and a target, return indices of two numbers that add up to target.",
          solution: `function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }
}`,
        },
        {
          id: "sort-0s-1s-2s",
          title: "Sort an array of 0's 1's and 2's",
          content:
            "Sort an array containing only 0s, 1s, and 2s without using sort.",
          solution: `function sortColors(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++; mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}`,
        },
        {
          id: "majority-nby2",
          title: "Majority Element (>n/2 times)",
          content:
            "Find the element that appears more than n/2 times if it exists.",
          solution: `function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return arr.filter(x => x === candidate).length > arr.length / 2 ? candidate : -1;
}`,
        },
        {
          id: "kadane",
          title: "Kadane's Algorithm, maximum subarray sum",
          content: "Find the contiguous subarray with the maximum sum.",
          solution: `function maxSubArray(arr) {
  let maxSoFar = arr[0], maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`,
        },
        {
          id: "print-max-subarray",
          title: "Print subarray with maximum subarray sum",
          content:
            "Print the actual subarray (not just the sum) with the maximum sum.",
          solution: `function printMaxSubarray(arr) {
  let maxSum = arr[0], currSum = arr[0];
  let start = 0, end = 0, tempStart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
      tempStart = i;
    } else {
      currSum += arr[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}`,
        },
      ],
      "Lec 3: Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content: "Generate Pascal's Triangle up to n rows.",
          solution: `function generate(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}`,
        },
        {
          id: "majority-nby3",
          title: "Majority Element (n/3 times)",
          content: "Find all elements that appear more than ⌊ n/3 ⌋ times.",
          solution: `function majorityElement(arr) {
  let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;
  for (let num of arr) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
    else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  return [candidate1, candidate2].filter(
    candidate => arr.filter(n => n === candidate).length > arr.length / 3
  );
}`,
        },
        {
          id: "three-sum",
          title: "3-Sum Problem",
          content:
            "Find all unique triplets in the array which gives the sum of zero.",
          solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
}`,
        },
        {
          id: "four-sum",
          title: "4-Sum Problem",
          content: "Find all unique quadruplets that sum up to a given target.",
          solution: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
}`,
        },
        {
          id: "largest-zero-subarray",
          title: "Largest Subarray with 0 Sum",
          content: "Find the length of the largest subarray with 0 sum.",
          solution: `function maxLenZeroSumSubarray(arr) {
  const map = new Map();
  let sum = 0, maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) maxLen = i + 1;
    else if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1: Easy": [
        {
          id: "largest-element",
          title: "Largest Element in an Array",
          content: "You are given an array. Find the largest element in it.",
          solution: `function findLargest(arr) {
  return Math.max(...arr);
}`,
        },
        {
          id: "second-largest",
          title: "Second Largest Element in an Array without sorting",
          content:
            "Find the second largest element in an array without using sort.",
          solution: `function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}`,
        },
        {
          id: "check-sorted",
          title: "Check if the array is sorted",
          content:
            "Return true if the array is sorted in non-decreasing order.",
          solution: `function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}`,
        },
        {
          id: "remove-duplicates",
          title: "Remove duplicates from Sorted array",
          content:
            "Remove duplicates from a sorted array in-place and return the length of the modified array.",
          solution: `function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}`,
        },
        {
          id: "left-rotate-one",
          title: "Left Rotate an array by one place",
          content: "Rotate an array to the left by one position.",
          solution: `function rotateLeftByOne(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}`,
        },
      ],
      "Lec 2: Medium": [
        {
          id: "two-sum",
          title: "2Sum Problem",
          content:
            "Given an array and a target, return indices of two numbers that add up to target.",
          solution: `function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }
}`,
        },
        {
          id: "sort-0s-1s-2s",
          title: "Sort an array of 0's 1's and 2's",
          content:
            "Sort an array containing only 0s, 1s, and 2s without using sort.",
          solution: `function sortColors(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++; mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}`,
        },
        {
          id: "majority-nby2",
          title: "Majority Element (>n/2 times)",
          content:
            "Find the element that appears more than n/2 times if it exists.",
          solution: `function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return arr.filter(x => x === candidate).length > arr.length / 2 ? candidate : -1;
}`,
        },
        {
          id: "kadane",
          title: "Kadane's Algorithm, maximum subarray sum",
          content: "Find the contiguous subarray with the maximum sum.",
          solution: `function maxSubArray(arr) {
  let maxSoFar = arr[0], maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`,
        },
        {
          id: "print-max-subarray",
          title: "Print subarray with maximum subarray sum",
          content:
            "Print the actual subarray (not just the sum) with the maximum sum.",
          solution: `function printMaxSubarray(arr) {
  let maxSum = arr[0], currSum = arr[0];
  let start = 0, end = 0, tempStart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
      tempStart = i;
    } else {
      currSum += arr[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}`,
        },
      ],
      "Lec 3: Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content: "Generate Pascal's Triangle up to n rows.",
          solution: `function generate(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}`,
        },
        {
          id: "majority-nby3",
          title: "Majority Element (n/3 times)",
          content: "Find all elements that appear more than ⌊ n/3 ⌋ times.",
          solution: `function majorityElement(arr) {
  let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;
  for (let num of arr) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
    else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  return [candidate1, candidate2].filter(
    candidate => arr.filter(n => n === candidate).length > arr.length / 3
  );
}`,
        },
        {
          id: "three-sum",
          title: "3-Sum Problem",
          content:
            "Find all unique triplets in the array which gives the sum of zero.",
          solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
}`,
        },
        {
          id: "four-sum",
          title: "4-Sum Problem",
          content: "Find all unique quadruplets that sum up to a given target.",
          solution: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
}`,
        },
        {
          id: "largest-zero-subarray",
          title: "Largest Subarray with 0 Sum",
          content: "Find the length of the largest subarray with 0 sum.",
          solution: `function maxLenZeroSumSubarray(arr) {
  const map = new Map();
  let sum = 0, maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) maxLen = i + 1;
    else if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1: Easy": [
        {
          id: "largest-element",
          title: "Largest Element in an Array",
          content: "You are given an array. Find the largest element in it.",
          solution: `function findLargest(arr) {
  return Math.max(...arr);
}`,
        },
        {
          id: "second-largest",
          title: "Second Largest Element in an Array without sorting",
          content:
            "Find the second largest element in an array without using sort.",
          solution: `function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}`,
        },
        {
          id: "check-sorted",
          title: "Check if the array is sorted",
          content:
            "Return true if the array is sorted in non-decreasing order.",
          solution: `function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}`,
        },
        {
          id: "remove-duplicates",
          title: "Remove duplicates from Sorted array",
          content:
            "Remove duplicates from a sorted array in-place and return the length of the modified array.",
          solution: `function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}`,
        },
        {
          id: "left-rotate-one",
          title: "Left Rotate an array by one place",
          content: "Rotate an array to the left by one position.",
          solution: `function rotateLeftByOne(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}`,
        },
      ],
      "Lec 2: Medium": [
        {
          id: "two-sum",
          title: "2Sum Problem",
          content:
            "Given an array and a target, return indices of two numbers that add up to target.",
          solution: `function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }
}`,
        },
        {
          id: "sort-0s-1s-2s",
          title: "Sort an array of 0's 1's and 2's",
          content:
            "Sort an array containing only 0s, 1s, and 2s without using sort.",
          solution: `function sortColors(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++; mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}`,
        },
        {
          id: "majority-nby2",
          title: "Majority Element (>n/2 times)",
          content:
            "Find the element that appears more than n/2 times if it exists.",
          solution: `function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return arr.filter(x => x === candidate).length > arr.length / 2 ? candidate : -1;
}`,
        },
        {
          id: "kadane",
          title: "Kadane's Algorithm, maximum subarray sum",
          content: "Find the contiguous subarray with the maximum sum.",
          solution: `function maxSubArray(arr) {
  let maxSoFar = arr[0], maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`,
        },
        {
          id: "print-max-subarray",
          title: "Print subarray with maximum subarray sum",
          content:
            "Print the actual subarray (not just the sum) with the maximum sum.",
          solution: `function printMaxSubarray(arr) {
  let maxSum = arr[0], currSum = arr[0];
  let start = 0, end = 0, tempStart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
      tempStart = i;
    } else {
      currSum += arr[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}`,
        },
      ],
      "Lec 3: Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content: "Generate Pascal's Triangle up to n rows.",
          solution: `function generate(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}`,
        },
        {
          id: "majority-nby3",
          title: "Majority Element (n/3 times)",
          content: "Find all elements that appear more than ⌊ n/3 ⌋ times.",
          solution: `function majorityElement(arr) {
  let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;
  for (let num of arr) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
    else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  return [candidate1, candidate2].filter(
    candidate => arr.filter(n => n === candidate).length > arr.length / 3
  );
}`,
        },
        {
          id: "three-sum",
          title: "3-Sum Problem",
          content:
            "Find all unique triplets in the array which gives the sum of zero.",
          solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
}`,
        },
        {
          id: "four-sum",
          title: "4-Sum Problem",
          content: "Find all unique quadruplets that sum up to a given target.",
          solution: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return res;
}`,
        },
        {
          id: "largest-zero-subarray",
          title: "Largest Subarray with 0 Sum",
          content: "Find the length of the largest subarray with 0 sum.",
          solution: `function maxLenZeroSumSubarray(arr) {
  const map = new Map();
  let sum = 0, maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) maxLen = i + 1;
    else if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}`,
        },
      ],
    },
  },
];

export default steps;

// const steps = [
//   {
//     stepTitle: "Step 1: Arrays",
//     sections: {
//       "Lec 1: Easy": [
//         {
//           title: "Largest Element in an Array",
//           id: "largest-element-in-an-array",
//         },
//         {
//           title: "Second Largest Element in an Array without sorting",
//           id: "second-largest-element-without-sorting",
//         },
//         {
//           title: "Check if the array is sorted",
//           id: "check-if-array-is-sorted",
//         },
//         {
//           title: "Remove duplicates from Sorted array",
//           id: "remove-duplicates-from-sorted-array",
//         },
//         {
//           title: "Left Rotate an array by one place",
//           id: "left-rotate-array-by-one",
//         },
//       ],
//       "Lec 2: Medium": [
//         { title: "2Sum Problem", id: "2sum-problem" },
//         { title: "Sort an array of 0's 1's and 2's", id: "sort-array-012" },
//         { title: "Majority Element (>n/2 times)", id: "majority-element-nby2" },
//         {
//           title: "Kadane's Algorithm, maximum subarray sum",
//           id: "kadanes-algorithm",
//         },
//         {
//           title: "Print subarray with maximum subarray sum",
//           id: "print-max-subarray",
//         },
//       ],
//       "Lec 3: Hard": [
//         { title: "Pascal's Triangle", id: "pascals-triangle" },
//         { title: "Majority Element (n/3 times)", id: "majority-element-nby3" },
//         { title: "3-Sum Problem", id: "3sum-problem" },
//         { title: "4-Sum Problem", id: "4sum-problem" },
//         {
//           title: "Largest Subarray with 0 Sum",
//           id: "largest-subarray-with-zero-sum",
//         },
//       ],
//     },
//   },
//   {
//     stepTitle: "Step 2: Binary Search",
//     sections: {
//       "Lec 1: BS on 1D Arrays": [
//         {
//           title: "Binary Search to find X in sorted array",
//           id: "binary-search-find-x",
//         },
//         { title: "Implement Lower Bound", id: "implement-lower-bound" },
//         { title: "Implement Upper Bound", id: "implement-upper-bound" },
//         { title: "Search Insert Position", id: "search-insert-position" },
//         { title: "Floor/Ceil in Sorted Array", id: "floor-ceil-sorted-array" },
//         {
//           title:
//             "Find the first or last occurrence of a given number in a sorted array",
//           id: "find-first-last-occurrence",
//         },
//       ],
//       "Lec 2: BS on Answers": [
//         {
//           title: "Find square root of a number in log n",
//           id: "sqrt-using-binary-search",
//         },
//         {
//           title: "Find the Nth root of a number using binary search",
//           id: "nth-root-using-binary-search",
//         },
//         { title: "Koko Eating Bananas", id: "koko-eating-bananas" },
//         {
//           title: "Minimum days to make M bouquets",
//           id: "min-days-to-make-bouquets",
//         },
//         { title: "Find the smallest Divisor", id: "find-smallest-divisor" },
//         {
//           title: "Capacity to Ship Packages within D Days",
//           id: "capacity-ship-packages",
//         },
//       ],
//       "Lec 3: BS on 2D Arrays": [
//         {
//           title: "Find the row with maximum number of 1's",
//           id: "row-with-max-ones",
//         },
//         { title: "Search in a 2D matrix", id: "search-2d-matrix" },
//         {
//           title: "Search in a row and column wise sorted matrix",
//           id: "search-sorted-matrix",
//         },
//         { title: "Find Peak Element (2D Matrix)", id: "find-peak-element-2d" },
//         { title: "Matrix Median", id: "matrix-median" },
//       ],
//     },
//   },
//   {
//     stepTitle: "Step 3: Linked List",
//     sections: {
//       "Lec 1: Learn Singly Linked List": [
//         {
//           title:
//             "Introduction to LinkedList, learn about struct, and how is node represented",
//           id: "intro-singly-ll",
//         },
//         { title: "Inserting a node in LinkedList", id: "insert-node-ll" },
//         { title: "Deleting a node in LinkedList", id: "delete-node-ll" },
//         {
//           title: "Find the length of the linkedlist [learn traversal]",
//           id: "length-of-ll",
//         },
//         { title: "Search an element in the LL", id: "search-element-ll" },
//       ],
//       "Lec 2: Learn Doubly Linked List": [
//         {
//           title:
//             "Introduction to DLL, learn about struct, and how is node represented",
//           id: "intro-dll",
//         },
//         { title: "Insert a node in DLL", id: "insert-node-dll" },
//         { title: "Delete a node in DLL", id: "delete-node-dll" },
//         {
//           title: "Middle of a LinkedList [TortoiseHare Method]",
//           id: "middle-of-ll",
//         },
//         {
//           title: "Reverse a LinkedList [Iterative]",
//           id: "reverse-ll-iterative",
//         },
//       ],
//       "Lec 3: Problems on LinkedList": [
//         { title: "Reverse a LL [Recursive]", id: "reverse-ll-recursive" },
//         { title: "Detect a loop in LL", id: "detect-loop-ll" },
//         { title: "Find the starting point in LL", id: "find-loop-start-ll" },
//         { title: "Reverse a DLL", id: "reverse-dll" },
//       ],
//     },
//   },
//   {
//     stepTitle: "Step 4: Sliding Window",
//     sections: {
//       "Lec 1: Medium Problem": [
//         {
//           title: "Longest Substring Without Repeating Characters",
//           id: "longest-substring-no-repeat",
//         },
//         { title: "Max Consecutive Ones III", id: "max-consecutive-ones-iii" },
//         { title: "Fruit Into Baskets", id: "fruit-into-baskets" },
//         {
//           title: "Longest Repeating Character Replacement",
//           id: "longest-repeating-char-replacement",
//         },
//         { title: "Binary Subarray With Sum", id: "binary-subarray-sum" },
//         { title: "Count Number of Nice Subarrays", id: "count-nice-subarrays" },
//       ],
//       "Lec 2: Hard Problem": [
//         {
//           title: "Longest Substring with At Most K Distinct Characters",
//           id: "longest-substring-at-most-k",
//         },
//         {
//           title: "Subarray with K Different Integers",
//           id: "subarray-k-different",
//         },
//         { title: "Minimum Window Substring", id: "min-window-substring" },
//         { title: "Minimum Window Subsequence", id: "min-window-subsequence" },
//       ],
//     },
//   },
//   {
//     stepTitle: "Step 5: Greedy Algorithm",
//     sections: {
//       "Lec 1: Medium Problem": [
//         { title: "Assign Cookies", id: "assign-cookies" },
//         { title: "Fractional Knapsack Problem", id: "fractional-knapsack" },
//         {
//           title: "Greedy Algorithm to Find Minimum Number of Coins",
//           id: "min-coins-greedy",
//         },
//         { title: "Lemonade Change", id: "lemonade-change" },
//         { title: "Valid Parenthesis Checker", id: "valid-parenthesis-checker" },
//       ],
//       "Lec 2: Hard Problem": [
//         { title: "N Meetings in One Room", id: "n-meetings-one-room" },
//         { title: "Jump Game", id: "jump-game" },
//         { title: "Jump Game 2", id: "jump-game-2" },
//         {
//           title: "Minimum Number of Platforms Required for a Railway",
//           id: "min-platforms-required",
//         },
//         { title: "Job Sequencing Problem", id: "job-sequencing" },
//         { title: "Candy", id: "candy" },
//       ],
//     },
//   },
// ];

// export default steps;
