//
//  1463.cpp
//  BaekJoon
//
//  Created by 채채 on 08/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int d[1000001];

int main(void){
    int n;
    scanf("%d", &n);
    int temp;
    d[1] = 0; // 1인경우에는 횟수가 0임!! 주의
    for (int i = 2; i<=n; i++) { // i=2로 시작하는 이유는 1은 구했기 때문!
        d[i] = d[i-1] + 1; // i-1의 최소횟수를 구한것 + 1 == 1빼는 연산한번추가한걸 최소라고 가정
        if (i % 2 == 0) { // i가 2로 나누어떨어진다면
            temp = d[i/2]+1;
            if (temp < d[i]) { // 나누기방식으로 나온 연산횟수와 기존 빼기연산횟수중 작은걸 저장하기
                d[i] = temp;
            }
        }
        if (i % 3 == 0) { // i가 3으로 나누어떨어진다면
            temp = d[i/3]+1;
            if (temp < d[i]) {
                d[i] = temp;
            }
        }
    }
    printf("%d\n", d[n]);
}
