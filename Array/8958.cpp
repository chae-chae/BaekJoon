//
//  8958.cpp
//  BaekJoon
//
//  Created by 채채 on 02/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int tNum;
    scanf("%d", &tNum);
    char str[tNum][80];
    for (int i = 0; i<tNum; i++) {
        scanf("%s", str[i]);
    }
    int cnt = 0;
    int score[tNum];
    for (int i = 0; i<tNum; i++) {
        score[i] = 0;
        for (int j = 0; j<80; j++) {
            if (str[i][j] == 'O') {
                cnt++;
                score[i] += cnt;
            } else if (str[i][j] == 'X') {
                cnt = 0;
            } else {
                cnt = 0;
                break;
            }
        }
    }
    for (int i = 0; i<tNum; i++) {
        printf("%d\n", score[i]);
    }
    return 0;
}
