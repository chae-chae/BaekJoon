//
//  5622.cpp
//  BaekJoon
//
//  Created by 채채 on 04/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    char grandma[16];
    scanf("%s", grandma);
    char *ptr = grandma;
    int sec = 0;
    while (*ptr != '\0') {
        if (*ptr >= 'A' && *ptr <= 'C') {
            sec += 3;
        } else if (*ptr >= 'D' && *ptr <= 'F') {
            sec += 4;
        } else if (*ptr >= 'G' && *ptr <= 'I') {
            sec += 5;
        } else if (*ptr >= 'J' && *ptr <= 'L') {
            sec += 6;
        } else if (*ptr >= 'M' && *ptr <= 'O') {
            sec += 7;
        } else if (*ptr >= 'P' && *ptr <= 'S') {
            sec += 8;
        } else if (*ptr >= 'T' && *ptr <= 'V') {
            sec += 9;
        } else if (*ptr >= 'W' && *ptr <= 'Z') {
            sec += 10;
        }
        ptr++;
    }
    printf("%d\n", sec);
    return 0;
}
