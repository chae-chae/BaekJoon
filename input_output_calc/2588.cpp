//
//  2588.cpp
//  BaekJoon
//
//  Created by 채채 on 16/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>

int main(void){
    int a, b;
    int c, d, e;
    scanf("%d", &a);
    scanf("%d", &b);
    c = b/100; //385/100 = 3
    d = (b%100)/10; //85/10 = 8
    e = (b%100)%10; //85%10 = 5
    printf("%d\n", a*e);
    printf("%d\n", a*d);
    printf("%d\n", a*c);
    printf("%d\n", a*b);
    return 0;
}
