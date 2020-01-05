//
//  11721.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    char string[101];
    scanf("%s", string);
    char *ptr = string;
    int n = 0;
    while (*ptr != '\0') {
        printf("%c", *ptr);
        ptr++;
        n++;
        if (n%10 == 0) {
            printf("\n");
        }
    }
    return 0;
}
