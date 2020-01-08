//
//  2747.cpp
//  BaekJoon
//
//  Created by 채채 on 09/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int f1 = 0;
    int f2 = 1;
    int n;
    int fib;
    scanf("%d", &n);
    if (n == 1) {
        printf("1\n");
        return 0;
    }
    for (int i = 2; i<=n; i++) {
        fib = f1+f2;
        f1 = f2;
        f2 = fib;
    }
    printf("%d\n", fib);
    return 0;
}
