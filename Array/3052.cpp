//
//  3052.cpp
//  BaekJoon
//
//  Created by 채채 on 02/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int input[10];
    int nam[10] = {0, };
    int cnt = 0;
    for (int i = 0; i<10; i++) {
        scanf("%d", &input[i]);
        nam[i] = input[i] % 42;
    }
    int temp;
    for (int i = 0; i<9; i++) {
        for (int j = 0; j<9-i; j++) {
            if (nam[j] > nam[j+1]) {
                temp = nam[j];
                nam[j] = nam[j+1];
                nam[j+1] = temp;
            }
        }
    }
    for (int i = 0; i<10; i++) {
        if (nam[i] != nam[i+1]) {
            cnt++;
        }
    }
    printf("%d\n", cnt);
    return 0;
}
