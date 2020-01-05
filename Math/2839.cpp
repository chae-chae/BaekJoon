//
//  2839.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    int ans = -1;
    for (int i = 0; i*5 <= n; i++) {
        for (int j = 0; i*5 + j*3 <= n; j++) {
            if (i*5 + j*3 == n) {
                ans = i+j;
            }
        }
    }
    printf("%d\n", ans);
    return 0;
}
