//
//  2869.cpp
//  BaekJoon
//
//  Created by 채채 on 08/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//
#include <stdio.h>
int main(void){
    int a, b, v;
    int day = 0;
    scanf("%d %d %d", &a, &b, &v);
    int beforeOneDay = v-a;
    int up = a-b;
    day = beforeOneDay/up;
    if (beforeOneDay%up == 0) {
        day++;
    } else {
        day += 2;
    }
    printf("%d\n", day);
    return 0;
}
