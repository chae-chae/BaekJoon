//
//  10039.cpp
//  BaekJoon
//
//  Created by 채채 on 07/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int score[5];
    int sum = 0;
    for (int i = 0; i<5; i++) {
        scanf("%d", &score[i]);
    }
    for (int i = 0; i<5; i++) {
        if (score[i] < 40) {
            score[i] = 40;
        }
        sum += score[i];
    }
    printf("%d\n", sum/5);
    return 0;
}
