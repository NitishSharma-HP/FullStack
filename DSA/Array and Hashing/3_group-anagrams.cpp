/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
//.................................................................................................................................................
// Approach-1: create a hashmap, where keys will be sorted strings and values will be arrays of those string's anagrams.
//e.g. ["eat","tea","tan","ate","nat","bat"]
/*
(key)     (values)
 aet -> [eat,tea,ate]
 ant -> [tan,nat]
 abt -> [bat]
 in last return array of values..

 **I can improve time complexity, as there are only 26 characters a-z, can create a fn to sort them, inbuilt sorting algo takes O(nlog(n)). See Approach 2 for this.
*/
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

vector<vector<string>> grpAnagram(vector<string> nums){
    vector<vector<string>> res;
    unordered_map<string,vector<string>> mp;  //hashmap: keys of type->strings, values of type->vector of strings 
    for(int i=0;i<nums.size();i++){
        string t=nums[i];              //storing string in temp
        sort(t.begin(),t.end());       //sorting temp string
        mp[t].push_back(nums[i]);     //inserting sorted temp string as key and original string as its value in hashmap.
    }
    for(auto i:mp){
        res.push_back(i.second);  //returning values from hashmap as 2d ary.
    }
    return res;
}
int main(){
    vector<string> str{"eat","tea","tan","ate","nat","bat"};
    vector<vector<string>> res;
    res=grpAnagram(str);
    cout<<res.size()<<endl;
    cout<<res[0][0]<<" ";
    cout<<res[1][0]<<" ";
    cout<<res[1][1]<<" ";
    cout<<res[2][0]<<" ";
    cout<<res[2][1]<<" ";
    cout<<res[2][2]<<" ";
}

//.................................................................................................................................................................
//Approach:2 -> instead of using inbuilt sort, create a sort fn.

// #include<iostream>
// #include<bits/stdc++.h>
// using namespace std;

// vector<vector<string>> grpAnagram(vector<string> nums){
//     vector<vector<string>> res;
//     unordered_map<string,vector<string>> mp;  //hashmap: keys->strings, values->vector of strings 
//     for(int i=0;i<nums.size();i++){
//         string t=nums[i];                     //storing string in temp
//         sort(t.begin(),t.end());             //sorting temp string
//         mp[t].push_back(nums[i]);         //inserting sorted temp string as key and original string as its value in hashmap.
//     }
//     for(auto i:mp){
//         res.push_back(i.second);        //returning only values from hashmap as 2d ary
//     }
//     return res;
// }
//  //sorting function
// string sortStr(string str){
//     int counter[26]={0};           //created a array of size 26 and initailez with 0's., it will be like, at index 0->a, 1->b, 2->c....
//     for(char c:str){      
//         counter[c-'a']++;          //populating array with values. if char in str is 'a' then at index ('a' - 'a' i.e 0) value will be increment to 1.
//     }                             //'b' - 'a' = (98 - 97 = 1). , ('c' - 'a' = 3).....('z' - 'a' = 25)
//     string t="";
//     for(int i=0;i<26;i++){
//         t+=string(counter[i], i+'a'); //not understanding this
//     }
//     return t;
// }

// int main(){
//     vector<string> str{"eat","tea","tan","ate","nat","bat"};
//     vector<vector<string>> res;
//     res=grpAnagram(str);
//     cout<<res.size()<<endl;
//     cout<<res[0][0]<<" ";
//     cout<<res[1][0]<<" ";
//     cout<<res[1][1]<<" ";
//     cout<<res[2][0]<<" ";
//     cout<<res[2][1]<<" ";
//     cout<<res[2][2]<<" ";
// }