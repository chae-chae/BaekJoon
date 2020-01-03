//
//  2675.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int tNum;
    scanf("%d", &tNum);
    for (int i = 0; i<tNum; i++) {
        int repeat;
        scanf("%d", &repeat);
        char s[161];
        scanf("%s", s);
        char *ptr = s;
        while (*ptr != '\0') {
            for (int j = 0; j<repeat; j++) {
                
                printf("%c", *ptr);
            }
            ptr++;
        }
        printf("\n");
    }
    return 0;
}
