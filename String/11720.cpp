//
//  11720.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int cnt;
    int sum = 0;
    char c;
    scanf("%d", &cnt);
    for (int i = 0; i<cnt; i++) {
        scanf(" %c", &c);
        sum += c-'0';
    }
    printf("%d\n", sum);
    return 0;
}
