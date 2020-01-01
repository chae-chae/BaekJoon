//
//  10871.cpp
//  BaekJoon
//
//  Created by 채채 on 19/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n, x;
    scanf("%d %d", &n, &x);
    int A[n];
    for (int i = 0; i<n; i++) {
        scanf("%d", &A[i]);
    }
    for (int j = 0; j<n; j++) {
        if (A[j] < x) {
            printf("%d ", A[j]);
        }
    }
    return 0;
}
