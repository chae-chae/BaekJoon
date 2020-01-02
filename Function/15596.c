//
//  15596.c
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
long long sum(int *a, int n);
int main(void){
    int n;
    scanf("%d", &n);
    int a[n];
    long long res;
    for (int i = 0; i<n; i++) {
        scanf("%d", &a[i]);
    }
    res = sum(a, n);
    printf("%lld\n", res);
    return 0;
}
long long sum(int *a, int n){
    long long res = 0;
    for (int i = 0; i<n; i++) {
        res += a[i];
    }
    return res;
}
