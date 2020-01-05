//
//  1924.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b;
    scanf("%d %d", &a, &b);
//    int day[7] = {1, 2, 3, 4, 5, 6, 0}; 월화수목금토일
    int month[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int ans;
    int date = 0;
    for (int i = 0; i<a; i++) {
        date += month[i];
    }
    date += b;
    ans = date%7; //나머지 0이 일요일
    switch (ans) {
        case 0:
            printf("SUN\n");
            break;
        case 1:
            printf("MON\n");
            break;
        case 2:
            printf("TUE\n");
            break;
        case 3:
            printf("WED\n");
            break;
        case 4:
            printf("THU\n");
            break;
        case 5:
            printf("FRI\n");
            break;
        case 6:
            printf("SAT\n");
            break;
        default:
            break;
    }
    return 0;
}
