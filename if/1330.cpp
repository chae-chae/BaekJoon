//
//  1330.cpp
//  BaekJoon
//
//  Created by 채채 on 17/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>

int main(void){
    int a, b;
    scanf("%d %d", &a, &b);
    if (a>b) {
        printf(">");
    } else if (a<b) {
        printf("<");
    } else {
        printf("==");
    }
    return 0;
}
