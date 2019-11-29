//
//  1110.c
//  BaekJoon
//
//  Created by 채채 on 30/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int input, num, ten, one, sum;
    int cnt = 0, new = -1;
    scanf("%d", &input);
    num = input;
    while (input != new) {
        one = num%10;
        ten = num/10;
        sum = ten + one;
        new = one*10 + sum;
        num = new;
        cnt++;
    }
    printf("%d\n", cnt);
    return 0;
}
