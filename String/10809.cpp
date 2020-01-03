
//
//  10809.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    char s[101];
    scanf("%s", s);
    int alpha[26];
    for (int i = 0; i<26; i++) {
        alpha[i] = -1;
    }
    char *check = s;
    int cnt = 0;
    while (*check != '\0') {
        for (int i = 0; i<26; i++) {
            if (*check == 'a'+i) {
                if (alpha[i] == -1){
                alpha[i] = cnt;
                }
            }
        }
        check++;
        cnt++;
    }
    for (int i = 0; i<26; i++) {
        printf("%d ", alpha[i]);
    }
    return 0;
}
