//
//  2442.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    for (int i = 1; i<=n; i++) {
        if (i < n) {
            printf("%*c", n-i, ' ');
        }
        for (int j = 1; j<=2*i-1; j++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
