//
//  8393.cpp
//  BaekJoon
//
//  Created by 채채 on 18/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    int sum = 0;
    scanf("%d", &n);
    while (n != 0) {
        sum += n--;
    }
    printf("%d\n", sum);
    return 0;
}
