//
//  2753.cpp
//  BaekJoon
//
//  Created by 채채 on 17/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int year;
    scanf("%d", &year);
    if (year%4 == 0) {
        if (year %400 == 0) {
            printf("1");
        } else if (year%100 != 0){
            printf("1");
        } else {
            printf("0");
        }
    } else {
        printf("0");
    }
    return 0;
}
