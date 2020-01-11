//
//  10872.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    if (n == 0) {
        printf("1\n");
        return 0;
    }
    int long long sum = 1;
    for (int i = n; i>=1; i--) {
        sum *= i;
    }
    printf("%lld\n", sum);
    return 0;
}
