//
//  10817.cpp
//  BaekJoon
//
//  Created by 채채 on 18/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    if (a>=b && a>=c) { // a가 제일 클때
        b > c ? printf("%d", b) : printf("%d", c);
    } else if (b>=a && b>=c) { // b가 제일 클때
        a > c ? printf("%d", a) : printf("%d", c);
    } else if (c>=a && c>=b) { // c가 제일 클때
        a > b ? printf("%d", a) : printf("%d", b);
    }
    return 0;
}
