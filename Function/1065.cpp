//
//  1065.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int hansu(int input);
int main(void){
    int input;
    int cnt = 0;
    scanf("%d", &input);
    for (int i = 1; i<=input; i++) {
        cnt += hansu(i);
    }
    printf("%d\n", cnt);
    return 0;
}
int hansu(int input){
    int one, ten, hun;
    int cnt = 0;
    if (input<100) {
        cnt++;
    } else if (input<1000){
        hun = input/100;
        ten = (input%100)/10;
        one = (input%100)%10;
        if (hun - ten == ten - one) {
            cnt++;
        }
    }
    return cnt;
}
