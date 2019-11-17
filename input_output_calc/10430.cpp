//
//  10430.cpp
//  BaekJoon
//
//  Created by 채채 on 16/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>

int main(void){
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    printf("%d\n", (a+b)%c);
    printf("%d\n", ((a%c)+(b%c))%c);
    printf("%d\n", (a*b)%c);
    printf("%d\n", ((a%c)*(b%c))%c);
    return 0;
}
