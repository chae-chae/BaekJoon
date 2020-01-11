//
//  1026.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    int a[n];
    int b[n];
    int sum = 0;
    int temp;
    for (int i = 0; i<n; i++) {
        scanf("%d", &a[i]);
    }
    for (int i = 0; i<n; i++) {
        scanf("%d", &b[i]);
    }
    for (int i = 0; i<n; i++) {
        for (int j = 0; j<n-1-i; j++) {
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    for (int i = 0; i<n; i++) {
        for (int j = 0; j<n-1-i; j++) {
            if (b[j] > b[j+1]) {
                temp = b[j];
                b[j] = b[j+1];
                b[j+1] = temp;
            }
        }
    }
    for (int i = 0, j = n-1; i<n; i++, j--) {
        sum += a[i] * b[j];
    }
    printf("%d\n", sum);
    return 0;
}
