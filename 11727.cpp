//
//  11727.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>

int d[1001];
int calc(int n);

int main(void){
    int n;
    scanf("%d", &n);
    printf("%d\n", calc(n));
    return 0;
}

int calc(int n){
    if (n == 1) return 1;
    if (n == 2) return 3;
    if (d[n] != 0) return d[n];
    return d[n] = (calc(n-1) + 2*calc(n-2)) % 10007; // 점화식 찾기 연습 더하기
}
