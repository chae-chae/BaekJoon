//
//  10953.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b;
    int t;
    scanf("%d", &t);
    for (int i = 0; i<t; i++) {
        scanf("%d,%d", &a, &b);
        printf("%d\n", a+b);
    }
    return 0;
}
