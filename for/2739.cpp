//
//  2739.cpp
//  BaekJoon
//
//  Created by 채채 on 18/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    for (int i = 1; i<=9; i++) {
        printf("%d * %d = %d\n", n, i, n*i);
    }
    return 0;
}
