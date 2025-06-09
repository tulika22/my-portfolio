// Only include days where you have info (done or missed)
export const rawCodingLog = [
  {
    "dayIndex": 0,
    "status": "done",
    "problems": [
        { "title": "Two Sum", "link": "https://leetcode.com/problems/two-sum/" },
        { "title": "Contains Duplicate", "link": "https://leetcode.com/problems/contains-duplicate/" },
        { "title": "Valid Anagram", "link": "https://leetcode.com/problems/valid-anagram/" },
        { "title": "Group Anagrams", "link": "https://leetcode.com/problems/group-anagrams/" },
        { "title": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
        { "title": "Encode and Decode Strings", "link": "https://leetcode.com/problems/encode-and-decode-strings/" },
        { "title": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/" },
        { "title": "Valid Sudoku", "link": "https://leetcode.com/problems/valid-sudoku/" },
        { "title": "Longest Consecutive Sequence", "link": "https://leetcode.com/problems/longest-consecutive-sequence/" }
        ]
    },
  {
  "dayIndex": 1,
  "status": "done",
  "problems": [
    { "title": "Valid Palindrome", "link": "https://leetcode.com/problems/valid-palindrome/" },
    { "title": "Two Sum II - Input Array Is Sorted", "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
    { "title": "3Sum", "link": "https://leetcode.com/problems/3sum/" },
    { "title": "Container With Most Water", "link": "https://leetcode.com/problems/container-with-most-water/" },
    { "title": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/" }
  ]
}, 
{
  "dayIndex": 2,
  "status": "done",
  "problems": [
    {
      "title": "Best Time to Buy And Sell Stock",
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
      "title": "Longest Repeating Character Replacement",
      "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
      "title": "Permutation In String",
      "link": "https://leetcode.com/problems/permutation-in-string/"
    },
    {
      "title": "Minimum Window Substring",
      "link": "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
      "title": "Sliding Window Maximum",
      "link": "https://leetcode.com/problems/sliding-window-maximum/"
    }
  ]
},
{
  "dayIndex": 3,
  "status": "done",
  "problems": [
    {
      "title": "Valid Parentheses",
      "link": "https://leetcode.com/problems/valid-parentheses/"
    },
    {
      "title": "Min Stack",
      "link": "https://leetcode.com/problems/min-stack/"
    },
    {
      "title": "Evaluate Reverse Polish Notation",
      "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    }
  ]
},
{
  "dayIndex": 4,
  "status": "done",
  "problems": [
    {
      "title": "Generate Parentheses",
      "link": "https://leetcode.com/problems/generate-parentheses/"
    },
    {
      "title": "Daily Temperatures",
      "link": "https://leetcode.com/problems/daily-temperatures/"
    },
    {
      "title": "Car Fleet",
      "link": "https://leetcode.com/problems/car-fleet/"
    },
    {
      "title": "Largest Rectangle In Histogram",
      "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    }
  ]
},
{
  "dayIndex": 5,
  "status": "done",
  "problems": [
    {
      "title": "Binary Search",
      "link": "https://leetcode.com/problems/binary-search/"
    },
    {
      "title": "Search a 2D Matrix",
      "link": "https://leetcode.com/problems/search-a-2d-matrix/"
    },
    {
      "title": "Koko Eating Bananas",
      "link": "https://leetcode.com/problems/koko-eating-bananas/"
    }
  ]
},
{
  "dayIndex": 6,
  "status": "done",
  "problems": [
    {
      "title": "Find Minimum In Rotated Sorted Array",
      "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
      "title": "Search In Rotated Sorted Array",
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    }
  ]
},
{
  "dayIndex": 7,
  "status": "done",
  "problems": [
    {
      "title": "Time Based Key Value Store",
      "link": "https://leetcode.com/problems/time-based-key-value-store/"
    }
  ]
},
{
  "dayIndex": 8,
  "status": "done",
  "problems": [
    {
      "title": "Median of Two Sorted Arrays",
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    }
  ]
},
{
  "dayIndex": 9,
  "status": "done",
  "problems": [
    {
      "title": "Reverse Linked List",
      "link": "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      "title": "Merge Two Sorted Lists",
      "link": "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      "title": "Linked List Cycle",
      "link": "https://leetcode.com/problems/linked-list-cycle/"
    }
  ]
},
{
  "dayIndex": 10,
  "status": "done",
  "problems": [
    {
      "title": "Reorder List",
      "link": "https://leetcode.com/problems/reorder-list/"
    },
    {
      "title": "Remove Nth Node From End of List",
      "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    }
  ]
},
{
  "dayIndex": 11,
  "status": "done",
  "problems": [
    {
      "title": "Copy List With Random Pointer",
      "link": "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
      "title": "Add Two Numbers",
      "link": "https://leetcode.com/problems/add-two-numbers/"
    }
  ]
}
  
  // Add more days you want to track here...
];

// Generate full 30-day (or dynamic N-day) log with missing days set to pending
export function generateFullCodingLog(startDateStr, totalDays, rawLogs) {
  const rawLogMap = new Map();
  rawLogs.forEach((log) => rawLogMap.set(log.dayIndex, log));

  const startDate = new Date(startDateStr);
  const fullLog = [];

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    if (rawLogMap.has(i)) {
      const raw = rawLogMap.get(i);
      fullLog.push({
        date: date.toISOString().split('T')[0],
        status: raw.status,
        problems: raw.problems,
      });
    } else {
      fullLog.push({
        date: date.toISOString().split('T')[0],
        status: 'pending',
        problems: [],
      });
    }
  }

  return fullLog;
}
