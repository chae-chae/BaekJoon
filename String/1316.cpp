//
//  1316.cpp
//  BaekJoon
//
//  Created by 채채 on 04/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
#include <string.h>
int main(void){
    int n;
    int cnt = 0;
    scanf("%d", &n);
    for (int i = 0; i<n; i++) {
        char word[101];
        int alpha[26] = {0, };
        int check[26] = {0, };
        int no = 0;
        scanf("%s", word);
        int len = strlen(word);
        for (int j = 0; j<len; j++) {
            alpha[word[j]-'a']++; // a면 0번에 b면 1번에 .. 알파벳 각각 몇개있는지 들어가게됨
            if (j > 0) { // index 1부터 연속인지 검사
                if (word[j-1] == word[j]) {
                    check[word[j]-'a']++; // 만약 알파벳연속이면 체크 해당알파벳칸++
                }
            }
        }
        for (int k = 0; k<26; k++) {
            if (alpha[k] - check[k] > 1) { // 따로 떨어져있었다면 알파벳보다 체크수가 적음 붙어있었으면 알파벳이랑 체크랑 수가 1만 차이가 남
                no++;
            }
        }
        if (no == 0) {
            cnt++;
        }
    }
    printf("%d\n", cnt);
    return 0;
}
