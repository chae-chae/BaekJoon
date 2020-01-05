//
//  2440.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    for (int i = 0; i<n; i++) {
        for (int j = n-i; j>0; j--) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
