//
//  11726.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//


//  dp랑 memoization 연습하기!

#include <stdio.h>

int d[1001]; // d배열의 크기는 1001이상이어야함! 1<=N<=1000 이면 d[1000]이 존재해야 하기 때문!! 
int calc(int n);
int main(void){
    int n;
    scanf("%d", &n);
    printf("%d\n", calc(n));
    return 0;
}

int calc(int n){
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (d[n] != 0) return d[n];
    return d[n] = (calc(n-1) + calc(n-2)) % 10007;
}
