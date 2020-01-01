//
//  10952.c
//  BaekJoon
//
//  Created by 채채 on 30/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b;
    scanf("%d %d", &a, &b);
    while (a && b) {
        printf("%d\n", a+b);
        scanf("%d %d", &a, &b);
    }
    return 0;
}
