/* https://leetcode.com/problems/valid-anagram/description/ 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
*/

// Approach 1:- using two hashmaps, store strings in diff diff hasmaps and then compare them.
// T = O(s + t), have to iterate throung both strings to store them in hashmap.
// S = O(s + t), here is a problem,as two hasmaps will take up space. so to make it space efficient approach 2 can be used.
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

bool anagram(string s, string t){
    unordered_map<char,int> m1;  
    unordered_map<char,int> m2;

    if(s.length()==t.length()) //if length of both stings same?
    {
        for(int i=0;i<s.length();i++)
        {
            m1[s[i]]= 1+m1[s[i]];  //inserting characters from string 1 to hmap as key and their count as value.
            m2[t[i]]= 1+m2[t[i]];  //inserting characters from string 2 to hmap as key and their count as value.
        }
    }
    if(m1!=m2){        //if both hashmaps same?
        return false;
    }
    else return true;
}
int main(){
    string s="cate";
    string p="act2";

    cout<<anagram(s,p);
}

//......................................................................................................................................................
//Approach 2: sort strings, e.g. s='act', p='cat'.
//after sort: s='act', p='act'.

// #include<iostream>
// #include<bits/stdc++.h>
// using namespace std;

// bool anagram(string s, string t){
//   sort(s.begin(),s.end());         //sort strings
//   sort(t.begin(),t.end());
//   return s==t;                     //if same return true
// }
// int main(){
//     string s="cate";
//     string p="act2";

//     cout<<anagram(s,p);
// }
