//
//  2455.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int input[4][2];
    int sum[4] = {0, };
    for (int i = 0; i<4; i++) {
        scanf("%d %d", &input[i][0], &input[i][1]);
    }
    sum[0] = input[0][1];
    for (int i = 1; i<4; i++) {
        sum[i] = sum[i-1] + input[i][1] - input[i][0];
    }
    int max = sum[0];
    for (int i = 1; i<4; i++) {
        if (max < sum[i]) {
            max = sum[i];
        }
    }
    printf("%d\n", max);
    return 0;
}
