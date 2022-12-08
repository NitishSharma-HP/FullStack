/*
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

//Approach: put elements in set and comapare if they already exist or not.
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

    bool containsDuplicate(vector<int>& nums) {  
    unordered_set<int> us;
    for(int i=0;i<nums.size();i++){  //inserting array elements into hashmap
        if(us.count(nums[i])){
            return true;
        }
        else
        {
            us.insert(nums[i]);
        }
    }
    return false;
    }

int main(){
    vector<int> ary{1,2,4,4,5};
    cout<<containsDuplicate(ary); //1 true ary contains duplicate
}