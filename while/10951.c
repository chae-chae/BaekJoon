//
//  10951.c
//  BaekJoon
//
//  Created by 채채 on 30/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b;
    a = b = -1;
    while (scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n", a+b);
    }
    return 0;
}
