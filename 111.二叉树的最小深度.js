/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left && !root.right) return 1 + minDepth(root.left)
  if (!root.left && root.right) return 1 + minDepth(root.right)
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))

};

